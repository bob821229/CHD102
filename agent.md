# Vue + Tailwind 遷移為 Nuxt.js + Tailwind + Vite 規劃書

## 目標

將目前的 Vue + Tailwind 單頁版本整理成 Nuxt.js 專案架構，保留現有視覺風格、商品資料、AI 圖片素材與 Tailwind 設計系統，同時使用 Nuxt 內建的 Vite 開發與建置流程。

這份規劃只針對「如何改成 Nuxt.js + Tailwind + Vite」做拆解，不直接描述新增動畫或新功能。後續如果要加 HUD 動畫、Scroll Reveal、動態 SVG，可以在 Nuxt 架構穩定後再做第二階段。

## 建議技術架構

| 項目 | 建議 |
| --- | --- |
| Framework | Nuxt 3 |
| UI | Vue 3 + Single File Components |
| CSS | Tailwind CSS |
| Build Tool | Vite，由 Nuxt 內建管理 |
| Icon | lucide-vue-next |
| 資料 | 先使用本地 `data/catalog.js` |
| 圖片素材 | 放在 `assets/`，由 Vite/Nuxt 打包 |
| 頁面模式 | 第一階段先做單頁式首頁，第二階段再拆 pages |

## 遷移原則

1. 先讓 Nuxt 專案可以正常 `dev`、`build`、`preview`。
2. 保留目前 Vue + Tailwind 的主要畫面，不一次重做設計。
3. 將 `src/App.vue` 的內容移到 Nuxt 的 `app.vue` 或 `pages/index.vue`。
4. 將 `src/styles.css` 改放到 `assets/css/main.css`。
5. 將 `src/data/catalog.js` 改放到 `data/catalog.js` 或 `composables/useCatalog.js`。
6. 移除原本 Vite 專案入口，例如 `src/main.js`、`vite.config.js`。
7. 不先處理舊版 HTML 頁面，避免遷移範圍過大。

## 建議目錄結構

```text
CHD102/
├─ app.vue
├─ nuxt.config.ts
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ assets/
│  ├─ css/
│  │  └─ main.css
│  └─ ai/
│     ├─ hero-showroom.png
│     ├─ product-carbine.png
│     ├─ product-pistol.png
│     └─ store-interior.png
├─ data/
│  └─ catalog.js
├─ components/
│  ├─ AppHeader.vue
│  ├─ HeroSection.vue
│  ├─ ProductCard.vue
│  ├─ StoreCard.vue
│  └─ FaqAccordion.vue
└─ pages/
   └─ index.vue
```

第一階段可以只使用 `app.vue`，等畫面穩定後再拆成 `pages/index.vue` 與 `components/`。如果之後要做多頁，例如商品列表、商品詳情、會員中心，才正式使用 Nuxt pages routing。

## package.json 規劃

建議 scripts：

```json
{
  "scripts": {
    "dev": "nuxt dev --host 127.0.0.1",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview --host 127.0.0.1"
  }
}
```

建議 dependencies：

```json
{
  "dependencies": {
    "nuxt": "^3.15.0",
    "@nuxtjs/tailwindcss": "^6.12.0",
    "vue": "^3.5.0",
    "lucide-vue-next": "^0.468.0"
  }
}
```

Nuxt 會內建使用 Vite，因此不需要另外保留 `vite.config.js`。如果要設定 Vite server 或 alias，可寫在 `nuxt.config.ts` 的 `vite` 欄位。

## nuxt.config.ts 規劃

建議設定：

```ts
export default defineNuxtConfig({
  compatibilityDate: '2026-05-06',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      title: 'Cat Tactical Airsoft',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cat Tactical Airsoft 提供 Airsoft 裝備、商品諮詢、門市體驗與訓練服務。',
        },
      ],
    },
  },
  vite: {
    server: {
      host: '127.0.0.1',
    },
  },
});
```

## Tailwind 設定規劃

`tailwind.config.js` 需要掃描 Nuxt 的檔案位置：

```js
export default {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'ui-sans-serif', 'system-ui'],
        display: ['Rajdhani', 'Inter', 'Noto Sans TC', 'ui-sans-serif'],
      },
      colors: {
        ember: {
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
        },
        field: {
          900: '#10120f',
          800: '#181b17',
          700: '#242820',
          600: '#343a30',
        },
      },
      boxShadow: {
        glow: '0 18px 70px rgba(249, 115, 22, 0.22)',
      },
    },
  },
  plugins: [],
};
```

## CSS 遷移規劃

原本的 `src/styles.css` 建議移到：

```text
assets/css/main.css
```

內容保留：

- Google Fonts import
- `@tailwind base`
- `@tailwind components`
- `@tailwind utilities`
- `.primary-button`
- `.secondary-button`
- `.icon-button`
- `.product-card`
- `.feature-card`
- `.store-card`
- `.faq-item`
- `.form-input`

注意事項：

- Nuxt 中全域 CSS 由 `nuxt.config.ts` 的 `css` 陣列載入。
- 不需要在 `app.vue` 手動 import CSS。
- Tailwind component class 可以先保留在 `@layer components`。

## Vue 入口遷移規劃

原本 Vite Vue 會有：

```text
index.html
src/main.js
src/App.vue
```

Nuxt 後改成：

```text
app.vue
```

第一階段可直接把 `src/App.vue` 的 template 和 script setup 搬到 `app.vue`。

第二階段再拆：

```text
pages/index.vue
components/AppHeader.vue
components/HeroSection.vue
components/ProductSection.vue
components/StoreSection.vue
components/FaqSection.vue
```

拆元件的好處：

- 後續新增動畫比較好維護。
- 商品卡、店鋪卡、FAQ 可以重用。
- Nuxt pages routing 比較容易擴充商品詳情頁。

## 資料與圖片遷移規劃

目前商品資料可維持本地 JS：

```text
data/catalog.js
```

圖片建議統一放在：

```text
assets/ai/
```

資料寫法：

```js
import heroShowroom from '../assets/ai/hero-showroom.png';

export const assets = {
  heroShowroom,
};
```

如果之後商品數量變多，可以改成：

- `server/api/products.get.js`
- `content/`
- CMS
- JSON 檔案

但第一階段不建議太早導入後端或 CMS。

## 舊版 HTML 檔案處理

專案目前還有多個傳統 HTML 頁面，例如：

- `about_us.html`
- `product_homepage.html`
- `product_list.html`
- `faq.html`
- `form_page.html`
- `store_information.html`

建議第一階段先不要刪除，因為它們可能保留舊版內容與素材參考。

處理方式：

1. Nuxt 版本先完成首頁。
2. 確認 Nuxt build 正常。
3. 再把舊 HTML 內容逐頁轉成 Nuxt pages。
4. 全部轉完後再整理或封存舊 HTML。

## 頁面拆分建議

第二階段可改成以下 Nuxt routes：

| 舊頁面 | Nuxt 路由 | 建議檔案 |
| --- | --- | --- |
| 首頁 | `/` | `pages/index.vue` |
| About us | `/about` | `pages/about.vue` |
| Product List | `/products` | `pages/products/index.vue` |
| Product Detail | `/products/[slug]` | `pages/products/[slug].vue` |
| FAQ | `/faq` | `pages/faq.vue` |
| Member Centre | `/member` | `pages/member.vue` |
| Store Information | `/stores` | `pages/stores.vue` |

## 遷移步驟

### Step 1：建立 Nuxt 基礎

- 安裝 `nuxt`、`@nuxtjs/tailwindcss`、`lucide-vue-next`。
- 建立 `nuxt.config.ts`。
- 修改 `package.json` scripts。
- 建立 `assets/css/main.css`。

### Step 2：搬移 Vue 畫面

- 將 `src/App.vue` 搬到 `app.vue`。
- 移除 `createApp` 入口需求。
- 調整圖片 import 路徑。
- 調整資料 import 路徑。

### Step 3：整理 Tailwind

- 更新 `tailwind.config.js` 的 `content`。
- 確認自訂色票、字體、shadow 可用。
- 確認 component class 有被 Nuxt 編譯。

### Step 4：整理資料

- 將 `src/data/catalog.js` 搬到 `data/catalog.js`。
- 修正中文亂碼。
- 確認商品分類、FAQ、店鋪資料能正常 render。

### Step 5：測試 Nuxt

執行：

```bash
npm run dev
npm run build
npm run preview
```

確認：

- 首頁可開啟。
- Tailwind 樣式正常。
- 圖片正常載入。
- 商品分類互動正常。
- FAQ 展開正常。
- 手機選單正常。

## 驗收標準

完成後應符合：

- `npm run dev` 可啟動 Nuxt dev server。
- `npm run build` 可成功建置。
- 首頁畫面與原 Vue 版本視覺一致或更穩定。
- Tailwind class 正常生效。
- `lucide-vue-next` icon 正常顯示。
- 圖片由 `assets/` 正常打包。
- 不再依賴 `src/main.js`。
- 不再需要 `vite.config.js`。

## 風險與注意事項

### 1. 中文亂碼

目前部分舊檔案疑似有編碼問題。遷移時應優先修正：

- 導覽列文字
- 商品分類
- 商品規格
- FAQ 內容
- 表單 placeholder
- meta description

### 2. 舊 HTML 與 Nuxt 並存

短期可以並存，但正式交付前應決定：

- 舊 HTML 僅作備份
- 或逐頁轉成 Nuxt pages

避免同時維護兩套網站。

### 3. 圖片路徑

Nuxt 中 `assets/` 與 `public/` 用法不同：

- 需要打包、壓縮、hash 的圖片放 `assets/`。
- 需要原路徑公開存取的檔案放 `public/`。

目前 AI 商品圖建議放 `assets/ai/`。

### 4. Vite 設定

Nuxt 已內建 Vite。除非有特殊需求，不建議保留獨立 `vite.config.js`。

如果需要 Vite 設定，寫在：

```ts
export default defineNuxtConfig({
  vite: {
    server: {
      host: '127.0.0.1',
    },
  },
});
```

## 建議給 Agent 的任務描述

可以把以下文字交給實作 Agent：

```text
請將目前 CHD102 專案的 Vue + Tailwind 版本遷移為 Nuxt 3 + Tailwind + Vite 架構。

需求：
1. 使用 Nuxt 3，保留 Tailwind CSS。
2. Nuxt 內建 Vite，不保留獨立 vite.config.js。
3. 將原本 src/App.vue 的首頁畫面移到 Nuxt app.vue 或 pages/index.vue。
4. 將 src/styles.css 移到 assets/css/main.css，並由 nuxt.config.ts 載入。
5. 將商品、FAQ、店鋪資料整理到 data/catalog.js。
6. 修正中文亂碼，讓畫面內容可正常閱讀。
7. 保留 lucide-vue-next icon。
8. 確認 npm run dev 與 npm run build 都能成功。
9. 暫時不要刪除舊 HTML 頁面，只整理 Nuxt 版本。

完成後請回報修改的檔案與測試結果。
```

## 後續擴充方向

Nuxt 架構穩定後，再做下一階段特色：

- 首頁 Hero 加入戰術 HUD SVG 動畫。
- 商品卡片加入 hover 掃描線。
- 使用 Intersection Observer 做 Scroll Reveal。
- 將商品列表拆成 `/products`。
- 建立 `/products/[slug]` 商品詳情頁。
- 新增 Training Course 頁面。
- 新增會員中心與裝備推薦測驗。
