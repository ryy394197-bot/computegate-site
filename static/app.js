const AUTH_TOKEN_KEY = "computegate_token";

/** 顯卡連動：品牌 → 系列 → 型號 → 後綴（SUPER／Ti 等依型號顯示） */
const GPU_CATALOG = {
  nvidia: {
    label: "N 卡（NVIDIA）",
    series: {
      "50": {
        label: "50 系",
        models: [
          { id: "5050", label: "5050", suffixes: [{ id: "base", label: "無（原版）", vram: 8 }] },
          {
            id: "5060",
            label: "5060",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "Ti", label: "Ti", vram: 16 },
            ],
          },
          {
            id: "5070",
            label: "5070",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 12 },
              { id: "Ti", label: "Ti", vram: 16 },
            ],
          },
          { id: "5080", label: "5080", suffixes: [{ id: "base", label: "無（原版）", vram: 16 }] },
          { id: "5090", label: "5090", suffixes: [{ id: "base", label: "無（原版）", vram: 32 }] },
        ],
      },
      "40": {
        label: "40 系",
        models: [
          { id: "4050", label: "4050", suffixes: [{ id: "base", label: "無（原版）", vram: 6 }] },
          {
            id: "4060",
            label: "4060",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "Ti", label: "Ti", vram: 8 },
            ],
          },
          {
            id: "4070",
            label: "4070",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 12 },
              { id: "SUPER", label: "SUPER", vram: 12 },
              { id: "Ti", label: "Ti", vram: 12 },
              { id: "Ti SUPER", label: "Ti SUPER", vram: 16 },
            ],
          },
          {
            id: "4080",
            label: "4080",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 16 },
              { id: "SUPER", label: "SUPER", vram: 16 },
            ],
          },
          { id: "4090", label: "4090", suffixes: [{ id: "base", label: "無（原版）", vram: 24 }] },
        ],
      },
      "30": {
        label: "30 系",
        models: [
          { id: "3050", label: "3050", suffixes: [{ id: "base", label: "無（原版）", vram: 8 }] },
          {
            id: "3060",
            label: "3060",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 12 },
              { id: "Ti", label: "Ti", vram: 8 },
            ],
          },
          {
            id: "3070",
            label: "3070",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "Ti", label: "Ti", vram: 8 },
            ],
          },
          {
            id: "3080",
            label: "3080",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 10 },
              { id: "Ti", label: "Ti", vram: 12 },
            ],
          },
          {
            id: "3090",
            label: "3090",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 24 },
              { id: "Ti", label: "Ti", vram: 24 },
            ],
          },
        ],
      },
      "20": {
        label: "20 系",
        models: [
          {
            id: "2060",
            label: "2060",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 6 },
              { id: "SUPER", label: "SUPER", vram: 8 },
            ],
          },
          {
            id: "2070",
            label: "2070",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "SUPER", label: "SUPER", vram: 8 },
            ],
          },
          {
            id: "2080",
            label: "2080",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "SUPER", label: "SUPER", vram: 8 },
              { id: "Ti", label: "Ti", vram: 11 },
            ],
          },
        ],
      },
      "16": {
        label: "16 系",
        models: [
          {
            id: "1650",
            label: "1650",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 4 },
              { id: "SUPER", label: "SUPER", vram: 4 },
            ],
          },
          {
            id: "1660",
            label: "1660",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 6 },
              { id: "Ti", label: "Ti", vram: 6 },
              { id: "SUPER", label: "SUPER", vram: 6 },
            ],
          },
        ],
      },
    },
  },
  amd: {
    label: "A 卡（AMD）",
    series: {
      "7000": {
        label: "7000 系",
        models: [
          {
            id: "7600",
            label: "RX 7600",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "XT", label: "XT", vram: 16 },
            ],
          },
          {
            id: "7700",
            label: "RX 7700",
            suffixes: [{ id: "XT", label: "XT", vram: 12 }],
          },
          {
            id: "7800",
            label: "RX 7800",
            suffixes: [{ id: "XT", label: "XT", vram: 16 }],
          },
          {
            id: "7900",
            label: "RX 7900",
            suffixes: [
              { id: "GRE", label: "GRE", vram: 16 },
              { id: "XT", label: "XT", vram: 20 },
              { id: "XTX", label: "XTX", vram: 24 },
            ],
          },
        ],
      },
      "6000": {
        label: "6000 系",
        models: [
          {
            id: "6600",
            label: "RX 6600",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 8 },
              { id: "XT", label: "XT", vram: 8 },
            ],
          },
          {
            id: "6700",
            label: "RX 6700",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 10 },
              { id: "XT", label: "XT", vram: 12 },
            ],
          },
          {
            id: "6800",
            label: "RX 6800",
            suffixes: [
              { id: "base", label: "無（原版）", vram: 16 },
              { id: "XT", label: "XT", vram: 16 },
            ],
          },
          {
            id: "6900",
            label: "RX 6900",
            suffixes: [{ id: "XT", label: "XT", vram: 16 }],
          },
        ],
      },
    },
  },
};

const SUFFIX_PLACEHOLDER = "__";

function fillSelect(sel, options, placeholder, { placeholderValue = "" } = {}) {
  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = placeholderValue;
  ph.textContent = placeholder;
  sel.appendChild(ph);
  for (const opt of options) {
    const o = document.createElement("option");
    o.value = opt.id;
    o.textContent = opt.label;
    if (opt.vram != null) o.dataset.vram = String(opt.vram);
    sel.appendChild(o);
  }
}

function currentModelDef(brandVal, seriesVal, modelVal) {
  return GPU_CATALOG[brandVal]?.series?.[seriesVal]?.models?.find((m) => m.id === modelVal) || null;
}

/** 原版用 id=base，不可寫進 specs；placeholder 用 __ 避免與原版撞車 */
function normalizeSuffix(suffix) {
  if (!suffix || suffix === "base" || suffix === SUFFIX_PLACEHOLDER) return "";
  return suffix;
}

function buildGpuLabel(brand, seriesId, modelId, suffix) {
  if (!brand || !modelId) return "";
  const sfx = normalizeSuffix(suffix);
  if (brand === "nvidia") {
    const family = seriesId === "16" ? "GTX" : "RTX";
    const base = `${family} ${modelId}`;
    return sfx ? `${base} ${sfx}` : base;
  }
  const base = modelId.startsWith("RX") ? modelId : `RX ${modelId}`;
  return sfx ? `${base} ${sfx}` : base;
}

function gpuPickerReady(root) {
  const brand = root.querySelector('[name="gpu_brand"]')?.value;
  const series = root.querySelector('[name="gpu_series"]')?.value;
  const model = root.querySelector('[name="gpu_model"]')?.value;
  const suffix = root.querySelector('[name="gpu_suffix"]')?.value;
  if (!brand || !series || !model) return false;
  if (!suffix || suffix === SUFFIX_PLACEHOLDER) return false;
  return true;
}

function syncGpuPicker(root) {
  const brand = root.querySelector('[name="gpu_brand"]');
  const series = root.querySelector('[name="gpu_series"]');
  const model = root.querySelector('[name="gpu_model"]');
  const suffix = root.querySelector('[name="gpu_suffix"]');
  const form = root.closest("form");
  const vramInput = form?.querySelector('[name="vram_gb"]');
  const specsHidden = form?.querySelector('[name="specs"]');
  const preview = form?.querySelector('[id$="GpuPreview"]') || form?.querySelector(".gpu-preview");

  function updatePreview() {
    if (!gpuPickerReady(root)) {
      if (preview) preview.textContent = "尚未選擇顯卡";
      if (specsHidden) specsHidden.value = "";
      return;
    }
    const label = buildGpuLabel(brand.value, series.value, model.value, suffix.value);
    const vram = vramInput?.value || "";
    const text = `${label} ${vram}GB`;
    if (preview) preview.textContent = text;
    if (specsHidden) specsHidden.value = text;
  }

  function applyVramFromOption(opt) {
    if (opt?.dataset?.vram && vramInput) vramInput.value = opt.dataset.vram;
  }

  brand.addEventListener("change", () => {
    const cat = GPU_CATALOG[brand.value];
    series.disabled = !cat;
    model.disabled = true;
    suffix.disabled = true;
    fillSelect(
      series,
      cat ? Object.entries(cat.series).map(([id, s]) => ({ id, label: s.label })) : [],
      "先選系列"
    );
    fillSelect(model, [], "先選型號");
    fillSelect(suffix, [], "先選後綴（SUPER／Ti…）", { placeholderValue: SUFFIX_PLACEHOLDER });
    updatePreview();
  });

  series.addEventListener("change", () => {
    const cat = GPU_CATALOG[brand.value];
    const ser = cat?.series?.[series.value];
    model.disabled = !ser;
    suffix.disabled = true;
    fillSelect(
      model,
      (ser?.models || []).map((m) => ({ id: m.id, label: m.label })),
      "先選型號"
    );
    fillSelect(suffix, [], "先選後綴（SUPER／Ti…）", { placeholderValue: SUFFIX_PLACEHOLDER });
    updatePreview();
  });

  model.addEventListener("change", () => {
    const mdef = currentModelDef(brand.value, series.value, model.value);
    const sfx = mdef?.suffixes || [{ id: "base", label: "無（原版）", vram: 12 }];
    suffix.disabled = !mdef;
    fillSelect(suffix, sfx, "選後綴（含 SUPER）", { placeholderValue: SUFFIX_PLACEHOLDER });
    if (sfx.length) {
      suffix.value = sfx[0].id;
      applyVramFromOption(suffix.selectedOptions[0]);
    }
    updatePreview();
  });

  suffix.addEventListener("change", () => {
    applyVramFromOption(suffix.selectedOptions[0]);
    updatePreview();
  });
  if (vramInput) vramInput.addEventListener("input", updatePreview);
  updatePreview();
}

document.querySelectorAll("[data-gpu-picker]").forEach(syncGpuPicker);

async function api(path, opts = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { detail: text }; }
  if (!res.ok) {
    const d = data?.detail;
    let msg = res.statusText;
    if (typeof d === "string") msg = d;
    else if (Array.isArray(d)) msg = d.map((x) => x.msg || JSON.stringify(x)).join("；");
    else if (d != null) msg = typeof d === "object" ? JSON.stringify(d) : String(d);
    else if (text) msg = text;
    throw new Error(msg);
  }
  return data;
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) || "";
}

function setToken(token) {
  if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
  else localStorage.removeItem(AUTH_TOKEN_KEY);
}

function installId() {
  let id = localStorage.getItem("cg_install_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("cg_install_id", id);
  }
  return id;
}

function setFormMsg(form, text, ok = true) {
  const msg = form.querySelector(".form-msg");
  if (!msg) return;
  msg.hidden = false;
  msg.style.color = ok ? "" : "#ff7b7b";
  msg.textContent = text;
}

function renderWallet(wallet) {
  const panel = document.getElementById("walletPanel");
  const status = document.getElementById("walletStatus");
  const grid = document.getElementById("walletGrid");
  const hist = document.getElementById("withdrawHistory");
  const form = document.getElementById("withdrawForm");
  const btn = document.getElementById("withdrawBtn");
  if (!panel) return;
  if (!wallet) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;
  const cur = wallet.currency || "TWD";
  const trial = wallet.trial || {};
  const host = wallet.host || {};
  const renter = wallet.renter || {};
  const hw = host.withdraw || {};
  const rw = renter.withdraw || {};

  if (status) {
    const trialLine = trial.active
      ? `試用中至 ${(trial.ends_at || "").slice(0, 10)} · 免免收 ${trial.free_deals_used}/${trial.max_free_deals} 筆、${trial.free_amount_used}/${trial.max_free_amount} ${cur}`
      : "目前不在試用期（或尚未掛機／發需求）";
    status.innerHTML =
      `<b>${escapeHtml(wallet.status_label || "")}</b> — ${escapeHtml(wallet.status_hint || "")}<br/>` +
      `${trialLine} · 提領門檻 ${wallet.min_withdraw_twd} ${cur}`;
  }

  const hostMachines = (host.machines || [])
    .map((m) => `<li>${escapeHtml(m.name)} · 釋出 ${m.release_percent}% · 餘額 ${m.balance} ${cur}</li>`)
    .join("") || "<li>尚未掛機</li>";
  const hostReasons = (hw.reasons || []).map((r) => `<li>${escapeHtml(r)}</li>`).join("");
  const renterReasons = (rw.reasons || []).map((r) => `<li>${escapeHtml(r)}</li>`).join("");

  if (grid) {
    grid.innerHTML =
      `<div class="wallet-card">` +
      `<div>供給方餘額（${host.count || 0} 台）</div>` +
      `<strong>${host.balance_total ?? 0} ${cur}</strong>` +
      `<span class="tag ${hw.can_request ? "ok" : "block"}">${hw.can_request ? "可申請提領" : "暫不可提領"}</span>` +
      `<ul>${hostMachines}${hostReasons}</ul></div>` +
      `<div class="wallet-card">` +
      `<div>需求方餘額</div>` +
      `<strong>${renter.balance ?? 0} ${cur}</strong>` +
      `<span class="tag ${rw.can_request ? "ok" : "block"}">${rw.can_request ? "可申請提領" : "暫不可提領"}</span>` +
      `<ul>${renter.registered ? `<li>${escapeHtml(renter.need || "已登記需求")}</li>` : "<li>尚未發需求</li>"}${renterReasons}</ul></div>`;
  }

  if (hist) {
    const rows = wallet.withdrawals || [];
    hist.innerHTML = rows.length
      ? "<b>提領紀錄</b><br/>" + rows.slice().reverse().map((w) =>
          `${escapeHtml((w.at || "").slice(0, 19))} · ${w.role} · ${w.amount} ${cur} · ` +
          `${w.success ? "成功" : "未通過"} — ${escapeHtml(w.message || "")}`
        ).join("<br/>")
      : "尚無提領申請紀錄。";
  }

  if (form && btn) {
    const syncBtn = () => {
      const role = form.querySelector('[name="role"]').value;
      const gate = role === "renter" ? rw : hw;
      btn.disabled = !gate.can_request;
      btn.textContent = gate.can_request ? "送出申請" : "目前不可提領";
      const amt = form.querySelector('[name="amount"]');
      if (amt && !amt.value) amt.placeholder = String(Math.max(wallet.min_withdraw_twd || 500, 1));
    };
    form.querySelector('[name="role"]').onchange = syncBtn;
    syncBtn();
  }
}

async function refreshAuth() {
  const status = document.getElementById("authStatus");
  const nav = document.getElementById("navAuth");
  const table = document.getElementById("machineTable");
  const token = getToken();
  if (!token) {
    if (status) status.textContent = "尚未登入 — 請先註冊／驗證／登入";
    if (nav) nav.textContent = "未登入";
    if (table) table.textContent = "";
    renderWallet(null);
    return null;
  }
  try {
    const res = await api(`/api/market/auth/me?token=${encodeURIComponent(token)}`);
    const u = res.user;
    if (status) status.textContent = `已登入：${u.email}（${u.display_name}）· 已綁 ${u.machine_count} 台`;
    if (nav) nav.textContent = u.email;
    if (table) {
      if (!(u.machines || []).length) {
        table.textContent = "尚未綁定主機指紋（掛機時填主機名並勾選同意即可綁定）。";
      } else {
        table.innerHTML = (u.machines || []).map((m) =>
          `<div>${escapeHtml(m.label)} · ${escapeHtml(m.fingerprint_short)}…
           <button type="button" class="unbind-btn" data-id="${escapeHtml(m.id)}">解綁</button></div>`
        ).join("");
        table.querySelectorAll(".unbind-btn").forEach((btn) => {
          btn.onclick = async () => {
            if (!confirm(`解綁後換帳需冷卻 ${window.__cgUnbindHours || 24} 小時。確定？`)) return;
            try {
              const r = await api("/api/market/auth/unbind-machine", {
                method: "POST",
                body: JSON.stringify({ token: getToken(), machine_id: btn.dataset.id }),
              });
              alert(r.message || "已解綁");
              await refreshAuth();
            } catch (e) {
              alert(e.message);
            }
          };
        });
      }
    }
    renderWallet(res.wallet || null);
    return u;
  } catch (_) {
    setToken("");
    if (status) status.textContent = "Session 失效，請重新登入";
    if (nav) nav.textContent = "未登入";
    renderWallet(null);
    return null;
  }
}

async function refreshStats() {
  try {
    const s = await api("/api/market/stats");
    window.__cgUnbindHours = s.auth?.unbind_cooldown_hours || 24;
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
      rule.textContent = "收款管道已開啟：達門檻且非試用期可申請提領。";
      if (banner) banner.hidden = true;
    } else {
      badge.textContent = "只記帳不提領";
      rule.textContent = "目前收款管道尚未完全打通：僅記帳，暫不可提領。";
      if (banner) {
        banner.hidden = false;
        banner.innerHTML = "目前收款管道尚未完全打通：所有手續費與餘額<strong>僅記帳，暫不可提領</strong>。打通後會開放。";
      }
    }

    const refLine = document.getElementById("refLine");
    if (s.market_ref_twd_per_hour) {
      refLine.hidden = false;
      const pct = (((s.spot_twd_per_hour - s.market_ref_twd_per_hour) / s.market_ref_twd_per_hour) * 100).toFixed(1);
      refLine.textContent = `市場參考價 ${s.market_ref_twd_per_hour} TWD/時 · 現貨差 ${pct}%`;
    } else {
      refLine.hidden = true;
    }

    const list = document.getElementById("hostList");
    const rows = s.host_list || [];
    list.innerHTML = rows.length
      ? rows.map((h) =>
          `<div><b>${escapeHtml(h.name)}</b> · ${escapeHtml(h.specs)} · 釋出 <b>${h.release_percent}%</b> · 有效 VRAM ${h.effective_vram_gb}GB · ${h.spot_twd_per_hour} TWD/時</div>`
        ).join("")
      : "尚無供給。";
  } catch (_) {
    document.getElementById("hostCount").textContent = "離線";
    document.getElementById("rentCount").textContent = "—";
    document.getElementById("idx").textContent = "—";
    document.getElementById("spot").textContent = "離線";
  }
}

document.getElementById("authRegisterForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  try {
    const r = await api("/api/market/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: fd.get("email"),
        password: fd.get("password"),
        display_name: fd.get("display_name") || "",
      }),
    });
    const code = r.verification_code || "";
    setFormMsg(form, (r.message || "已註冊") + (code ? ` 驗證碼：${code}` : ""), true);
    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        setFormMsg(form, `已註冊；驗證碼 ${code}（已複製到剪貼簿）`, true);
      } catch (_) {}
    }
    form.reset();
  } catch (err) {
    setFormMsg(form, err.message, false);
  }
});

document.getElementById("authVerifyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  try {
    const r = await api("/api/market/auth/verify", {
      method: "POST",
      body: JSON.stringify({ email: fd.get("email"), code: fd.get("code") }),
    });
    setFormMsg(form, r.message || "驗證成功，可以登入", true);
    form.reset();
  } catch (err) {
    setFormMsg(form, err.message, false);
  }
});

document.getElementById("authLoginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  try {
    const r = await api("/api/market/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: fd.get("email"), password: fd.get("password") }),
    });
    setToken(r.token);
    setFormMsg(form, "登入成功", true);
    form.reset();
    await refreshAuth();
  } catch (err) {
    setFormMsg(form, err.message, false);
  }
});

document.getElementById("btnLogout").onclick = async () => {
  const token = getToken();
  if (token) {
    try {
      await api("/api/market/auth/logout", { method: "POST", body: JSON.stringify({ token }) });
    } catch (_) {}
  }
  setToken("");
  await refreshAuth();
};

document.getElementById("quoteForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const picker = form.querySelector("[data-gpu-picker]");
  if (picker && !gpuPickerReady(picker)) {
    document.getElementById("quoteOut").textContent = "請先選完品牌／系列／型號／後綴（含 SUPER）";
    return;
  }
  const fd = new FormData(form);
  const specs = String(fd.get("specs") || "").trim();
  if (!specs) {
    document.getElementById("quoteOut").textContent = "請先選完品牌／系列／型號／後綴";
    return;
  }
  try {
    const q = await api("/api/market/quote", {
      method: "POST",
      body: JSON.stringify({
        specs,
        gpu_model: specs,
        vram_gb: Number(fd.get("vram_gb") || 12),
        hours: Number(fd.get("hours") || 1),
        release_percent: Number(fd.get("release_percent") || 100),
      }),
    });
    const warn = q.gpu_known
      ? ""
      : `<div style="color:#c45c26;margin-top:0.35rem">⚠ 未辨識此 GPU，暫以權重 1.0 估算，請確認型號／後綴。</div>`;
    document.getElementById("quoteOut").innerHTML =
      `GPU <b>${escapeHtml(q.gpu_display || q.gpu_model)}</b>` +
      ` · 釋出 <b>${q.release_percent}%</b> · VRAM ${q.vram_gb}GB（有效 ${q.effective_vram_gb}GB）<br/>` +
      `指數 <b>${q.index_points}</b> · 現貨 <b>${q.spot_twd_per_hour}</b> TWD/時<br/>` +
      `成交估 <b>${q.gross_twd}</b> TWD · 非試用手續費約 ${q.fee_if_no_trial} TWD` +
      `<div class="hint" style="margin-top:0.35rem">PERF ${q.perf_tier} · 供需×${q.demand_mult} · 動能×${q.momentum}` +
      ` · 試用期內可能免收（${q.trial_days} 天／最多 ${q.trial_max_free_deals} 筆或 ${q.trial_max_free_amount} TWD）</div>` +
      warn;
  } catch (err) {
    document.getElementById("quoteOut").textContent = err.message;
  }
});

document.getElementById("join-host").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const token = getToken();
  if (!token) {
    setFormMsg(form, "請先登入", false);
    return;
  }
  let me;
  try {
    me = await api(`/api/market/auth/me?token=${encodeURIComponent(token)}`);
  } catch (_) {
    setFormMsg(form, "Session 失效，請重新登入", false);
    return;
  }
  const fd = new FormData(form);
  const picker = form.querySelector("[data-gpu-picker]");
  if (picker && !gpuPickerReady(picker)) {
    setFormMsg(form, "請先選完顯卡品牌／系列／型號／後綴（含 SUPER）", false);
    return;
  }
  let specs = String(fd.get("specs") || "").trim();
  if (!specs) {
    setFormMsg(form, "請先選完顯卡品牌／系列／型號／後綴", false);
    return;
  }
  const note = String(fd.get("note") || "").trim();
  if (note) specs = `${specs}，${note}`;
  const hostname = (fd.get("hostname") || "").trim();
  const consent = !!fd.get("consent_fingerprint");
  if (hostname && !consent) {
    setFormMsg(form, "已填主機名稱時請勾選同意指紋，或清空主機名稱後再送出", false);
    return;
  }
  const body = {
    token,
    name: fd.get("name"),
    email: me.user.email,
    specs,
    vram_gb: Number(fd.get("vram_gb") || 12),
    release_percent: Number(fd.get("release_percent")),
    hostname,
    mac_hash: fd.get("mac_hash") || "",
    disk_serial: fd.get("disk_serial") || "",
    consent_fingerprint: consent,
    platform: navigator.platform || "",
    user_agent: navigator.userAgent || "",
  };
  if (fd.get("rate")) body.rate = Number(fd.get("rate"));
  if (hostname) body.install_id = installId();
  try {
    const lead = await api("/api/market/host", { method: "POST", body: JSON.stringify(body) });
    setFormMsg(form, `已掛機：釋出 ${lead.release_percent}% · ${lead.specs}`, true);
    form.reset();
    form.querySelector('[name="release_percent"]').value = "100";
    form.querySelector('[name="vram_gb"]').value = "12";
    // 重設連動選單
    if (picker) {
      picker.querySelector('[name="gpu_brand"]').value = "";
      picker.querySelector('[name="gpu_brand"]').dispatchEvent(new Event("change"));
    }
    await refreshAuth();
    await refreshStats();
  } catch (err) {
    setFormMsg(form, err.message, false);
  }
});

document.getElementById("join-rent").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const token = getToken();
  if (!token) {
    setFormMsg(form, "請先登入", false);
    return;
  }
  let me;
  try {
    me = await api(`/api/market/auth/me?token=${encodeURIComponent(token)}`);
  } catch (_) {
    setFormMsg(form, "Session 失效，請重新登入", false);
    return;
  }
  const fd = new FormData(form);
  try {
    await api("/api/market/renter", {
      method: "POST",
      body: JSON.stringify({
        token,
        name: fd.get("name"),
        email: me.user.email,
        need: fd.get("need"),
        budget: fd.get("budget") ? Number(fd.get("budget")) : null,
      }),
    });
    setFormMsg(form, "需求已送出", true);
    form.reset();
    await refreshStats();
  } catch (err) {
    setFormMsg(form, err.message, false);
  }
});

document.getElementById("releaseForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const msg = document.getElementById("releaseMsg");
  const token = getToken();
  if (!token) {
    msg.hidden = false;
    msg.style.color = "#ff7b7b";
    msg.textContent = "請先登入";
    return;
  }
  try {
    const me = await api(`/api/market/auth/me?token=${encodeURIComponent(token)}`);
    const fd = new FormData(e.target);
    const lead = await api("/api/market/host/release", {
      method: "POST",
      body: JSON.stringify({
        token,
        email: me.user.email,
        release_percent: Number(fd.get("release_percent")),
      }),
    });
    msg.hidden = false;
    msg.style.color = "";
    msg.textContent = `已更新：目前釋出 ${lead.release_percent}%（只影響新單）`;
    await refreshAuth();
    await refreshStats();
  } catch (err) {
    msg.hidden = false;
    msg.style.color = "#ff7b7b";
    msg.textContent = err.message;
  }
});

document.getElementById("withdrawForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById("withdrawMsg");
  const token = getToken();
  if (!token) {
    msg.hidden = false;
    msg.style.color = "#ff7b7b";
    msg.textContent = "請先登入";
    return;
  }
  const fd = new FormData(form);
  try {
    const rec = await api("/api/market/withdraw", {
      method: "POST",
      body: JSON.stringify({
        token,
        role: fd.get("role") || "host",
        amount: Number(fd.get("amount")),
      }),
    });
    msg.hidden = false;
    msg.style.color = "";
    msg.textContent = rec.message || "提領申請已送出";
    form.reset();
    await refreshAuth();
  } catch (err) {
    msg.hidden = false;
    msg.style.color = "#ff7b7b";
    msg.textContent = err.message;
    await refreshAuth();
  }
});

document.getElementById("disputeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const token = getToken();
  let email = "";
  if (token) {
    try {
      const me = await api(`/api/market/auth/me?token=${encodeURIComponent(token)}`);
      email = me.user.email;
    } catch (_) {}
  }
  const fd = new FormData(form);
  if (!email) {
    setFormMsg(form, "請先登入再回報爭議", false);
    return;
  }
  try {
    await api("/api/market/dispute", {
      method: "POST",
      body: JSON.stringify({
        reporter_email: email,
        role: fd.get("role"),
        deal_id: fd.get("deal_id") || "",
        reason: fd.get("reason"),
      }),
    });
    setFormMsg(form, "工單已送出，等待平台人工審核", true);
    form.reset();
    await refreshStats();
  } catch (err) {
    setFormMsg(form, err.message, false);
  }
});

refreshAuth();
refreshStats();
setInterval(refreshStats, 10000);
