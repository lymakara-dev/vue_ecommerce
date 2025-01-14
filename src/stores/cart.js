// cart.js (store)
import { reactive } from "vue";

const cart = reactive({
  items: [],
  get total() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
  get itemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  },
  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  },
  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
  },
  clearCart() {
    this.items = [];
  },
});

export default cart;
