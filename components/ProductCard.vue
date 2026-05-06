<script setup>
import { Heart, ShoppingBag, Star } from 'lucide-vue-next';

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { addToCart, isFavorite, toggleFavorite } = useShop();
</script>

<template>
  <article class="product-card reveal">
    <NuxtLink :to="`/products/${product.slug}`" class="relative block aspect-[4/3] overflow-hidden rounded bg-stone-950">
      <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition duration-500 hover:scale-105" />
      <span class="absolute left-3 top-3 rounded bg-ember-500 px-2 py-1 text-xs font-bold text-field-900">
        {{ product.tag }}
      </span>
    </NuxtLink>
    <div class="mt-4 flex items-start justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.2em] text-stone-500">{{ product.category }}</p>
        <NuxtLink :to="`/products/${product.slug}`" class="mt-1 block text-lg font-semibold text-white transition hover:text-ember-300">
          {{ product.name }}
        </NuxtLink>
      </div>
      <button class="icon-button shrink-0" :aria-label="`收藏 ${product.name}`" @click="toggleFavorite(product.slug)">
        <Heart class="h-4 w-4" :class="{ 'fill-ember-400 text-ember-400': isFavorite(product.slug) }" />
      </button>
    </div>
    <div class="mt-3 flex items-center gap-2 text-sm text-stone-400">
      <Star class="h-4 w-4 fill-ember-400 text-ember-400" />
      {{ product.rating }} 玩家評分
    </div>
    <ul class="mt-4 grid gap-2 text-sm text-stone-400">
      <li v-for="spec in product.specs" :key="spec" class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full bg-ember-400" />
        {{ spec }}
      </li>
    </ul>
    <div class="mt-5 flex items-center justify-between">
      <p class="font-display text-2xl font-bold text-ember-300">NT$ {{ product.price.toLocaleString() }}</p>
      <button class="primary-button px-4 py-2" :aria-label="`加入購物袋 ${product.name}`" @click="addToCart(product.slug)">
        <ShoppingBag class="h-4 w-4" />
      </button>
    </div>
  </article>
</template>
