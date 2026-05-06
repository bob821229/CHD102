<script setup>
import { MapPin, Phone } from 'lucide-vue-next';

defineProps({
  store: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="store-card interactive-card reveal">
    <img :src="store.image" :alt="store.name" class="h-72 w-full rounded object-cover" />
    <div class="mt-5">
      <h3 class="font-display text-2xl font-bold text-white">{{ store.name }}</h3>
      <div class="mt-4 grid gap-3 text-sm text-stone-300">
        <p class="flex items-center gap-2">
          <Phone class="h-4 w-4 text-ember-300" />
          {{ store.phone }}
        </p>
        <p>營業時間：{{ store.hours }}</p>
        <p class="flex gap-2">
          <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-ember-300" />
          {{ store.address }}
        </p>
      </div>
    </div>
  </article>
</template>
