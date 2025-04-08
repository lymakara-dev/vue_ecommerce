<template>
  <div
    class="flex items-center gap-3 p-2 sm:p-3 text-gray-900 rounded-lg hover:bg-gray-100 shadow-md w-full"
  >
    <img
      class="w-14 h-14 sm:w-20 sm:h-20 object-contain"
      :src="image"
      :alt="alt"
    />
    <span class="text-base sm:text-lg md:text-xl font-semibold truncate">
      {{ categoryName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    categoryName: String,
    image: String,
    alt: String,
  },
};
</script>
