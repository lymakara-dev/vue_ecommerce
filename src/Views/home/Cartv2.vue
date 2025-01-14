<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.quantity }}
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <div>
      <h2>Add Item</h2>
      <input v-model="newItem.name" placeholder="Item Name" />
      <input
        v-model.number="newItem.quantity"
        type="number"
        placeholder="Quantity"
      />
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Cart data
      newItem: {
        name: "",
        quantity: 1,
      },
    };
  },
  methods: {
    async loadCart() {
      try {
        // Load cart data from JSON file or localStorage
        const response = await fetch("/cart.json");
        const data = await response.json();
        this.cart = JSON.parse(localStorage.getItem("cart"));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    },
    saveCart() {
      // Save cart data to localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addToCart() {
      if (this.newItem.name.trim() === "" || this.newItem.quantity <= 0) {
        alert("Please enter a valid item name and quantity.");
        return;
      }
      this.cart.push({ ...this.newItem });
      this.newItem.name = "";
      this.newItem.quantity = 1;
      this.saveCart();
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.saveCart();
    },
  },
  mounted() {
    this.loadCart();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
