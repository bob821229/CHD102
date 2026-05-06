import heroShowroom from '../assets/ai/hero-showroom.png';
import productCarbine from '../assets/ai/product-carbine.png';
import productPistol from '../assets/ai/product-pistol.png';
import storeInterior from '../assets/ai/store-interior.png';

export const assets = {
  heroShowroom,
  productCarbine,
  productPistol,
  storeInterior,
};

export const navItems = [
  { label: '首頁', href: '#home' },
  { label: '商品', href: '#products' },
  { label: '訓練', href: '#training' },
  { label: '門市', href: '#stores' },
  { label: 'FAQ', href: '#faq' },
  { label: '預約', href: '#member' },
];

export const categories = ['全系列', '步槍平台', '手槍平台', '訓練裝備', '維修升級'];

export const products = [
  {
    name: 'CT Recon Carbine',
    slug: 'ct-recon-carbine',
    category: '步槍平台',
    price: 14820,
    image: productCarbine,
    tag: 'HOT',
    rating: 4.9,
    specs: ['輕量化護木', '穩定回饋', 'CQB 適用'],
  },
  {
    name: 'Strike Pistol Pro',
    slug: 'strike-pistol-pro',
    category: '手槍平台',
    price: 8700,
    image: productPistol,
    tag: 'NEW',
    rating: 4.8,
    specs: ['競技滑套', '快速瞄準', '可調握把'],
  },
  {
    name: 'Noveske N4 Training',
    slug: 'noveske-n4-training',
    category: '步槍平台',
    price: 33000,
    image: productCarbine,
    tag: 'PRO',
    rating: 4.9,
    specs: ['高階訓練款', '金屬槍身', '精準校正'],
  },
  {
    name: 'TP22 Compact Kit',
    slug: 'tp22-compact-kit',
    category: '手槍平台',
    price: 3600,
    image: productPistol,
    tag: 'VALUE',
    rating: 4.7,
    specs: ['入門推薦', '易保養', '輕巧攜行'],
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
    image: storeInterior,
  },
];
