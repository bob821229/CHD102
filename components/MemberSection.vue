<template>
  <section id="member" class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="overflow-hidden rounded border border-white/10 bg-stone-950/55 reveal">
      <div class="grid lg:grid-cols-[1fr_0.8fr]">
        <div class="p-6 sm:p-10">
          <div class="eyebrow">MEMBER CENTRE</div>
          <h2 class="mt-3 font-display text-4xl font-bold text-white">預約諮詢與裝備配置</h2>
          <p class="mt-4 max-w-2xl leading-8 text-stone-300">
            留下需求後，門市可依照預算、場地、使用頻率與偏好，協助規劃入門或升級方案。
          </p>
        </div>
        <form class="grid gap-3 bg-white/[0.03] p-6 sm:p-10">
          <input class="form-input" type="text" placeholder="姓名" />
          <input class="form-input" type="tel" placeholder="聯絡電話" />
          <select class="form-input">
            <option>入門配置諮詢</option>
            <option>維修升級</option>
            <option>門市試握預約</option>
          </select>
          <button class="primary-button mt-2 justify-center py-3" type="button">送出預約</button>
        </form>
      </div>
    </div>
  </section>
</template>
