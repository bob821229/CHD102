<script setup>
import { ChevronDown } from 'lucide-vue-next';

defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});

const openFaq = ref(0);
</script>

<template>
  <section id="faq" class="bg-field-800/70 py-16">
    <div class="mx-auto max-w-4xl px-5 lg:px-8">
      <div class="text-center reveal">
        <div class="eyebrow">FAQ</div>
        <h2 class="mt-3 font-display text-4xl font-bold text-white">常見問題</h2>
      </div>

      <div class="mt-8 grid gap-3">
        <article v-for="(item, index) in faqs" :key="item.question" class="faq-item reveal">
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
</template>
