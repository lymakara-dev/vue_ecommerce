<template>
  <div class="ml-auto text-right">
    <div class="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
      <button type="button" class="border-none outline-none" @click="decrement">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
          <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" data-original="#000000" />
        </svg>
      </button>
      <span class="text-gray-800 text-sm font-semibold px-3">{{ quantity }}</span>
      <button type="button" class="border-none outline-none" @click="increment">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5" viewBox="0 0 512 512">
          <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" data-original="#000000" />
          <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" data-original="#000000" />
        </svg>
      </button>
    </div>

    <div class="mt-6">
      <h4 class="text-base font-bold text-gray-500 mb-1"><strike class="font-medium">{{ formatCurrency(product.price) }}</strike></h4>
      <h4 class="text-base font-bold text-gray-800">{{ formatCurrency(totalPrice) }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuantityPrice',
  props: {
    quantity: {
      type: Number,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      const discountedPrice = this.product.price * (1 - this.product.discountPercentage / 100);
      return discountedPrice * this.quantity;
    },
  },
  methods: {
    increment() {
      this.$emit('update:quantity', this.quantity + 1);
    },
    decrement() {
      if (this.quantity > 1) {
        this.$emit('update:quantity', this.quantity - 1);
      }
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>