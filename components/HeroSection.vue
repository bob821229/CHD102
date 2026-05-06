<script setup>
import { ArrowRight, Radar } from 'lucide-vue-next';

defineProps({
  image: {
    type: String,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="home" class="relative min-h-[92vh] overflow-hidden pt-20">
    <img :src="image" alt="Cat Tactical Airsoft 展示空間" class="hero-image-ambient absolute inset-0 h-full w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-r from-field-900 via-field-900/72 to-field-900/15" />
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-field-900 to-transparent" />

    <div class="radar-widget pointer-events-none absolute right-6 top-32 hidden h-72 w-72 rounded-full border border-ember-300/20 lg:block">
      <div class="absolute inset-8 rounded-full border border-white/10" />
      <div class="absolute left-1/2 top-0 h-full w-px bg-ember-300/20" />
      <div class="absolute left-0 top-1/2 h-px w-full bg-ember-300/20" />
      <div class="radar-sweep" />
      <Radar class="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-ember-300/60" />
    </div>

    <div class="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
      <div class="max-w-2xl reveal">
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
          <a href="#training" class="secondary-button justify-center px-6 py-3">查看課程</a>
        </div>
      </div>
    </div>

    <div class="relative mx-auto grid max-w-7xl gap-4 px-5 pb-12 sm:grid-cols-3 lg:px-8">
      <div v-for="stat in stats" :key="stat.label" class="metric reveal">
        <p class="font-display text-4xl font-bold text-ember-300">{{ stat.value }}</p>
        <p class="mt-2 text-sm text-stone-400">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>
