import heroShowroom from '../assets/ai/hero-showroom.png';
import productCarbine from '../assets/ai/product-carbine.png';
import productPistol from '../assets/ai/product-pistol.png';
import storeInterior from '../assets/ai/store-interior.png';
import aboutWorkbench from '../assets/ai/about-workbench.png';
import buyerGallerySheet from '../assets/ai/buyer-gallery-sheet.png';
import featureTriptych from '../assets/ai/feature-triptych.png';
import homepageHero from '../assets/ai/homepage-hero.png';
import logoSource from '../assets/ai/logo-source.png';
import productHero from '../assets/ai/product-hero.png';
import productSheet from '../assets/ai/product-sheet.png';
import storeSource from '../assets/ai/store-source.png';
import supportBanner from '../assets/ai/support-banner.png';

export const assets = {
  heroShowroom,
  productCarbine,
  productPistol,
  storeInterior,
  aboutWorkbench,
  buyerGallerySheet,
  featureTriptych,
  homepageHero,
  logoSource,
  productHero,
  productSheet,
  storeSource,
  supportBanner,
};

export const navItems = [
  { label: '首頁', href: '/' },
  { label: '商品', href: '/#products' },
  { label: '關於我們', href: '/about' },
  { label: '訓練', href: '/#training' },
  { label: '門市', href: '/#stores' },
  { label: 'FAQ', href: '/#faq' },
];

export const categories = ['全系列', '步槍平台', '手槍平台', '訓練裝備', '維修升級'];

export const products = [
  {
    name: 'CT Recon Carbine',
    slug: 'ct-recon-carbine',
    category: '步槍平台',
    price: 14820,
    image: productCarbine,
    gallery: [productCarbine, productHero, productSheet],
    tag: 'HOT',
    rating: 4.9,
    stock: 8,
    summary: '為 CQB 與週末戶外場設計的輕量化步槍平台，重視操控、穩定與升級彈性。',
    description:
      'CT Recon Carbine 適合希望一步到位的玩家。配置重點放在穩定回饋、好維護的外部結構，以及可依使用場景調整的配件軌道。門市可協助完成基礎檢查與安全說明。',
    specs: ['輕量化護木', '穩定回饋', 'CQB 適用'],
    details: ['建議搭配 0.25g BB 彈', '適合 CQB 與中短距離場地', '可加購光學瞄具與握把配置'],
  },
  {
    name: 'Strike Pistol Pro',
    slug: 'strike-pistol-pro',
    category: '手槍平台',
    price: 8700,
    image: productPistol,
    gallery: [productPistol, logoSource, buyerGallerySheet],
    tag: 'NEW',
    rating: 4.8,
    stock: 12,
    summary: '競技取向手槍平台，適合需要快速瞄準、順手握持與輕量攜行的玩家。',
    description:
      'Strike Pistol Pro 以俐落外觀與穩定手感為核心。適合練習副武器操作、室內場節奏訓練，也能作為收藏展示與客製外觀的基礎款。',
    specs: ['競技滑套', '快速瞄準', '可調握把'],
    details: ['高可視準星配置', '握把紋理提升濕手穩定性', '入門到進階玩家皆適合'],
  },
  {
    name: 'N4 Training Elite',
    slug: 'n4-training-elite',
    category: '步槍平台',
    price: 33000,
    image: productHero,
    gallery: [productHero, productSheet, productCarbine],
    tag: 'PRO',
    rating: 4.9,
    stock: 3,
    summary: '高階訓練款，提供更完整的金屬質感、配重與進階升級空間。',
    description:
      'N4 Training Elite 面向追求細節與耐用度的玩家。門市會在交付前完成檢測，並依照你的場地習慣建議配件與保養週期。',
    specs: ['高階訓練款', '金屬槍身', '精準校正'],
    details: ['建議預約門市試握', '支援客製化外觀配置', '適合長期玩家與收藏者'],
  },
  {
    name: 'TP22 Compact Kit',
    slug: 'tp22-compact-kit',
    category: '手槍平台',
    price: 3600,
    image: productPistol,
    gallery: [productPistol, buyerGallerySheet, logoSource],
    tag: 'VALUE',
    rating: 4.7,
    stock: 18,
    summary: '輕巧、好上手的入門套組，適合第一次購買或需要備用副武器的玩家。',
    description:
      'TP22 Compact Kit 保留必要性能與實用配件，讓入門玩家不用面對過度複雜的選擇。門市可協助完成基礎安全教學。',
    specs: ['入門推薦', '易保養', '輕巧攜行'],
    details: ['低維護成本', '適合新手安全課程', '可搭配基礎護具套組'],
  },
  {
    name: 'Field Safety Loadout',
    slug: 'field-safety-loadout',
    category: '訓練裝備',
    price: 5200,
    image: featureTriptych,
    gallery: [featureTriptych, buyerGallerySheet, supportBanner],
    tag: 'KIT',
    rating: 4.8,
    stock: 10,
    summary: '整合護目鏡、手套、收納與基礎維護用品的訓練套組。',
    description:
      'Field Safety Loadout 讓玩家快速補齊安全與保養基礎。適合搭配新手課程、團體活動或門市試玩預約。',
    specs: ['安全護具', '收納模組', '保養用品'],
    details: ['護目鏡符合場地基本要求', '附基礎保養工具', '適合團體採購'],
  },
  {
    name: 'Precision Care Service',
    slug: 'precision-care-service',
    category: '維修升級',
    price: 1800,
    image: aboutWorkbench,
    gallery: [aboutWorkbench, supportBanner, storeSource],
    tag: 'SERVICE',
    rating: 4.9,
    stock: 99,
    summary: '針對氣密、耗材、外觀與穩定度的基礎檢測與保養服務。',
    description:
      'Precision Care Service 是門市維修的入門方案。技師會檢查常見耗材、氣密狀態與操作手感，並提供升級或維護建議。',
    specs: ['基礎檢測', '耗材建議', '氣密調整'],
    details: ['建議提前預約', '檢測後提供報價', '適合長時間未使用的裝備'],
  },
];

export const stats = [
  { value: '8+', label: '合作品牌與工坊' },
  { value: '3200+', label: '玩家裝備配置' },
  { value: '48h', label: '現貨快速出貨' },
];

export const features = [
  {
    title: '安全導向',
    text: '從護具、場地規則到裝備調校，先把安全與穩定放在第一位。',
  },
  {
    title: '升級維修',
    text: '提供基礎檢測、耗材更換與性能校正，讓裝備維持可靠狀態。',
  },
  {
    title: '風格配置',
    text: '依照 CQB、戶外場與收藏展示需求，搭配外觀與配件方案。',
  },
];

export const trainingCourses = [
  {
    title: '新手安全入門',
    level: 'Beginner',
    duration: '90 分鐘',
    text: '認識基本規則、護具穿戴、裝備操作與場地禮儀，適合第一次接觸 Airsoft 的玩家。',
  },
  {
    title: 'CQB 移動與溝通',
    level: 'Intermediate',
    duration: '2 小時',
    text: '練習近距離移動、角落判斷、隊形溝通與安全索敵，重點放在遊戲策略與團隊節奏。',
  },
  {
    title: '裝備維護工作坊',
    level: 'Workshop',
    duration: '60 分鐘',
    text: '帶你理解日常保養、耗材檢查、氣密與外觀維護，降低故障率並延長裝備壽命。',
  },
];

export const faqs = [
  {
    question: '第一次接觸 Airsoft，需要準備什麼？',
    answer:
      '建議先從護目鏡、手套與基礎安全觀念開始。我們可以依照場地、預算與使用情境，協助你挑選適合的入門裝備。',
  },
  {
    question: '商品可以現場試握或諮詢嗎？',
    answer:
      '可以。門市提供展示與基礎操作說明，若需要更深入的客製、維修或升級建議，也可以先預約專人時段。',
  },
  {
    question: '有提供維修與升級服務嗎？',
    answer:
      '有。我們提供檢測、耗材更換、氣密調整、外觀升級與性能校正。實際工期會依零件與狀況評估。',
  },
  {
    question: '網路下單後多久出貨？',
    answer:
      '現貨商品通常於 1 至 2 個工作天內出貨。大型裝備、客製品或需調校商品會由門市另行通知時程。',
  },
];

export const stores = [
  {
    name: '中壢旗艦店',
    phone: '0912-345-678',
    hours: '11:00 - 22:00',
    address: '桃園市中壢區中美路二段 195 號 8-2',
    image: storeInterior,
  },
  {
    name: '台北訓練展示店',
    phone: '0988-765-432',
    hours: '12:00 - 21:00',
    address: '台北市大同區承德路三段 88 號',
    image: storeSource,
  },
];

export const aboutTimeline = [
  { year: '2019', title: '玩家社群起點', text: '從玩家交流與裝備分享開始，整理出更適合新手理解的選購方式。' },
  { year: '2021', title: '門市維修服務', text: '建立檢測與保養流程，讓裝備不只是買回家，也能長期維持穩定。' },
  { year: '2026', title: '數位體驗重構', text: '以 Nuxt SPA 重整商品、課程、門市與會員預約流程。' },
];
