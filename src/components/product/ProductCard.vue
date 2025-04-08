<template>
  <div
    class="w-full sm:w-[18rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-full"
  >
    <div class="flex justify-center items-center relative p-2 sm:h-[210px]">
      <div @click="goToDetailPage">
        <img
          class="rounded-lg object-cover w-32 h-32 sm:w-52 sm:h-52 transition-all duration-300"
          :src="image"
          :alt="alt"
        />
      </div>

      <div
        v-if="hasDiscount"
        class="absolute top-2 right-2 sm:top-5 sm:right-5 bg-orange-500 p-1 sm:p-2 rounded-lg text-white text-xs sm:text-sm font-bold"
      >
        {{ discountPercentage }}%
      </div>
    </div>

    <div class="flex-1 px-4 sm:px-5 pb-3 sm:pb-5">
      <h5
        class="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 line-clamp-2"
      >
        {{ name }}
      </h5>
      <p class="text-sm text-gray-600 line-clamp-2">{{ description }}</p>
      <RatingStar :rating-point="ratingPoint" />
    </div>

    <div class="px-4 sm:px-5 pb-4 sm:pb-5">
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
      >
        <div>
          <span
            v-if="hasDiscount"
            class="text-sm sm:text-lg font-bold text-red-500 line-through"
          >
            {{ price }}$
          </span>
          <span class="text-base sm:text-lg font-bold text-gray-900 ml-2">
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
          class="w-full sm:w-auto text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStar from "../RatingStar.vue";

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
