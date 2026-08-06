# ComputeGate

## 模式
媒合平台抽成（預設 **1.5%**），不是強迫自租電。

## 規則
- 新用戶 **7 天試用免手續費**
- 餘額 ≥ **500 TWD** 才可申請提領；試用期不可提領
- 報價用「算力指數」：基本面 × 供需 × 動能（類股價）

## 公式
`SPOT = BASE × (VRAM/12) × PERF × DEMAND × MOMENTUM`  
`INDEX = 100 × SPOT / BASE`  
`GROSS = SPOT × hours`

## 本機
http://127.0.0.1:8787/market/

## GitHub
EarnBot 的 `compute_marketplace` 策略會自動推到 `computegate-site` repo，並嘗試開 Pages。
