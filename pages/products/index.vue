<script setup>
import { categories, navItems, products } from '../../data/catalog';

useHead({
  title: '商品列表 | Cat Tactical Airsoft',
});
</script>

<template>
  <div class="min-h-screen bg-field-900 text-stone-100">
    <AppHeader :nav-items="navItems" />
    <main class="pt-20">
      <ProductSection :categories="categories" :products="products" />
    </main>
    <SiteFooter />
  </div>
</template>
