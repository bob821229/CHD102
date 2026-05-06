<script setup>
import { Menu, Search, ShoppingBag, X } from 'lucide-vue-next';

defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

const mobileOpen = ref(false);
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-field-900/82 backdrop-blur-xl">
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#home" class="flex items-center gap-3">
        <span class="grid h-11 w-11 place-items-center rounded border border-ember-400/50 bg-ember-500/15 font-display text-xl font-bold text-ember-300 shadow-glow">
          CT
        </span>
        <span class="leading-tight">
          <span class="block font-display text-lg font-semibold tracking-wide text-white">Cat Tactical</span>
          <span class="text-xs uppercase tracking-[0.28em] text-stone-400">Airsoft</span>
        </span>
      </a>

      <div class="hidden items-center gap-7 lg:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-stone-300 transition hover:text-ember-300"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <button class="icon-button" aria-label="搜尋">
          <Search class="h-5 w-5" />
        </button>
        <button class="icon-button" aria-label="購物袋">
          <ShoppingBag class="h-5 w-5" />
        </button>
        <a href="#member" class="primary-button">預約諮詢</a>
      </div>

      <button class="icon-button lg:hidden" aria-label="開啟選單" @click="mobileOpen = true">
        <Menu class="h-5 w-5" />
      </button>
    </nav>
  </header>

  <div v-if="mobileOpen" class="fixed inset-0 z-[60] bg-field-900/95 px-5 py-6 backdrop-blur-xl lg:hidden">
    <div class="flex items-center justify-between">
      <span class="font-display text-lg font-semibold text-white">Cat Tactical</span>
      <button class="icon-button" aria-label="關閉選單" @click="mobileOpen = false">
        <X class="h-5 w-5" />
      </button>
    </div>
    <div class="mt-10 grid gap-3">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="rounded border border-white/10 px-4 py-4 text-lg font-medium text-stone-100"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>
