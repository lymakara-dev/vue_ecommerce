// cart.js (store)
import { reactive } from "vue";

const cart = reactive({
  items: JSON.parse(localStorage.getItem("currentCart") || '[]'),
  orders: JSON.parse(localStorage.getItem("orders") || '[]'),
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
    localStorage.setItem("currentCart", JSON.stringify(this.items));
  },
  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    localStorage.setItem("currentCart", JSON.stringify(this.items));
  },
  clearCart() {
    this.items = [];
    localStorage.setItem("currentCart", JSON.stringify(this.items));
  },
  completeOrder() {
    const newOrder = {
      id: Date.now(),
      items: [...this.items],
      total: this.total,
      date: new Date().toISOString(),
    };
    this.orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(this.orders));
    this.clearCart();
  },
});

export default cart;
