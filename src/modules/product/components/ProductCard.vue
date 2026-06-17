<template>
  <div class="card card-hover group flex h-full w-full flex-col overflow-hidden">
    <div
      class="relative flex h-48 items-center justify-center bg-slate-50 p-6 sm:h-[210px]"
    >
      <button
        type="button"
        class="flex h-full w-full cursor-pointer items-center justify-center"
        @click="goToDetailPage"
      >
        <img
          class="max-h-36 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110 sm:max-h-40"
          :src="image"
          :alt="alt"
        />
      </button>

      <div
        v-if="hasDiscount"
        class="absolute right-3 top-3 rounded-full bg-accent-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm"
      >
        -{{ discountPercentage }}%
      </div>
    </div>

    <div class="flex-1 px-4 sm:px-5">
      <h5
        class="line-clamp-2 text-base font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-primary-600 sm:text-lg"
      >
        {{ name }}
      </h5>
      <p class="line-clamp-2 text-sm text-slate-500">{{ description }}</p>
      <RatingStar :rating-point="ratingPoint" />
    </div>

    <div class="mt-auto px-4 pb-4 sm:px-5 sm:pb-5">
      <div class="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span
          v-if="hasDiscount"
          class="text-sm font-bold text-slate-400 line-through"
        >
          {{ price }}$
        </span>
        <span class="text-lg font-bold text-slate-900">
          {{ hasDiscount ? discountedPrice : price }}$
        </span>
      </div>
      <button
        @click="
          addToCart({
            id: productId,
            name,
            price,
            description,
            image,
            discountPercentage,
          })
        "
        class="btn-primary w-full"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import RatingStar from "@/shared/components/RatingStar.vue";

export default {
  name: "ProductCard",
  components: {
    RatingStar,
  },
  props: {
    image: String,
    alt: String,
    name: String,
    description: String,
    ratingPoint: Number,
    discountPercentage: Number,
    price: Number,
    productId: Number,
    addToCart: Function,
  },

  computed: {
    hasDiscount() {
      return this.discountPercentage > 0;
    },
    discountedPrice() {
      if (!this.hasDiscount) return this.price;
      return (
        this.price -
        (this.price * this.discountPercentage) / 100
      ).toFixed(2);
    },
  },
  methods: {
    goToDetailPage() {
      this.$router.push(`/products/${this.productId}`);
    },
  },
};
</script>
