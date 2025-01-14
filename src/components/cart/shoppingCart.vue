<template>
  <div class="font-sans">
    <div class="grid lg:grid-cols-3 gap-10 p-4">
      <div class="lg:col-span-2 bg-white divide-y">
        <div v-for="(item, index) in cartItems" :key="item.id" class="flex items-start max-sm:flex-col gap-4 py-4">
          <div class="w-32 h-full shrink-0">
            <img :src="item.image" class="w-full aspect-[112/149] object-contain" />
          </div>

          <div class="flex items-start gap-4 w-full">
            <div>
              <h3 class="text-base font-bold text-gray-800 mb-1">{{ item.name }}</h3>
              <div class="space-y-1">
                <h6 class="text-sm text-gray-800">Price: <strong class="ml-2">{{ formatCurrency(item.price) }}</strong></h6>
                <h6 class="text-sm text-gray-800">Quantity: <strong class="ml-2">{{ item.quantity }}</strong></h6>
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

      <div class="shadow-md p-6 lg:sticky lg:top-0 h-max">
        <h3 class="text-lg font-bold text-gray-800 border-b pb-4">Order Summary</h3>

        <ul class="text-gray-800 divide-y mt-4">
          <li class="flex flex-wrap gap-4 text-sm py-3">Subtotal <span class="ml-auto font-bold">{{ formatCurrency(subtotal) }}</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3">Shipping <span class="ml-auto font-bold">{{ formatCurrency(shipping) }}</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3">Tax <span class="ml-auto font-bold">{{ formatCurrency(tax) }}</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3">Discount <span class="ml-auto font-bold">-{{ formatCurrency(discountAmount) }}</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3 font-bold">Total <span class="ml-auto">{{ formatCurrency(total) }}</span></li>
        </ul>

        <div class="w-full tracking-wide">
          <div class="flex border border-blue-600 overflow-hidden">
            <input
              v-model="voucher"
              type="text"
              placeholder="Promo code"
              class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              @click="applyVoucher"
              type="button"
              class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white"
            >
              Apply
            </button>
          </div>
        </div>
        <button
          @click="goToCheckout"
          type="button"
          class="mt-4 text-sm px-4 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide"
        >
          Make Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityPrice from '../QuantityPrice.vue';
import RemoveButton from '../buttons/RemoveButton.vue';
import MoveToWishlistButton from '../buttons/MoveToWishlistButton.vue';

export default {
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
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
    goToCheckout() {
      this.$router.push('/checkoutShopping');
    },
    applyVoucher() {
      if (this.voucher === 'SAVE10') {
        this.discountAmount = Math.min(10, this.subtotal * 0.1);
      } else {
        this.discountAmount = 0;
        alert('Invalid voucher code');
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
