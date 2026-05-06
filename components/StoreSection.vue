<script setup>
import { CalendarCheck, Clock, MapPin, ShieldCheck, Wrench } from 'lucide-vue-next';

defineProps({
  stores: {
    type: Array,
    required: true,
  },
});

const visitFlow = [
  {
    title: '線上預約',
    text: '先留下想看的商品、預算與用途，門市會先整理可試握與可比較的配置。',
  },
  {
    title: '到店選配',
    text: '依照場地、身形與使用頻率確認主槍、護具、耗材與攜行方式。',
  },
  {
    title: '檢測交付',
    text: '出貨前完成基礎檢查、氣密確認與保養建議，讓裝備狀態更穩定。',
  },
];
</script>

<template>
  <section id="stores" class="bg-field-800/55 py-16">
    <div class="mx-auto max-w-7xl px-5 lg:px-8">
      <div class="section-heading reveal">
        <div>
          <div class="eyebrow">STORE INFORMATION</div>
          <h2>門市與預約服務</h2>
        </div>
        <p class="max-w-2xl leading-7 text-stone-400">
          不是只有展示商品，我們把試握、選配、保養與課程諮詢都放進同一套到店流程，讓新手與進階玩家都能更快找到適合的配置。
        </p>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="grid gap-5">
          <StoreCard v-for="store in stores" :key="store.name" :store="store" />
        </div>

        <aside class="store-card reveal flex flex-col justify-between overflow-hidden p-0">
          <div class="p-6">
            <div class="flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded bg-ember-500/15 text-ember-300">
                <CalendarCheck class="h-6 w-6" />
              </span>
              <div>
                <p class="eyebrow">VISIT FLOW</p>
                <h3 class="mt-1 font-display text-2xl font-bold text-white">到店前先幫你整理好</h3>
              </div>
            </div>

            <div class="mt-7 grid gap-4">
              <article v-for="(step, index) in visitFlow" :key="step.title" class="flex gap-4 rounded border border-white/10 bg-white/[0.035] p-4">
                <span class="font-display text-2xl font-bold text-ember-300">0{{ index + 1 }}</span>
                <span>
                  <h4 class="font-semibold text-white">{{ step.title }}</h4>
                  <p class="mt-2 text-sm leading-6 text-stone-400">{{ step.text }}</p>
                </span>
              </article>
            </div>
          </div>

          <div class="grid border-t border-white/10 sm:grid-cols-3">
            <div class="border-white/10 p-5 sm:border-r">
              <Clock class="h-6 w-6 text-ember-300" />
              <p class="mt-3 text-sm font-semibold text-white">彈性時段</p>
              <p class="mt-1 text-xs leading-5 text-stone-500">平日與假日皆可預約諮詢</p>
            </div>
            <div class="border-white/10 p-5 sm:border-r">
              <Wrench class="h-6 w-6 text-ember-300" />
              <p class="mt-3 text-sm font-semibold text-white">維修評估</p>
              <p class="mt-1 text-xs leading-5 text-stone-500">基礎檢測與耗材建議</p>
            </div>
            <div class="p-5">
              <ShieldCheck class="h-6 w-6 text-ember-300" />
              <p class="mt-3 text-sm font-semibold text-white">安全配置</p>
              <p class="mt-1 text-xs leading-5 text-stone-500">護具與場地規則確認</p>
            </div>
          </div>
        </aside>
      </div>

      <div class="mt-6 flex flex-col gap-3 rounded border border-white/10 bg-field-900/70 p-5 text-sm text-stone-300 reveal sm:flex-row sm:items-center sm:justify-between">
        <p class="flex items-center gap-2">
          <MapPin class="h-4 w-4 shrink-0 text-ember-300" />
          建議出發前先完成預約，熱門商品與維修時段會由門市人員提前保留。
        </p>
        <NuxtLink to="/#member" class="primary-button justify-center">預約諮詢</NuxtLink>
      </div>
    </div>
  </section>
</template>
