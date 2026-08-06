async function api(path, opts = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { detail: text }; }
  if (!res.ok) throw new Error(typeof data.detail === "string" ? data.detail : text || res.statusText);
  return data;
}

function bindForm(id, endpoint, okMsg) {
  const form = document.getElementById(id);
  const msg = form.querySelector(".form-msg");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(form).entries());
    if (body.rate) body.rate = Number(body.rate);
    if (body.budget) body.budget = Number(body.budget);
    if (body.release_percent) body.release_percent = Number(body.release_percent);
    body.consent_fingerprint = !!form.querySelector('[name="consent_fingerprint"]')?.checked;
    if (!body.token) {
      try { body.token = localStorage.getItem("computegate_token") || ""; } catch (_) {}
    }
    if (!body.token) {
      msg.hidden = false;
      msg.style.color = "#ff7b7b";
      msg.textContent = "請先到監看台登入，再回來掛機／發需求。";
      return;
    }
    if (endpoint.includes("/host") && (body.release_percent == null || body.release_percent === "")) {
      msg.hidden = false;
      msg.style.color = "#ff7b7b";
      msg.textContent = "請填寫釋出 %（1–100）。";
      return;
    }
    if (body.hostname) {
      body.platform = navigator.platform || "";
      body.user_agent = navigator.userAgent || "";
      try {
        let id = localStorage.getItem("cg_install_id");
        if (!id) {
          id = crypto.randomUUID();
          localStorage.setItem("cg_install_id", id);
        }
        body.install_id = id;
      } catch (_) {}
    }
    try {
      const lead = await api(endpoint, { method: "POST", body: JSON.stringify(body) });
      msg.hidden = false;
      msg.style.color = "";
      const rp = lead.release_percent != null ? `目前釋出 ${lead.release_percent}%。` : "";
      const fp = lead.host_fingerprint ? `指紋 ${lead.host_fingerprint.slice(0, 12)}…` : "";
      msg.textContent = `${okMsg}${rp}${fp}`;
      form.reset();
      if (form.querySelector('[name="release_percent"]')) {
        form.querySelector('[name="release_percent"]').value = "100";
      }
      try {
        const tok = localStorage.getItem("computegate_token") || "";
        for (const id of ["hostToken", "renterToken"]) {
          const el = document.getElementById(id);
          if (el) el.value = tok;
        }
      } catch (_) {}
      refreshStats();
    } catch (err) {
      msg.hidden = false;
      msg.style.color = "#ff7b7b";
      msg.textContent = String(err.message || err);
    }
  });
}

async function refreshStats() {
  try {
    const s = await api("/api/market/stats");
    document.getElementById("hostCount").textContent = s.hosts;
    document.getElementById("rentCount").textContent = s.renters;
    document.getElementById("feeTotal").textContent = `${s.fee_total} ${s.currency || "TWD"}`;
    document.getElementById("feePct").textContent = `${s.fee_percent}%`;
    document.getElementById("idx").textContent = s.index_points;
    document.getElementById("spot").textContent = `${s.spot_twd_per_hour} ${s.currency}/時`;
    document.getElementById("minW").textContent = s.min_withdraw_twd;
    document.getElementById("formula").textContent = s.formula || "";
    document.getElementById("trialDeals").textContent = s.trial_max_free_deals ?? 3;
    document.getElementById("trialAmt").textContent = s.trial_max_free_amount ?? 2000;
    document.getElementById("openDisputes").textContent = s.open_disputes ?? 0;

    const badge = document.getElementById("payoutBadge");
    const rule = document.getElementById("payoutRule");
    const banner = document.getElementById("payoutBanner");
    if (s.payout_ready) {
      badge.textContent = "可申請提領";
      rule.textContent = "收款管道已開啟：達門檻且非試用期可申請提領（仍需人工匯款）。";
      if (banner) {
        banner.hidden = true;
        banner.className = "banner ok";
      }
    } else {
      badge.textContent = "只記帳不提領";
      rule.textContent = "目前收款管道尚未完全打通：所有手續費與餘額僅記帳，暫不可提領。打通後會開放。";
      if (banner) {
        banner.hidden = false;
        banner.className = "banner warn";
        banner.innerHTML = "目前收款管道尚未完全打通：所有手續費與餘額<strong>僅記帳，暫不可提領</strong>。打通後會開放。";
      }
    }

    const refLine = document.getElementById("refLine");
    if (s.market_ref_twd_per_hour) {
      refLine.hidden = false;
      const diff = s.spot_twd_per_hour - s.market_ref_twd_per_hour;
      const pct = ((diff / s.market_ref_twd_per_hour) * 100).toFixed(1);
      refLine.textContent =
        `市場參考價 ${s.market_ref_twd_per_hour} TWD/時（人工）· 現貨差 ${pct}%（不強制覆蓋）`;
    } else {
      refLine.hidden = true;
    }

    const list = document.getElementById("hostList");
    const rows = s.host_list || [];
    if (!rows.length) {
      list.textContent = "尚無供給。";
    } else {
      list.innerHTML = rows.map((h) =>
        `<div><b>${escapeHtml(h.name)}</b> · ${escapeHtml(h.specs)} · ` +
        `釋出 <b>${h.release_percent}%</b> · 有效 VRAM ${h.effective_vram_gb}GB · ` +
        `現貨 ${h.spot_twd_per_hour} TWD/時</div>`
      ).join("");
    }
  } catch (_) {
    document.getElementById("hostCount").textContent = "離線";
  }
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

document.getElementById("quoteForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const specs = fd.get("specs");
  const hours = Number(fd.get("hours") || 1);
  const release_percent = Number(fd.get("release_percent") || 100);
  try {
    const q = await api("/api/market/quote", {
      method: "POST",
      body: JSON.stringify({ specs, hours, release_percent }),
    });
    let extra = "";
    if (q.market_ref_twd_per_hour) {
      extra = `<br/>市場參考 ${q.market_ref_twd_per_hour}（差 ${q.ref_vs_spot_pct ?? "—"}%）`;
    }
    document.getElementById("quoteOut").innerHTML =
      `GPU <b>${q.gpu_model}</b> · 權重 ${q.gpu_weight}<br/>` +
      `釋出 <b>${q.release_percent}%</b> · 有效 VRAM ${q.effective_vram_gb}GB<br/>` +
      `指數 <b>${q.index_points}</b> 點 · 現貨 <b>${q.spot_twd_per_hour}</b> TWD/時<br/>` +
      `時數 ${q.hours} → 成交估 <b>${q.gross_twd}</b> TWD<br/>` +
      `若非試用，手續費約 ${q.fee_if_no_trial} TWD（${q.fee_percent}%）` +
      extra;
    refreshStats();
  } catch (err) {
    document.getElementById("quoteOut").textContent = String(err.message || err);
  }
});

document.getElementById("releaseForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const msg = document.getElementById("releaseMsg");
  try {
    const lead = await api("/api/market/host/release", {
      method: "POST",
      body: JSON.stringify({
        email: fd.get("email"),
        release_percent: Number(fd.get("release_percent")),
      }),
    });
    msg.hidden = false;
    msg.style.color = "";
    msg.textContent = `已更新：${lead.email} 目前釋出 ${lead.release_percent}%（進行中訂單不受影響）。`;
    refreshStats();
  } catch (err) {
    msg.hidden = false;
    msg.style.color = "#ff7b7b";
    msg.textContent = String(err.message || err);
  }
});

document.getElementById("packForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const out = document.getElementById("packOut");
  try {
    const r = await api("/api/market/pack/suggest", {
      method: "POST",
      body: JSON.stringify({
        target_vram_gb: Number(fd.get("target_vram_gb")),
        renter_email: fd.get("renter_email") || "",
      }),
    });
    const hosts = (r.suggested_hosts || []).map((h) =>
      `· ${escapeHtml(h.name)}（${escapeHtml(h.specs)}）釋出 ${h.release_percent}% · ${h.spot_twd_per_hour} TWD/時`
    ).join("<br/>");
    let confirmBtn = "";
    if (r.pack && r.pack.id) {
      confirmBtn = `<p><button type="button" id="confirmPackBtn" data-id="${escapeHtml(r.pack.id)}">人工確認此資源包</button></p>`;
    }
    out.innerHTML =
      `<b>${escapeHtml(r.message)}</b><br/>` +
      `目標 ${r.target_vram_gb} · 合計約 ${r.combined_vram_gb ?? "—"}<br/>` +
      `${hosts || "無可用主機"}` +
      confirmBtn +
      `<p class="hint">${escapeHtml(r.scope_note || "")}</p>`;
    const btn = document.getElementById("confirmPackBtn");
    if (btn) {
      btn.onclick = async () => {
        try {
          const pack = await api(`/api/market/pack/${btn.dataset.id}/confirm`, { method: "POST" });
          out.innerHTML += `<p>已確認資源包 ${pack.id.slice(0, 8)}…（status=${pack.status}）</p>`;
          refreshStats();
        } catch (err) {
          alert(err.message);
        }
      };
    }
  } catch (err) {
    out.textContent = String(err.message || err);
  }
});

bindForm(
  "join-host",
  "/api/market/host",
  "已加入排隊。同一 Email 試用僅一次；免收有筆數／金額上限。"
);
bindForm(
  "join-rent",
  "/api/market/renter",
  "已加入排隊。同一 Email 試用僅一次；免收有筆數／金額上限。"
);
bindForm("disputeForm", "/api/market/dispute", "工單已送出，將由人工審核（AI 不自動裁決）。");
try {
  const tok = localStorage.getItem("computegate_token") || "";
  const hostTok = document.getElementById("hostToken");
  const rentTok = document.getElementById("renterToken");
  if (hostTok) hostTok.value = tok;
  if (rentTok) rentTok.value = tok;
} catch (_) {}
refreshStats();
