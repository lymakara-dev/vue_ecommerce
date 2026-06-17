<template>
  <div class="mx-4 flex flex-col gap-8 py-10 sm:mx-6 lg:mx-8">
    <ol class="mx-auto flex w-full max-w-2xl items-center">
      <li class="flex flex-1 items-center">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
          <CheckIcon class="h-5 w-5" />
        </span>
        <span class="ml-2 hidden text-sm font-semibold text-slate-900 sm:inline">Cart</span>
        <span class="ml-2 h-0.5 flex-1 bg-primary-200 sm:ml-3"></span>
      </li>
      <li class="flex flex-1 items-center">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
          <ShoppingCartIcon class="h-5 w-5" />
        </span>
        <span class="ml-2 hidden text-sm font-semibold text-slate-900 sm:inline">Checkout</span>
        <span class="ml-2 h-0.5 flex-1 bg-slate-200 sm:ml-3"></span>
      </li>
      <li class="flex items-center">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
          <CheckCircleIcon class="h-5 w-5" />
        </span>
        <span class="ml-2 hidden text-sm font-semibold text-slate-400 sm:inline">Order Complete</span>
      </li>
    </ol>

    <form class="mx-auto flex w-full max-w-2xl flex-col gap-6" @submit.prevent="handleSubmit">
      <div class="card p-6">
        <h2 class="mb-5 text-lg font-bold text-slate-900">Contact Information</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="first-name" class="mb-1.5 block text-sm font-semibold text-slate-700">First name</label>
            <input required type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Your First Name" class="input-field" />
          </div>
          <div>
            <label for="last-name" class="mb-1.5 block text-sm font-semibold text-slate-700">Last name</label>
            <input required type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Your Last Name" class="input-field" />
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="mb-1.5 block text-sm font-semibold text-slate-700">Email</label>
            <input required type="email" name="email" id="email" autocomplete="email" placeholder="Your Email Address" class="input-field" />
          </div>
          <div class="sm:col-span-2">
            <label for="phone" class="mb-1.5 block text-sm font-semibold text-slate-700">Phone number</label>
            <input required type="tel" name="phone" id="phone" autocomplete="tel" placeholder="Your Phone Number" class="input-field" />
          </div>
        </div>
      </div>

      <div class="card p-6">
        <h2 class="mb-5 text-lg font-bold text-slate-900">Shipping Address</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label for="address" class="mb-1.5 block text-sm font-semibold text-slate-700">Address</label>
            <input required type="text" name="address" id="address" autocomplete="street-address" placeholder="Input Your Address" class="input-field" />
          </div>
          <div class="sm:col-span-2">
            <label for="country" class="mb-1.5 block text-sm font-semibold text-slate-700">Country</label>
            <select required name="country" id="country" class="input-field">
              <option value="" disabled selected>Select Your Country</option>
              <option value="AUS">Australia</option>
              <option value="CAN">Canada</option>
              <option value="KHM">Cambodia</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label for="city" class="mb-1.5 block text-sm font-semibold text-slate-700">Town/City</label>
            <input required type="text" name="city" id="city" autocomplete="address-level2" placeholder="Input Your Town or City" class="input-field" />
          </div>
          <div>
            <label for="state" class="mb-1.5 block text-sm font-semibold text-slate-700">State</label>
            <input required type="text" name="state" id="state" autocomplete="address-level1" placeholder="State" class="input-field" />
          </div>
          <div>
            <label for="zip-code" class="mb-1.5 block text-sm font-semibold text-slate-700">Zip Code</label>
            <input required type="text" name="zip-code" id="zip-code" autocomplete="postal-code" placeholder="Zip Code" class="input-field" />
          </div>
        </div>
      </div>

      <div class="card p-6">
        <h2 class="mb-5 text-lg font-bold text-slate-900">Payment Information</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="card-number" class="mb-1.5 block text-sm font-semibold text-slate-700">Card Number</label>
            <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" class="input-field" />
          </div>
          <div>
            <label for="expiration-date" class="mb-1.5 block text-sm font-semibold text-slate-700">Expiration Date</label>
            <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" class="input-field" />
          </div>
          <div>
            <label for="cvv" class="mb-1.5 block text-sm font-semibold text-slate-700">CVV</label>
            <input type="text" name="cvv" id="cvv" placeholder="000" class="input-field" />
          </div>
          <div>
            <label for="card-holder" class="mb-1.5 block text-sm font-semibold text-slate-700">Card Holder</label>
            <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" class="input-field" />
          </div>
        </div>

        <button type="submit" class="btn-primary mt-6 w-full">Place Order</button>
      </div>
    </form>
  </div>
</template>

<script>
import { CheckIcon, ShoppingCartIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";
import { useCartStore } from "@/modules/cart/store/cart.store";
import { useToastStore } from "@/shared/store/toast.store";

export default {
  name: "CheckoutView",
  components: {
    CheckIcon,
    ShoppingCartIcon,
    CheckCircleIcon,
  },
  data() {
    return { cart: useCartStore(), toast: useToastStore() };
  },
  methods: {
    handleSubmit() {
      if (!this.cart.items.length) {
        this.toast.error("Your cart is empty.");
        this.$router.push("/products");
        return;
      }

      // Complete the current order
      this.cart.completeOrder();

      // Keep the legacy ShoppingCart view in sync with the cleared cart
      localStorage.removeItem("shoppingCart");

      this.toast.success("Order placed successfully! Thank you for your purchase.");

      // Redirect to the order confirmation page
      this.$router.push({ name: 'OrderComplete' });
    },
  },
};
</script>