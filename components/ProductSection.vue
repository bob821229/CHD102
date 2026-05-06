<script setup>
import { SlidersHorizontal } from 'lucide-vue-next';

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

const activeCategory = ref('全系列');

const filteredProducts = computed(() => {
  if (activeCategory.value === '全系列') return props.products;
  return props.products.filter((product) => product.category === activeCategory.value);
});
</script>

<template>
  <section id="products" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="section-heading reveal">
      <div>
        <div class="eyebrow">PRODUCT LIST</div>
        <h2>精選商品</h2>
      </div>
      <button class="secondary-button">
        <SlidersHorizontal class="h-4 w-4" />
        智慧篩選
      </button>
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

    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard v-for="product in filteredProducts" :key="product.slug" :product="product" />
    </div>
  </section>
</template>
