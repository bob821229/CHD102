<script setup>
import { computed, ref } from 'vue';
import {
  ArrowRight,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Wrench,
  X,
} from 'lucide-vue-next';
import { assets, categories, faqs, products, stores } from './data/catalog';

const activeCategory = ref('全系列');
const openFaq = ref(0);
const mobileOpen = ref(false);

const filteredProducts = computed(() => {
  if (activeCategory.value === '全系列') return products;
  return products.filter((product) => product.category === activeCategory.value);
});

const navItems = [
  { label: '首頁', href: '#home' },
  { label: '商品', href: '#products' },
  { label: '門市', href: '#stores' },
  { label: 'FAQ', href: '#faq' },
  { label: '會員', href: '#member' },
];

const stats = [
  { value: '8+', label: '合作品牌與工坊' },
  { value: '3200+', label: '玩家裝備配置' },
  { value: '48h', label: '現貨快速出貨' },
];

const features = [
  {
    icon: ShieldCheck,
    title: '安全導向',
    text: '從護具、場地規則到裝備調校，先把安全與穩定放在第一位。',
  },
  {
    icon: Wrench,
    title: '升級維修',
    text: '提供基礎檢測、耗材更換與性能校正，讓裝備維持可靠狀態。',
  },
  {
    icon: Sparkles,
    title: '風格配置',
    text: '依照 CQB、戶外場與收藏展示需求，搭配外觀與配件方案。',
  },
];
</script>

<template>
  <div class="min-h-screen bg-field-900 text-stone-100">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-field-900/82 backdrop-blur-xl">
      <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" class="flex items-center gap-3">
          <span class="grid h-11 w-11 place-items-center rounded border border-ember-400/50 bg-ember-500/15 font-display text-xl font-bold text-ember-300 shadow-glow">
            CT
          </span>
          <span class="leading-tight">
            <span class="block font-display text-lg font-semibold tracking-wide">Cat Tactical</span>
            <span class="text-xs uppercase tracking-[0.28em] text-stone-400">Airsoft</span>
          </span>
        </a>

        <div class="hidden items-center gap-7 lg:flex">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="text-sm font-medium text-stone-300 transition hover:text-ember-300">
            {{ item.label }}
          </a>
        </div>

        <div class="hidden items-center gap-3 lg:flex">
          <button class="icon-button" aria-label="搜尋">
            <Search class="h-5 w-5" />
          </button>
          <button class="icon-button" aria-label="購物袋">
            <ShoppingBag class="h-5 w-5" />
          </button>
          <a href="#products" class="primary-button">
            立即選購
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>

        <button class="icon-button lg:hidden" aria-label="選單" @click="mobileOpen = true">
          <Menu class="h-5 w-5" />
        </button>
      </nav>
    </header>

    <div v-if="mobileOpen" class="fixed inset-0 z-[60] bg-field-900/95 px-5 py-6 backdrop-blur-xl lg:hidden">
      <div class="flex items-center justify-between">
        <span class="font-display text-lg font-semibold">Cat Tactical</span>
        <button class="icon-button" aria-label="關閉選單" @click="mobileOpen = false">
          <X class="h-5 w-5" />
        </button>
      </div>
      <div class="mt-10 grid gap-3">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="rounded border border-white/10 px-4 py-4 text-lg font-medium text-stone-100" @click="mobileOpen = false">
          {{ item.label }}
        </a>
      </div>
    </div>

    <main>
      <section id="home" class="relative min-h-[92vh] overflow-hidden pt-20">
        <img :src="assets.heroShowroom" alt="Cat Tactical Airsoft 展示空間" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-field-900 via-field-900/72 to-field-900/20" />
        <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-field-900 to-transparent" />

        <div class="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div class="max-w-2xl">
            <div class="eyebrow">TACTICAL SPORTS STORE</div>
            <h1 class="mt-5 font-display text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
              Cat Tactical Airsoft
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              從入門配置、進階升級到門市維修，把 Airsoft 裝備選購整理成更清楚、更好逛、更有質感的體驗。
            </p>
            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#products" class="primary-button justify-center px-6 py-3">
                探索商品
                <ArrowRight class="h-4 w-4" />
              </a>
              <a href="#stores" class="secondary-button justify-center px-6 py-3">查看門市</a>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:grid-cols-3 lg:px-8">
        <div v-for="stat in stats" :key="stat.label" class="metric">
          <p class="font-display text-4xl font-bold text-ember-300">{{ stat.value }}</p>
          <p class="mt-2 text-sm text-stone-400">{{ stat.label }}</p>
        </div>
      </section>

      <section id="products" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div class="section-heading">
          <div>
            <div class="eyebrow">PRODUCT LIST</div>
            <h2>精選商品</h2>
          </div>
          <button class="secondary-button">
            <SlidersHorizontal class="h-4 w-4" />
            篩選
          </button>
        </div>

        <div class="mt-8 flex gap-3 overflow-x-auto pb-2">
          <button v-for="category in categories" :key="category" class="chip" :class="{ 'chip-active': activeCategory === category }" @click="activeCategory = category">
            {{ category }}
          </button>
        </div>

        <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="product in filteredProducts" :key="product.name" class="product-card">
            <div class="relative aspect-[4/3] overflow-hidden rounded bg-stone-950">
              <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition duration-500 hover:scale-105" />
              <span class="absolute left-3 top-3 rounded bg-ember-500 px-2 py-1 text-xs font-bold text-field-900">
                {{ product.tag }}
              </span>
            </div>
            <div class="mt-4 flex items-start justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-[0.2em] text-stone-500">{{ product.category }}</p>
                <h3 class="mt-1 text-lg font-semibold text-white">{{ product.name }}</h3>
              </div>
              <button class="icon-button shrink-0" :aria-label="`收藏 ${product.name}`">
                <Heart class="h-4 w-4" />
              </button>
            </div>
            <ul class="mt-4 grid gap-2 text-sm text-stone-400">
              <li v-for="spec in product.specs" :key="spec" class="flex items-center gap-2">
                <Star class="h-3.5 w-3.5 text-ember-400" />
                {{ spec }}
              </li>
            </ul>
            <div class="mt-5 flex items-center justify-between">
              <p class="font-display text-2xl font-bold text-ember-300">NT$ {{ product.price.toLocaleString() }}</p>
              <button class="primary-button px-4 py-2" :aria-label="`加入購物袋 ${product.name}`">
                <ShoppingBag class="h-4 w-4" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section id="about" class="bg-field-800/70 py-16">
        <div class="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div class="eyebrow">ABOUT US</div>
            <h2 class="mt-3 font-display text-4xl font-bold text-white">把裝備選擇變簡單</h2>
            <p class="mt-5 leading-8 text-stone-300">
              這次重構把原本分散的靜態頁面，整理成更清楚的商品導覽、門市資訊與常見問題。使用者不用在重複頁面間迷路，也能快速找到適合自己的裝備方向。
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">
            <article v-for="feature in features" :key="feature.title" class="feature-card">
              <component :is="feature.icon" class="h-8 w-8 text-ember-300" />
              <h3 class="mt-5 text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-stone-400">{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="stores" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div class="section-heading">
          <div>
            <div class="eyebrow">STORE INFORMATION</div>
            <h2>門市資訊</h2>
          </div>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-2">
          <article v-for="store in stores" :key="store.name" class="store-card">
            <img :src="store.image" :alt="store.name" class="h-72 w-full rounded object-cover" />
            <div class="mt-5">
              <h3 class="font-display text-2xl font-bold text-white">{{ store.name }}</h3>
              <div class="mt-4 grid gap-3 text-sm text-stone-300">
                <p>電話：{{ store.phone }}</p>
                <p>營業時間：{{ store.hours }}</p>
                <p class="flex gap-2">
                  <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-ember-300" />
                  {{ store.address }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="faq" class="bg-field-800/70 py-16">
        <div class="mx-auto max-w-4xl px-5 lg:px-8">
          <div class="text-center">
            <div class="eyebrow">FAQ</div>
            <h2 class="mt-3 font-display text-4xl font-bold text-white">常見問題</h2>
          </div>

          <div class="mt-8 grid gap-3">
            <article v-for="(item, index) in faqs" :key="item.question" class="faq-item">
              <button class="flex w-full items-center justify-between gap-5 text-left" @click="openFaq = openFaq === index ? -1 : index">
                <span class="font-medium text-white">{{ item.question }}</span>
                <ChevronDown class="h-5 w-5 shrink-0 text-ember-300 transition" :class="{ 'rotate-180': openFaq === index }" />
              </button>
              <p v-if="openFaq === index" class="mt-4 leading-7 text-stone-400">
                {{ item.answer }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="member" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div class="overflow-hidden rounded border border-white/10 bg-stone-950/55">
          <div class="grid lg:grid-cols-[1fr_0.8fr]">
            <div class="p-6 sm:p-10">
              <div class="eyebrow">MEMBER CENTRE</div>
              <h2 class="mt-3 font-display text-4xl font-bold text-white">預約諮詢與裝備配置</h2>
              <p class="mt-4 max-w-2xl leading-8 text-stone-300">
                留下需求後，門市可依照預算、場地、使用頻率與偏好，協助規劃入門或升級方案。
              </p>
            </div>
            <form class="grid gap-3 bg-white/[0.03] p-6 sm:p-10">
              <input class="form-input" type="text" placeholder="姓名" />
              <input class="form-input" type="tel" placeholder="聯絡電話" />
              <select class="form-input">
                <option>入門配置諮詢</option>
                <option>維修升級</option>
                <option>門市試握預約</option>
              </select>
              <button class="primary-button mt-2 justify-center py-3" type="button">送出預約</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/10 px-5 py-8 text-center text-sm text-stone-500">
      Copyright © Cat Tactical Airsoft. Refactored with Nuxt + Vite + Tailwind.
    </footer>
  </div>
</template>
