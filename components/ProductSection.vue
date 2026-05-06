<script setup>
import { SlidersHorizontal, X } from 'lucide-vue-next';

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
});

const activeCategory = ref(props.categories[0] ?? '全部商品');
const filterOpen = ref(false);
const maxPrice = ref(40000);
const inStockOnly = ref(false);
const minRating = ref(0);
const sortMode = ref('featured');

const highestPrice = computed(() => Math.max(...props.products.map((product) => product.price), 0));
const allCategory = computed(() => props.categories[0] ?? '全部商品');

const filteredProducts = computed(() => {
  let result = [...props.products];

  if (activeCategory.value !== allCategory.value) {
    result = result.filter((product) => product.category === activeCategory.value);
  }

  result = result.filter((product) => product.price <= maxPrice.value);

  if (inStockOnly.value) {
    result = result.filter((product) => product.stock > 0);
  }

  if (minRating.value > 0) {
    result = result.filter((product) => product.rating >= minRating.value);
  }

  return result.sort((a, b) => {
    if (sortMode.value === 'price-asc') return a.price - b.price;
    if (sortMode.value === 'price-desc') return b.price - a.price;
    if (sortMode.value === 'rating') return b.rating - a.rating;
    if (sortMode.value === 'stock') return b.stock - a.stock;
    return props.products.findIndex((product) => product.slug === a.slug) - props.products.findIndex((product) => product.slug === b.slug);
  });
});

const activeFilterCount = computed(() => {
  let count = 0;
  if (maxPrice.value < highestPrice.value) count += 1;
  if (inStockOnly.value) count += 1;
  if (minRating.value > 0) count += 1;
  if (sortMode.value !== 'featured') count += 1;
  return count;
});

const resetFilters = () => {
  maxPrice.value = highestPrice.value;
  inStockOnly.value = false;
  minRating.value = 0;
  sortMode.value = 'featured';
};

watch(
  highestPrice,
  (price) => {
    if (!maxPrice.value || maxPrice.value > price) {
      maxPrice.value = price;
    }
  },
  { immediate: true },
);
</script>

<template>
  <section id="products" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="section-heading reveal">
      <div>
        <div class="eyebrow">PRODUCT LIST</div>
        <h2>精選商品</h2>
      </div>
      <button class="secondary-button relative" @click="filterOpen = !filterOpen">
        <SlidersHorizontal class="h-4 w-4" />
        智慧篩選
        <span v-if="activeFilterCount" class="grid h-5 min-w-5 place-items-center rounded-full bg-ember-500 px-1 text-xs font-bold text-field-900">
          {{ activeFilterCount }}
        </span>
      </button>
    </div>

    <div v-if="filterOpen" class="mt-6 rounded border border-white/10 bg-field-800 p-5 shadow-2xl shadow-black/30">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="eyebrow">SMART FILTER</p>
          <h3 class="mt-2 font-display text-2xl font-bold text-white">依預算與使用需求縮小商品</h3>
        </div>
        <button class="icon-button h-9 w-9" aria-label="關閉智慧篩選" @click="filterOpen = false">
          <X class="h-4 w-4" />
        </button>
      </div>

      <div class="mt-6 grid gap-5 lg:grid-cols-4">
        <label class="rounded border border-white/10 bg-white/[0.035] p-4">
          <span class="text-sm font-semibold text-white">最高預算</span>
          <input v-model.number="maxPrice" class="mt-4 w-full accent-ember-400" type="range" min="0" :max="highestPrice" step="500" />
          <span class="mt-3 block font-display text-2xl font-bold text-ember-300">NT$ {{ maxPrice.toLocaleString() }}</span>
        </label>

        <label class="rounded border border-white/10 bg-white/[0.035] p-4">
          <span class="text-sm font-semibold text-white">最低評分</span>
          <select v-model.number="minRating" class="form-input mt-4">
            <option :value="0">不限評分</option>
            <option :value="4.7">4.7 以上</option>
            <option :value="4.8">4.8 以上</option>
            <option :value="4.9">4.9 以上</option>
          </select>
        </label>

        <label class="rounded border border-white/10 bg-white/[0.035] p-4">
          <span class="text-sm font-semibold text-white">排序方式</span>
          <select v-model="sortMode" class="form-input mt-4">
            <option value="featured">精選排序</option>
            <option value="price-asc">價格由低到高</option>
            <option value="price-desc">價格由高到低</option>
            <option value="rating">評分最高</option>
            <option value="stock">庫存最多</option>
          </select>
        </label>

        <div class="rounded border border-white/10 bg-white/[0.035] p-4">
          <label class="flex items-center gap-3 text-sm font-semibold text-white">
            <input v-model="inStockOnly" type="checkbox" class="h-4 w-4 accent-ember-400" />
            只看現貨
          </label>
          <button class="secondary-button mt-5 w-full justify-center" @click="resetFilters">重設篩選</button>
        </div>
      </div>
    </div>

    <div class="mt-8 flex gap-3 overflow-x-auto pb-2">
      <button
        v-for="category in categories"
        :key="category"
        class="chip"
        :class="{ 'chip-active': activeCategory === category }"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="mt-5 flex items-center justify-between text-sm text-stone-400">
      <span>目前顯示 {{ filteredProducts.length }} 件商品</span>
      <span v-if="activeCategory !== allCategory" class="text-ember-300">{{ activeCategory }}</span>
    </div>

    <div v-if="filteredProducts.length" class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard v-for="product in filteredProducts" :key="product.slug" :product="product" />
    </div>

    <div v-else class="mt-8 rounded border border-white/10 bg-white/[0.035] p-8 text-center">
      <p class="font-display text-2xl font-bold text-white">沒有符合條件的商品</p>
      <p class="mt-3 text-sm text-stone-400">放寬預算、評分或庫存條件後再試一次。</p>
      <button class="primary-button mt-5" @click="resetFilters">重設篩選</button>
    </div>
  </section>
</template>
