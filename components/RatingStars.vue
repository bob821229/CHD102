<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: 'md',
  },
  label: {
    type: String,
    default: '',
  },
  showScore: {
    type: Boolean,
    default: true,
  },
});

const starSizeClass = computed(() => (props.size === 'sm' ? 'text-base' : 'text-xl'));
const fillWidth = computed(() => `${Math.max(0, Math.min(props.rating / 5, 1)) * 100}%`);
</script>

<template>
  <span class="inline-flex items-center gap-2" :aria-label="label || `${rating} out of 5 stars`">
    <span class="relative inline-block leading-none" :class="starSizeClass">
      <span class="tracking-[0.08em] text-stone-600">★★★★★</span>
      <span class="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap tracking-[0.08em] text-ember-400" :style="{ width: fillWidth }">
        ★★★★★
      </span>
    </span>
    <span v-if="showScore" class="text-sm text-stone-300">{{ rating.toFixed(1) }}</span>
  </span>
</template>
