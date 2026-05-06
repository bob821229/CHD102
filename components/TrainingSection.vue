<script setup>
import { Clock, ShieldCheck } from 'lucide-vue-next';

defineProps({
  courses: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="training" class="bg-field-800/70 py-16">
    <div class="mx-auto max-w-7xl px-5 lg:px-8">
      <div class="section-heading reveal">
        <div>
          <div class="eyebrow">TRAINING COURSE</div>
          <h2>訓練課程</h2>
        </div>
        <p class="max-w-xl text-sm leading-7 text-stone-400">
          從安全入門到團隊溝通，課程以遊戲規則、保護觀念與裝備熟悉度為核心，讓玩家玩得更穩。
        </p>
      </div>

      <div class="mt-8 grid gap-5 lg:grid-cols-3">
        <article v-for="course in courses" :key="course.title" class="feature-card reveal">
          <ShieldCheck class="h-8 w-8 text-ember-300" />
          <p class="mt-5 text-xs uppercase tracking-[0.22em] text-stone-500">{{ course.level }}</p>
          <h3 class="mt-2 text-xl font-semibold text-white">{{ course.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-stone-400">{{ course.text }}</p>
          <div class="mt-5 flex items-center gap-2 text-sm text-ember-200">
            <Clock class="h-4 w-4" />
            {{ course.duration }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
