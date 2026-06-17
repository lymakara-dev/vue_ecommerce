<template>
  <div class="mx-4 flex flex-col gap-6 pb-16 pt-6 sm:mx-6 lg:mx-8">
    <h1 class="text-xl font-bold text-slate-900 sm:text-2xl">Your Cart</h1>

    <div v-if="cart.items.length > 0" class="flex flex-col gap-8 lg:flex-row lg:items-start">
      <div class="flex flex-1 flex-col gap-3">
        <div
          v-for="(item, index) in cart.items"
          :key="item.id"
          class="card flex animate-fade-in-up items-center gap-4 p-4"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2">
            <img :src="item.image" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-slate-900">{{ item.name }}</h3>
            <p class="text-sm text-slate-500">
              ${{ item.price.toFixed(2) }} &middot; Qty {{ item.quantity }}
            </p>
            <span v-if="item.discountPercentage" class="badge-accent mt-1">
              -{{ item.discountPercentage }}%
            </span>
          </div>
          <button
            class="btn-secondary text-red-600 hover:border-red-200 hover:bg-red-50"
            @click="removeFromCart(item.id)"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="card flex h-max w-full flex-col gap-4 p-6 lg:w-80 lg:shrink-0">
        <h2 class="text-lg font-bold text-slate-900">Order Summary</h2>
        <div class="flex items-center justify-between text-sm text-slate-600">
          <span>Total</span>
          <span class="text-lg font-bold text-slate-900">${{ cart.total.toFixed(2) }}</span>
        </div>
        <button class="btn-primary w-full" @click="checkout">Checkout</button>
      </div>
    </div>

    <div v-else class="flex flex-col items-center gap-3 py-16 text-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
        <svg class="h-8 w-8 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l3.6-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <p class="text-base font-semibold text-slate-900">Your cart is empty</p>
      <p class="text-sm text-slate-500">Looks like you haven't added anything yet.</p>
      <router-link to="/products" class="btn-primary mt-2">Browse Products</router-link>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/modules/cart/store/cart.store";
import { useToastStore } from "@/shared/store/toast.store";

export default {
  name: "CartView",
  data() {
    return { cart: useCartStore(), toast: useToastStore() };
  },
  methods: {
    removeFromCart(productId) {
      this.cart.removeItem(productId);
      this.toast.info("Item removed from cart.");
    },
    checkout() {
      // Save cart data to localStorage
      localStorage.setItem('shoppingCart', JSON.stringify(this.cart.items));

      // Navigate to the detailed shopping-cart page
      this.$router.push('/shopping-cart');
    },
  },
};
</script>

