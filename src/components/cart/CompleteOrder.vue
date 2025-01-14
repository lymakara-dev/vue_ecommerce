<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
      <!-- Success Icon -->
      <div class="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
        <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <!-- Main Content -->
      <h1 class="mb-6 text-4xl font-extrabold text-green-600">
        Payment Successful!
      </h1>
      <p class="mb-8 text-xl text-gray-700">
        Thank you for your purchase.
      </p>

<!-- Order Items -->
<div v-if="latestOrder.items && latestOrder.items.length" class="p-6 mb-8 rounded-lg bg-blue-50">
  <h2 class="text-xl font-bold mb-4">Order Items</h2>
  <div v-for="item in latestOrder.items" :key="item.id" class="flex items-center gap-4 mb-4 p-4 bg-white rounded-lg shadow-md">
    <img :src="item.image" alt="Product image" class="w-16 h-16 object-contain" />
    <div>
      <h3 class="font-semibold text-lg">{{ item.name }}</h3>
      <p class="text-gray-700">Price: {{ formatCurrency(item.price) }}</p>
      <p class="text-gray-700">Discount: {{ item.discountPercentage || 0 }}%</p>
      <p class="text-gray-700">Quantity: {{ item.quantity }}</p>
    </div>
  </div>
</div>
<div v-else class="text-gray-500">No items in your order.</div>

      <!-- Order Summary -->
      <div class="pt-8 mt-8 border-t border-gray-100">
        <h3 class="text-lg font-bold text-gray-800 border-b pb-4">Order Summary</h3>
        <ul class="text-gray-800 divide-y mt-4">
          <li class="flex flex-wrap gap-4 text-sm py-3">
            Subtotal <span class="ml-auto font-bold">{{ formatCurrency(subtotal) }}</span>
          </li>
          <li class="flex flex-wrap gap-4 text-sm py-3">
            Shipping <span class="ml-auto font-bold">{{ formatCurrency(shipping) }}</span>
          </li>
          <li class="flex flex-wrap gap-4 text-sm py-3">
            Tax <span class="ml-auto font-bold">{{ formatCurrency(tax) }}</span>
          </li>
          <li class="flex flex-wrap gap-4 text-sm py-3">
            Discount <span class="ml-auto font-bold">-{{ formatCurrency(discountAmount) }}</span>
          </li>
          <li class="flex flex-wrap gap-4 text-sm py-3 font-bold">
            Total <span class="ml-auto">{{ formatCurrency(total) }}</span>
          </li>
        </ul>
      </div>

      <!-- Back to Home Button -->
      <div class="mt-12">
        <button
          @click="returnToHome"
          class="inline-block px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Return to Home Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
