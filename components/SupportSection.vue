<script setup>
import { CalendarCheck, MessageSquareText, Wrench } from 'lucide-vue-next';

defineProps({
  image: {
    type: String,
    required: true,
  },
});

const services = [
  {
    icon: MessageSquareText,
    title: '選購諮詢',
    text: '依照場地、預算與使用頻率，整理適合的入門或升級組合。',
  },
  {
    icon: Wrench,
    title: '維修檢測',
    text: '協助檢查耗材、氣密與操作手感，提供後續維護建議。',
  },
  {
    icon: CalendarCheck,
    title: '門市預約',
    text: '可預約試握、課程、團體採購與裝備保養時段。',
  },
];
</script>

<template>
  <section class="bg-field-800/70 py-16">
    <div class="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <img :src="image" alt="Cat Tactical 客服與維修支援" class="h-full min-h-96 w-full rounded object-cover reveal" />
      <div class="reveal">
        <div class="eyebrow">SUPPORT</div>
        <h2 class="mt-3 font-display text-4xl font-bold text-white">從購買到保養都有人接住</h2>
        <p class="mt-5 leading-8 text-stone-300">
          Airsoft 裝備不是只看規格就能買對。網站現在把商品、課程、門市與維修串起來，讓玩家能用更少時間做出更穩的選擇。
        </p>
        <div class="mt-8 grid gap-4">
          <article v-for="service in services" :key="service.title" class="rounded border border-white/10 bg-white/[0.04] p-4">
            <component :is="service.icon" class="h-6 w-6 text-ember-300" />
            <h3 class="mt-3 font-semibold text-white">{{ service.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-stone-400">{{ service.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
