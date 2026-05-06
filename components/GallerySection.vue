<script setup>
import { ArrowRight, PackageCheck, ShieldCheck, Wrench } from 'lucide-vue-next';

defineProps({
  assets: {
    type: Object,
    required: true,
  },
});

const bundles = [
  {
    icon: ShieldCheck,
    title: '新手安全入門組',
    subtitle: '第一次下場推薦',
    price: 'NT$ 8,800 起',
    imageKey: 'buyerGallerySheet',
    items: ['護目鏡與手套', '入門平台建議', '安全規則導覽'],
  },
  {
    icon: PackageCheck,
    title: 'CQB 週末玩家組',
    subtitle: '室內與中短距離場地',
    price: 'NT$ 18,600 起',
    imageKey: 'productSheet',
    items: ['步槍平台配置', '攜行收納模組', '基礎保養用品'],
  },
  {
    icon: Wrench,
    title: '維修保養方案',
    subtitle: '長期玩家定期檢測',
    price: 'NT$ 1,800 起',
    imageKey: 'aboutWorkbench',
    items: ['氣密檢查', '耗材更換建議', '手感校正'],
  },
];
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="section-heading reveal">
      <div>
        <div class="eyebrow">LOADOUT GUIDE</div>
        <h2>熱門配置方案</h2>
      </div>
      <p class="max-w-xl text-sm leading-7 text-stone-400">
        依照玩家經驗、場地類型與維護需求，整理出可直接諮詢的配置方向。想快速入門、升級 CQB 配置或保養既有裝備，都能從這裡開始。
      </p>
    </div>

    <div class="mt-8 grid gap-5 lg:grid-cols-3">
      <article v-for="bundle in bundles" :key="bundle.title" class="interactive-card reveal overflow-hidden rounded border border-white/10 bg-white/[0.045]">
        <div class="relative h-56 overflow-hidden">
          <img :src="assets[bundle.imageKey]" :alt="bundle.title" class="soft-pan h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-field-900 via-field-900/20 to-transparent" />
          <div class="scan-line" />
          <div class="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded border border-ember-300/40 bg-field-900/70 text-ember-300 backdrop-blur">
            <component :is="bundle.icon" class="h-6 w-6" />
          </div>
        </div>
        <div class="p-5">
          <p class="text-xs uppercase tracking-[0.24em] text-stone-500">{{ bundle.subtitle }}</p>
          <h3 class="mt-2 text-2xl font-bold text-white">{{ bundle.title }}</h3>
          <p class="mt-3 font-display text-2xl font-bold text-ember-300">{{ bundle.price }}</p>
          <ul class="mt-5 grid gap-2 text-sm text-stone-400">
            <li v-for="item in bundle.items" :key="item" class="flex items-center gap-2">
              <span class="pulse-dot" />
              {{ item }}
            </li>
          </ul>
          <NuxtLink to="/#member" class="secondary-button mt-6 w-full justify-center">
            預約配置諮詢
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
