<script setup>
defineProps({
  assets: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="section-heading reveal">
      <div>
        <div class="eyebrow">AI VISUAL SYSTEM</div>
        <h2>AI 生成商品視覺</h2>
      </div>
      <p class="max-w-xl text-sm leading-7 text-stone-400">
        商品棚拍、門市情境、維修工作台與玩家選購場景都已整理進 Nuxt assets，讓整個品牌視覺更一致。
      </p>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-4">
      <img :src="assets.productSheet" alt="Airsoft 商品規格圖" class="h-72 w-full rounded object-cover md:col-span-2" />
      <img :src="assets.buyerGallerySheet" alt="玩家選購情境" class="h-72 w-full rounded object-cover" />
      <img :src="assets.aboutWorkbench" alt="維修工作台" class="h-72 w-full rounded object-cover" />
      <img :src="assets.featureTriptych" alt="裝備功能展示" class="h-72 w-full rounded object-cover" />
      <img :src="assets.supportBanner" alt="客服支援情境" class="h-72 w-full rounded object-cover md:col-span-3" />
    </div>
  </section>
</template>
