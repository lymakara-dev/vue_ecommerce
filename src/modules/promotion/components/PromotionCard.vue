<template>
  <div
    class="card card-hover flex w-[85vw] max-w-[340px] shrink-0 flex-col overflow-hidden sm:w-[420px] sm:max-w-none sm:flex-row"
  >
    <div class="flex w-full flex-col justify-center gap-3 p-5 sm:w-7/12">
      <h5 class="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {{ title }}
      </h5>
      <p class="text-sm text-slate-600 line-clamp-3">
        {{ description }}
      </p>
      <router-link to="/promotion-products" class="btn-accent w-fit">
        Shop Now
      </router-link>
    </div>
    <div class="flex items-center justify-center bg-primary-50 p-4 sm:w-5/12">
      <router-link to="/promotion-products">
        <img
          class="max-h-32 object-contain transition-transform duration-300 hover:scale-110"
          :src="image"
          :alt="alt"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionCard",
  props: {
    title: String,
    description: String,
    image: String,
    alt: String,
  },
};
</script>
