<template>
  <div class="mx-4 flex flex-col gap-8 pb-16 pt-6 sm:mx-6 lg:mx-8 lg:flex-row lg:items-start">
    <div class="flex flex-1 flex-col divide-y divide-slate-100">
      <div
        v-if="!cartItems.length"
        class="flex flex-col items-center gap-3 py-16 text-center"
      >
        <p class="text-base font-semibold text-slate-900">Your cart is empty</p>
        <router-link to="/products" class="btn-primary mt-2">Browse Products</router-link>
      </div>

      <div
        v-for="(item, index) in cartItems"
        :key="item.id"
        class="flex animate-fade-in-up flex-col gap-4 py-5 sm:flex-row sm:items-start"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <div class="card flex h-28 w-full shrink-0 items-center justify-center bg-slate-50 p-3 sm:w-24">
          <img :src="item.image" class="max-h-full max-w-full object-contain" />
        </div>

        <div class="flex w-full items-start justify-between gap-4">
          <div>
            <h3 class="mb-1 text-base font-bold text-slate-900">{{ item.name }}</h3>
            <div class="space-y-1 text-sm text-slate-500">
              <p>Price: <strong class="ml-1 text-slate-700">{{ formatCurrency(item.price) }}</strong></p>
              <p>Quantity: <strong class="ml-1 text-slate-700">{{ item.quantity }}</strong></p>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
              <RemoveButton @remove="removeItem(index)" />
              <MoveToWishlistButton />
            </div>
          </div>
          <QuantityPrice
            :quantity="item.quantity"
            :product="item"
            @update:quantity="updateQuantity(index, $event)"
          />
        </div>
      </div>
    </div>

    <div class="card flex h-max w-full flex-col gap-4 p-6 lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
      <h3 class="text-lg font-bold text-slate-900">Order Summary</h3>

      <ul class="divide-y divide-slate-100 text-sm text-slate-600">
        <li class="flex justify-between py-3">Subtotal <span class="font-semibold text-slate-900">{{ formatCurrency(subtotal) }}</span></li>
        <li class="flex justify-between py-3">Shipping <span class="font-semibold text-slate-900">{{ formatCurrency(shipping) }}</span></li>
        <li class="flex justify-between py-3">Tax <span class="font-semibold text-slate-900">{{ formatCurrency(tax) }}</span></li>
        <li class="flex justify-between py-3">Discount <span class="font-semibold text-slate-900">-{{ formatCurrency(discountAmount) }}</span></li>
        <li class="flex justify-between py-3 text-base font-bold text-slate-900">Total <span>{{ formatCurrency(total) }}</span></li>
      </ul>

      <div class="flex overflow-hidden rounded-xl border border-slate-200 transition focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100">
        <input
          v-model="voucher"
          type="text"
          placeholder="Promo code"
          class="w-full border-0 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
        />
        <button
          @click="applyVoucher"
          type="button"
          class="px-5 text-sm font-semibold text-white bg-primary-600 transition-colors hover:bg-primary-700"
        >
          Apply
        </button>
      </div>

      <button @click="goToCheckout" type="button" class="btn-primary w-full">
        Make Payment
      </button>
    </div>
  </div>
</template>

<script>
import QuantityPrice from '@/shared/components/QuantityPrice.vue';
import RemoveButton from '@/shared/components/buttons/RemoveButton.vue';
import MoveToWishlistButton from '@/shared/components/buttons/MoveToWishlistButton.vue';
import { useToastStore } from '@/shared/store/toast.store';

export default {
  name: 'ShoppingCartView',
  components: {
    QuantityPrice,
    RemoveButton,
    MoveToWishlistButton,
  },
  data() {
    return {
      cartItems: [], // Holds the cart data
      shipping: 4.0,
      taxRate: 0.1,
      voucher: '',
      discountAmount: 0,
      toast: useToastStore(),
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((sum, item) => {
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
  methods: {
    updateQuantity(index, newQuantity) {
      if (newQuantity > 0) {
        this.cartItems[index].quantity = newQuantity;
        localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems));
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems));
      this.toast.info('Item removed from cart.');
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
    goToCheckout() {
      this.$router.push('/checkout');
    },
    applyVoucher() {
      if (this.voucher === 'SAVE10') {
        this.discountAmount = Math.min(10, this.subtotal * 0.1);
        this.toast.success('Voucher applied! Discount added to your order.');
      } else {
        this.discountAmount = 0;
        this.toast.error('Invalid voucher code.');
      }
    },
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  },
  watch: {
    cartItems: {
      handler() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems));
      },
      deep: true,
    },
  },
};
</script>
