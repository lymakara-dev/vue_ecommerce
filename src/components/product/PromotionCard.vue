<template>
  <div
    class="w-[400px] bg-white border border-gray-200 rounded-lg shadow flex flex-row"
  >
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 text-wrap">
        {{ description }}
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Shop Now
      </a>
    </div>
    <div class="flex justify-center items-center w-[200px]">
      <a href="#">
        <img class="rounded-t-lg" :src="image" alt="" />
      </a>
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
  },
};
</script>
