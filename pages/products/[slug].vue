<script setup>
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from 'lucide-vue-next';
import { navItems, products } from '../../data/catalog';

const route = useRoute();
const selectedImageIndex = ref(0);
const quantity = ref(1);
const { addToCart, isFavorite, toggleFavorite } = useShop();

const product = computed(() => products.find((item) => item.slug === route.params.slug));

useHead(() => ({
  title: product.value
    ? `${product.value.name} | Cat Tactical Airsoft`
    : '商品不存在 | Cat Tactical Airsoft',
}));

const increase = () => {
  quantity.value += 1;
};

const decrease = () => {
  quantity.value = Math.max(1, quantity.value - 1);
};
</script>

<template>
  <div class="min-h-screen bg-field-900 text-stone-100">
    <AppHeader :nav-items="navItems" />

    <main v-if="product" class="mx-auto max-w-7xl px-5 pb-16 pt-28 lg:px-8">
      <NuxtLink to="/#products" class="inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-ember-300">
        <ArrowLeft class="h-4 w-4" />
        返回商品列表
      </NuxtLink>

      <section class="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div class="aspect-[4/3] overflow-hidden rounded border border-white/10 bg-stone-950">
            <img :src="product.gallery[selectedImageIndex]" :alt="product.name" class="h-full w-full object-cover" />
          </div>
          <div class="mt-4 grid grid-cols-3 gap-3">
            <button
              v-for="(image, index) in product.gallery"
              :key="image"
              class="overflow-hidden rounded border transition"
              :class="selectedImageIndex === index ? 'border-ember-300' : 'border-white/10'"
              @click="selectedImageIndex = index"
            >
              <img :src="image" :alt="`${product.name} 圖片 ${index + 1}`" class="h-28 w-full object-cover" />
            </button>
          </div>
        </div>

        <div class="rounded border border-white/10 bg-white/[0.04] p-6">
          <p class="eyebrow">{{ product.category }}</p>
          <h1 class="mt-3 font-display text-5xl font-bold text-white">{{ product.name }}</h1>
          <div class="mt-4 flex flex-wrap items-center gap-4 text-sm text-stone-400">
            <span class="flex items-center gap-2">
              <Star class="h-4 w-4 fill-ember-400 text-ember-400" />
              {{ product.rating }} 玩家評分
            </span>
            <span>庫存 {{ product.stock }}</span>
            <span class="rounded bg-ember-500 px-2 py-1 font-bold text-field-900">{{ product.tag }}</span>
          </div>
          <p class="mt-6 text-lg leading-8 text-stone-300">{{ product.summary }}</p>
          <p class="mt-4 leading-8 text-stone-400">{{ product.description }}</p>

          <div class="mt-6 grid gap-3">
            <div v-for="detail in product.details" :key="detail" class="rounded border border-white/10 bg-field-900/70 px-4 py-3 text-sm text-stone-300">
              {{ detail }}
            </div>
          </div>

          <div class="mt-8 flex items-end justify-between gap-4">
            <div>
              <p class="text-sm text-stone-500">售價</p>
              <p class="font-display text-4xl font-bold text-ember-300">NT$ {{ product.price.toLocaleString() }}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="icon-button" aria-label="減少數量" @click="decrease">
                <Minus class="h-4 w-4" />
              </button>
              <span class="w-10 text-center text-lg font-semibold text-white">{{ quantity }}</span>
              <button class="icon-button" aria-label="增加數量" @click="increase">
                <Plus class="h-4 w-4" />
              </button>
            </div>
          </div>

          <div class="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <button class="primary-button justify-center py-3" @click="addToCart(product.slug, quantity)">
              <ShoppingBag class="h-4 w-4" />
              加入購物車
            </button>
            <button class="secondary-button justify-center py-3" @click="toggleFavorite(product.slug)">
              <Heart class="h-4 w-4" :class="{ 'fill-ember-400 text-ember-400': isFavorite(product.slug) }" />
              收藏
            </button>
          </div>
        </div>
      </section>
    </main>

    <main v-else class="mx-auto grid min-h-screen max-w-3xl place-items-center px-5 text-center">
      <div>
        <h1 class="font-display text-4xl font-bold text-white">找不到商品</h1>
        <NuxtLink to="/#products" class="primary-button mt-6">回商品列表</NuxtLink>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
