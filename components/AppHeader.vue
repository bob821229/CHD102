<script setup>
import { Heart, Menu, Minus, Plus, Search, ShoppingBag, Trash2, X } from 'lucide-vue-next';
import { products } from '../data/catalog';

defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

const mobileOpen = ref(false);
const searchOpen = ref(false);
const cartOpen = ref(false);
const query = ref('');

const {
  cartCount,
  cartItems,
  cartTotal,
  clearCart,
  removeFromCart,
  searchProducts,
  updateQuantity,
} = useShop();

const searchResults = computed(() => (query.value ? searchProducts(query.value) : products.slice(0, 4)));
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
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-sm font-medium text-stone-300 transition hover:text-ember-300"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <button class="icon-button" aria-label="搜尋" @click="searchOpen = true">
          <Search class="h-5 w-5" />
        </button>
        <button class="icon-button relative" aria-label="購物袋" @click="cartOpen = true">
          <ShoppingBag class="h-5 w-5" />
          <span v-if="cartCount" class="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-ember-500 px-1 text-xs font-bold text-field-900">
            {{ cartCount }}
          </span>
        </button>
        <NuxtLink to="/#member" class="primary-button">預約諮詢</NuxtLink>
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
      <NuxtLink
        v-for="item in navItems"
        :key="item.href"
        :to="item.href"
        class="rounded border border-white/10 px-4 py-4 text-lg font-medium text-stone-100"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>

  <div v-if="searchOpen" class="fixed inset-0 z-[70] bg-field-900/90 p-5 backdrop-blur-xl">
    <div class="mx-auto max-w-3xl rounded border border-white/10 bg-field-800 p-5 shadow-2xl shadow-black/40">
      <div class="flex items-center gap-3">
        <Search class="h-5 w-5 text-ember-300" />
        <input
          v-model="query"
          class="w-full bg-transparent text-lg text-white outline-none placeholder:text-stone-500"
          placeholder="搜尋商品、分類或用途"
          autofocus
        />
        <button class="icon-button shrink-0" aria-label="關閉搜尋" @click="searchOpen = false">
          <X class="h-5 w-5" />
        </button>
      </div>
      <div class="mt-5 grid gap-3">
        <NuxtLink
          v-for="product in searchResults"
          :key="product.slug"
          :to="`/products/${product.slug}`"
          class="flex items-center gap-4 rounded border border-white/10 bg-white/[0.04] p-3 transition hover:border-ember-300/50"
          @click="searchOpen = false"
        >
          <img :src="product.image" :alt="product.name" class="h-16 w-20 rounded object-cover" />
          <span class="min-w-0 flex-1">
            <span class="block font-semibold text-white">{{ product.name }}</span>
            <span class="line-clamp-1 text-sm text-stone-400">{{ product.summary }}</span>
          </span>
          <span class="text-sm font-semibold text-ember-300">NT$ {{ product.price.toLocaleString() }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-if="cartOpen" class="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm" @click.self="cartOpen = false">
    <aside class="ml-auto flex h-full w-full max-w-md flex-col border-l border-white/10 bg-field-900 p-5 shadow-2xl">
      <div class="flex items-center justify-between">
        <div>
          <p class="eyebrow">CART</p>
          <h2 class="mt-1 text-2xl font-bold text-white">購物車</h2>
        </div>
        <button class="icon-button" aria-label="關閉購物車" @click="cartOpen = false">
          <X class="h-5 w-5" />
        </button>
      </div>

      <div v-if="cartItems.length" class="mt-6 flex-1 space-y-4 overflow-y-auto">
        <article v-for="item in cartItems" :key="item.slug" class="rounded border border-white/10 bg-white/[0.04] p-3">
          <div class="flex gap-3">
            <img :src="item.image" :alt="item.name" class="h-20 w-24 rounded object-cover" />
            <div class="min-w-0 flex-1">
              <p class="font-semibold text-white">{{ item.name }}</p>
              <p class="mt-1 text-sm text-ember-300">NT$ {{ item.price.toLocaleString() }}</p>
              <div class="mt-3 flex items-center gap-2">
                <button class="icon-button h-8 w-8" aria-label="減少數量" @click="updateQuantity(item.slug, item.quantity - 1)">
                  <Minus class="h-4 w-4" />
                </button>
                <span class="w-8 text-center text-sm text-white">{{ item.quantity }}</span>
                <button class="icon-button h-8 w-8" aria-label="增加數量" @click="updateQuantity(item.slug, item.quantity + 1)">
                  <Plus class="h-4 w-4" />
                </button>
                <button class="ml-auto text-stone-500 transition hover:text-ember-300" aria-label="移除商品" @click="removeFromCart(item.slug)">
                  <Trash2 class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div v-else class="grid flex-1 place-items-center text-center text-stone-400">
        <div>
          <ShoppingBag class="mx-auto h-10 w-10 text-stone-600" />
          <p class="mt-3">購物車目前是空的</p>
        </div>
      </div>

      <div class="border-t border-white/10 pt-4">
        <div class="flex items-center justify-between text-white">
          <span>小計</span>
          <span class="font-display text-2xl font-bold text-ember-300">NT$ {{ cartTotal.toLocaleString() }}</span>
        </div>
        <button class="primary-button mt-4 w-full justify-center py-3" :disabled="!cartItems.length">
          前往結帳
        </button>
        <button v-if="cartItems.length" class="mt-3 flex w-full items-center justify-center gap-2 text-sm text-stone-400 hover:text-ember-300" @click="clearCart">
          <Trash2 class="h-4 w-4" />
          清空購物車
        </button>
      </div>
    </aside>
  </div>
</template>
