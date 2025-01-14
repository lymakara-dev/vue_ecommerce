<template>
  <div
    class="w-full h-[450px] max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col"
  >
    <div class="flex justify-center items-center h-[210px] relative">
      <div @click="goToDetailPage">
        <img
          class="rounded-lg object-cover h-52 w-52"
          :src="image"
          :alt="alt"
        />
      </div>

      <div
        v-if="hasDiscount"
        class="absolute top-5 right-5 bg-orange-500 p-2 rounded-lg text-white text-sm font-bold"
      >
        {{ discountPercentage }}%
      </div>
    </div>
    <div class="grow px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">
          {{ name }}
        </h5>
      </a>
      <p>{{ description }}</p>
      <RatingStar :rating-point="ratingPoint"></RatingStar>
    </div>
    <div class="px-5 pb-5">
      <div class="flex flex-row items-center justify-between">
        <span
          v-if="hasDiscount"
          class="text-xl font-bold text-red-500 line-through"
        >
          {{ price }}$
        </span>
        <span class="text-xl font-bold text-gray-900">
          {{ hasDiscount ? discountedPrice : price }}$
        </span>
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
          class="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
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
