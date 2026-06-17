<template>
  <div class="flex flex-col gap-4">
    <div class="card flex aspect-square items-center justify-center bg-slate-50 p-8">
      <img
        :src="mainImage"
        alt="Product Picture"
        class="max-h-full max-w-full object-contain transition-transform duration-300"
      />
    </div>
    <div class="flex gap-3 overflow-x-auto pb-1">
      <button
        v-for="(image, index) in images"
        :key="index"
        type="button"
        class="card flex h-20 w-20 shrink-0 items-center justify-center bg-slate-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        :class="
          image === mainImage
            ? 'ring-2 ring-primary-500'
            : 'hover:ring-2 hover:ring-primary-200'
        "
        @click="updateMainImage(image)"
      >
        <img :src="image" alt="Product Picture" class="max-h-full max-w-full object-contain" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    mainImage: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },

  methods: {
    updateMainImage(image) {
      this.$emit("update-main-image", image);
    },
  },
};
</script>