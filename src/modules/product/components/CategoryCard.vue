<template>
  <div class="flex w-full items-center gap-3 p-3">
    <img
      class="h-12 w-12 object-contain sm:h-14 sm:w-14"
      :src="image"
      :alt="alt"
    />
    <span class="truncate text-sm font-semibold text-slate-700 sm:text-base">
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
