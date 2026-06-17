<template>
  <div class="mx-4 flex flex-col items-center py-12 sm:mx-6 lg:mx-8">
    <div class="card w-full max-w-2xl animate-scale-in p-6 text-center sm:p-10">
      <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
        <svg class="h-10 w-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <h1 class="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl">Payment Successful!</h1>
      <p class="mb-8 text-slate-500">Thank you for your purchase.</p>

      <div v-if="latestOrder.items && latestOrder.items.length" class="mb-8 flex flex-col gap-3 text-left">
        <h2 class="text-base font-bold text-slate-900">Order Items</h2>
        <div v-for="item in latestOrder.items" :key="item.id" class="card flex items-center gap-4 p-4">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2">
            <img :src="item.image" alt="Product image" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="text-sm">
            <h3 class="font-semibold text-slate-900">{{ item.name }}</h3>
            <p class="text-slate-500">{{ formatCurrency(item.price) }} &middot; Qty {{ item.quantity }}</p>
            <span v-if="item.discountPercentage" class="badge-accent mt-1">-{{ item.discountPercentage }}%</span>
          </div>
        </div>
      </div>
      <p v-else class="mb-8 text-slate-400">No items in your order.</p>

      <div class="border-t border-slate-100 pt-6 text-left">
        <h3 class="mb-2 text-base font-bold text-slate-900">Order Summary</h3>
        <ul class="divide-y divide-slate-100 text-sm text-slate-600">
          <li class="flex justify-between py-2.5">Subtotal <span class="font-semibold text-slate-900">{{ formatCurrency(subtotal) }}</span></li>
          <li class="flex justify-between py-2.5">Shipping <span class="font-semibold text-slate-900">{{ formatCurrency(shipping) }}</span></li>
          <li class="flex justify-between py-2.5">Tax <span class="font-semibold text-slate-900">{{ formatCurrency(tax) }}</span></li>
          <li class="flex justify-between py-2.5">Discount <span class="font-semibold text-slate-900">-{{ formatCurrency(discountAmount) }}</span></li>
          <li class="flex justify-between py-2.5 text-base font-bold text-slate-900">Total <span>{{ formatCurrency(total) }}</span></li>
        </ul>
      </div>

      <button @click="returnToHome" class="btn-primary mt-8 w-full">
        Return to Home Page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCompleteView",
  data() {
    return {
      latestOrder: { items: [] },
      shipping: 4.0,
      taxRate: 0.1,
      discountAmount: 0,
    };
  },
  computed: {
    subtotal() {
      if (!this.latestOrder.items) return 0;
      return this.latestOrder.items.reduce((sum, item) => {
        const discountedPrice = item.price * (1 - (item.discountPercentage || 0) / 100);
        return sum + discountedPrice * item.quantity;
      }, 0);
    },
    tax() {
      return this.subtotal * this.taxRate;
    },
    total() {
      return this.subtotal + this.shipping + this.tax - this.discountAmount;
    },
  },
  mounted() {
    try {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      this.latestOrder = orders[orders.length - 1] || { items: [] };
    } catch (error) {
      console.error('Error loading orders from localStorage:', error);
      this.latestOrder = { items: [] };
    }
  },
  methods: {
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
    returnToHome() {
      this.$router.push('/products');
    },
  },
};
</script>
