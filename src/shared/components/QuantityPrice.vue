<template>
  <div class="ml-auto flex flex-col items-end gap-3 text-right">
    <div class="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-1.5 py-1 shadow-sm">
      <button
        type="button"
        class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
        @click="decrement"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5 fill-current" viewBox="0 0 121.805 121.804">
          <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" />
        </svg>
      </button>
      <span class="w-5 text-center text-sm font-semibold text-slate-900">{{ quantity }}</span>
      <button
        type="button"
        class="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
        @click="increment"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5 fill-current" viewBox="0 0 512 512">
          <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" />
          <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" />
        </svg>
      </button>
    </div>

    <div>
      <p v-if="product.discountPercentage" class="text-sm font-medium text-slate-400 line-through">
        {{ formatCurrency(product.price) }}
      </p>
      <p class="text-lg font-bold text-slate-900">{{ formatCurrency(totalPrice) }}</p>
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