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

export const categories = ['全部商品', '步槍系列', '手槍系列', '訓練裝備', '維修升級'];

export const products = [
  {
    name: 'CT Recon Carbine',
    category: '步槍系列',
    price: 14820,
    image: productCarbine,
    tag: 'HOT',
    specs: ['金屬槍身', '可調式槍托', 'CQB 適用'],
  },
  {
    name: 'Strike Pistol Pro',
    category: '手槍系列',
    price: 8700,
    image: productPistol,
    tag: 'NEW',
    specs: ['輕量滑套', '高握把設計', '快速瞄準'],
  },
  {
    name: 'Noveske N4 Training',
    category: '步槍系列',
    price: 33000,
    image: productCarbine,
    tag: 'PRO',
    specs: ['訓練級配置', '穩定回饋', '戶外場推薦'],
  },
  {
    name: 'TP22 Compact Kit',
    category: '手槍系列',
    price: 3600,
    image: productPistol,
    tag: 'VALUE',
    specs: ['入門友善', '短版攜行', '高 CP 值'],
  },
];

export const faqs = [
  {
    question: '第一次接觸 Airsoft，需要準備什麼？',
    answer:
      '建議先準備護目鏡、手套與基本防護，再依照場地規範選擇主武器。我們也可以依預算與使用場景協助搭配入門裝備。',
  },
  {
    question: '商品可以到店試握或諮詢嗎？',
    answer:
      '可以，建議先與門市確認庫存與服務時段。到店後可由人員說明操作方式、保養重點與適合的升級方向。',
  },
  {
    question: '是否提供維修與升級服務？',
    answer:
      '提供基礎保養、故障檢測與升級建議。實際維修時間會依零件狀況與排程而定，送修前可先提供型號與問題描述。',
  },
  {
    question: '線上訂購多久會出貨？',
    answer:
      '現貨商品通常會在 1 到 2 個工作天內安排出貨。若遇預購、客製或需調貨商品，客服會另行通知預估時間。',
  },
];

export const stores = [
  {
    name: '台北戰術門市',
    phone: '0912-345-678',
    hours: '11:00 - 22:00',
    address: '台北市中山區訓練路 195 號 8-2',
    image: storeInterior,
  },
  {
    name: '台中裝備體驗館',
    phone: '0988-765-432',
    hours: '12:00 - 21:00',
    address: '台中市西屯區戰術大道 88 號',
    image: storeInterior,
  },
];
