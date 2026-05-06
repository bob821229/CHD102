<script setup>
import {
  assets,
  categories,
  faqs,
  features,
  navItems,
  products,
  stats,
  stores,
  trainingCourses,
} from '../data/catalog';
import { ShieldCheck, Sparkles, Wrench } from 'lucide-vue-next';

const featureIcons = [ShieldCheck, Wrench, Sparkles];
</script>

<template>
  <div class="min-h-screen bg-field-900 text-stone-100">
    <AppHeader :nav-items="navItems" />
    <main>
      <HeroSection :image="assets.heroShowroom" :stats="stats" />

      <section id="about" class="bg-field-800/70 py-16">
        <div class="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div class="reveal">
            <div class="eyebrow">ABOUT US</div>
            <h2 class="mt-3 font-display text-4xl font-bold text-white">把裝備選擇變簡單</h2>
            <p class="mt-5 leading-8 text-stone-300">
              Cat Tactical Airsoft 以玩家實際情境為核心，整合商品選購、課程訓練、門市諮詢與維修保養。網站重構後不再只是靜態作品集，而是更接近真實營運的電商與服務入口。
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">
            <article v-for="(feature, index) in features" :key="feature.title" class="feature-card interactive-card reveal">
              <component :is="featureIcons[index]" class="h-8 w-8 text-ember-300" />
              <h3 class="mt-5 text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-stone-400">{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <ProductSection :categories="categories" :products="products" />
      <GallerySection :assets="assets" />
      <TrainingSection :courses="trainingCourses" />
      <SupportSection :image="assets.supportBanner" />
      <StoreSection :stores="stores" />
      <FaqAccordion :faqs="faqs" />
      <MemberSection />
    </main>
    <SiteFooter />
  </div>
</template>
