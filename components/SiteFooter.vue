<template>
  <footer class="relative overflow-hidden border-t border-white/10 bg-field-900 px-5 py-10 text-sm text-stone-500">
    <svg class="footer-signal absolute inset-x-0 bottom-0 h-28 w-full text-ember-300/70" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="footerLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0" />
          <stop offset="45%" stop-color="currentColor" stop-opacity="0.85" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path class="footer-signal-line footer-signal-line-a" d="M0 112 C160 82 260 132 420 98 S710 74 870 104 1060 132 1200 88" fill="none" stroke="url(#footerLine)" stroke-width="2" />
      <path class="footer-signal-line footer-signal-line-b" d="M0 130 C180 110 310 138 470 118 S730 96 900 122 1080 144 1200 118" fill="none" stroke="url(#footerLine)" stroke-width="1.5" />
      <g class="footer-reticle">
        <circle cx="1030" cy="82" r="28" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" />
        <path d="M1002 82H1058M1030 54V110" stroke="currentColor" stroke-opacity="0.3" stroke-width="1" />
      </g>
    </svg>

    <div class="relative mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div class="flex items-center gap-3">
          <span class="grid h-10 w-10 place-items-center rounded border border-ember-400/50 bg-ember-500/15 font-display text-lg font-bold text-ember-300">CT</span>
          <div>
            <p class="font-display text-lg font-semibold text-white">Cat Tactical Airsoft</p>
            <p class="text-xs uppercase tracking-[0.24em] text-stone-500">Loadout. Training. Service.</p>
          </div>
        </div>
        <p class="mt-4 max-w-xl leading-7 text-stone-400">
          從入門選購到維修保養，把 Airsoft 裝備配置整理成清楚、可執行、能長期維持的方案。
        </p>
      </div>
      <div class="flex flex-wrap gap-3">
        <NuxtLink to="/#products" class="secondary-button">商品</NuxtLink>
        <NuxtLink to="/about" class="secondary-button">關於我們</NuxtLink>
        <NuxtLink to="/#member" class="primary-button">預約諮詢</NuxtLink>
      </div>
    </div>

    <div class="relative mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-stone-600">
      Copyright © Cat Tactical Airsoft. Nuxt SPA with Vite + Tailwind.
    </div>
  </footer>
</template>
