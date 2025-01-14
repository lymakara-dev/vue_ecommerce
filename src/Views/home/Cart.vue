<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
    <div v-if="cart.items.length > 0">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between items-center border-b py-2"
      >
        <div>
          <h3 class="font-semibold">{{ item.name }}</h3>
          <p>Price: ${{ item.price.toFixed(2) }}</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
        <button
          class="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
          @click="removeFromCart(item.id)"
        >
          Remove
        </button>
      </div>
      <div class="mt-4">
        <p class="font-bold">Total: ${{ cart.total.toFixed(2) }}</p>
        <button
          class="bg-green-500 text-white p-2 rounded-md mt-2 hover:bg-green-600"
          @click="checkout"
        >
          Checkout
        </button>
      </div>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script>
import cart from "@/stores/cart";

export default {
  name: "Cart",
  data() {
    return { cart };
  },
  methods: {
    removeFromCart(productId) {
      cart.removeItem(productId);
    },
    checkout() {
      alert("Checkout successful!");
      cart.clearCart();
    },
  },
};
</script>
