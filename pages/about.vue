<script setup>
import { aboutTimeline, assets, features, navItems, stores } from '../data/catalog';
import { ShieldCheck, Sparkles, Wrench } from 'lucide-vue-next';

const featureIcons = [ShieldCheck, Wrench, Sparkles];

useHead({
  title: '關於我們 | Cat Tactical Airsoft',
});
</script>

<template>
  <div class="min-h-screen bg-field-900 text-stone-100">
    <AppHeader :nav-items="navItems" />
    <main class="pt-20">
      <section class="relative overflow-hidden">
        <img :src="assets.homepageHero" alt="Cat Tactical Airsoft 品牌形象" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 bg-field-900/80" />
        <div class="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div class="max-w-3xl">
            <div class="eyebrow">ABOUT CAT TACTICAL</div>
            <h1 class="mt-4 font-display text-5xl font-bold text-white lg:text-6xl">我們把玩家問題整理成清楚的答案</h1>
            <p class="mt-6 text-lg leading-8 text-stone-300">
              Cat Tactical Airsoft 從玩家社群出發，現在整合商品選購、門市諮詢、維修保養與訓練課程。重構後的網站也延續這個方向：資訊更清楚，流程更接近真實使用者需求。
            </p>
          </div>
        </div>
      </section>

      <section class="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <img :src="assets.aboutWorkbench" alt="維修與保養工作台" class="h-full min-h-96 w-full rounded object-cover" />
        <div>
          <div class="eyebrow">OUR METHOD</div>
          <h2 class="mt-3 font-display text-4xl font-bold text-white">先理解場景，再推薦裝備</h2>
          <p class="mt-5 leading-8 text-stone-300">
            我們不希望玩家被規格表淹沒。每一次推薦都會先確認場地、使用頻率、預算、安全需求與維護習慣，再把商品、護具與課程組成一套可執行的方案。
          </p>
          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <article v-for="(feature, index) in features" :key="feature.title" class="feature-card">
              <component :is="featureIcons[index]" class="h-8 w-8 text-ember-300" />
              <h3 class="mt-5 text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-stone-400">{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-field-800/70 py-16">
        <div class="mx-auto max-w-7xl px-5 lg:px-8">
          <div class="eyebrow">TIMELINE</div>
          <h2 class="mt-3 font-display text-4xl font-bold text-white">品牌發展</h2>
          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <article v-for="item in aboutTimeline" :key="item.year" class="rounded border border-white/10 bg-white/[0.04] p-5">
              <p class="font-display text-3xl font-bold text-ember-300">{{ item.year }}</p>
              <h3 class="mt-3 text-xl font-semibold text-white">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-stone-400">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <StoreSection :stores="stores" />
    </main>
    <SiteFooter />
  </div>
</template>
