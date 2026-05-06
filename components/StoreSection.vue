<script setup>
defineProps({
  stores: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="stores" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="section-heading reveal">
      <div>
        <div class="eyebrow">STORE INFORMATION</div>
        <h2>門市資訊</h2>
      </div>
    </div>

    <div class="mt-8 grid gap-5 lg:grid-cols-2">
      <StoreCard v-for="store in stores" :key="store.name" :store="store" />
    </div>
  </section>
</template>
