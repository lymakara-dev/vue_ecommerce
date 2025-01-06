<template>
  <div
    class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 shadow-md"
  >
    <img class="h-auto w-20" :src="image" :alt="alt" />
    <span class="ms-3 text-2xl font-semibold">{{ categoryName }}</span>
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
