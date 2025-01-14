<template>
  <div class="bg-white px-6 py-12 sm:py-24 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <ol class="items-center flex w-full text-center text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
        <li class="after:border-1 flex items-center text-green-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-green-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <CheckIcon class="me-2 h-6 w-6 sm:h-7 sm:w-7" />
            Cart
          </span>
        </li>
        <li class="after:border-1 flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <ShoppingCartIcon class="me-2 h-6 w-6 sm:h-7 sm:w-7" />
            Checkout
          </span>
        </li>
        <li class="flex shrink-0 items-center text-gray-700">
          <CheckCircleIcon class="me-2 h-6 w-6 sm:h-7 sm:w-7" />
          Order Complete
        </li>
      </ol>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-lg font-medium mb-6">Contact Information</h2>
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input required type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Your First Name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input required type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Your Last Name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input required type="email" name="email" id="email" autocomplete="email" placeholder="Your Email Address" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <input required type="tel" name="phone" id="phone" autocomplete="tel" placeholder="Your Phone Number" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 class="text-lg font-medium mb-6">Shipping Address</h2>
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label for="address" class="block text-sm font-semibold leading-6 text-gray-900">Address</label>
              <div class="mt-2.5">
                <input required type="text" name="address" id="address" autocomplete="street-address" placeholder="Input Your Address" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="country" class="block text-sm font-semibold leading-6 text-gray-900">Country</label>
              <div class="mt-2.5">
                <select required name="country" id="country" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 h-[42px]">
                  <option value="" disabled selected>Select Your Country</option>
                  <option value="AUS">Australia</option>
                  <option value="CAN">Canada</option>
                  <option value="KHM">Cambodia</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <!-- Add more countries as needed -->
                </select>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="city" class="block text-sm font-semibold leading-6 text-gray-900">Town/City</label>
              <div class="mt-2.5">
                <input required type="text" name="city" id="city" autocomplete="address-level2" placeholder="Input Your Town or City" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="state" class="block text-sm font-semibold leading-6 text-gray-900">State</label>
              <div class="mt-2.5">
                <input required type="text" name="state" id="state" autocomplete="address-level1" placeholder="State" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="zip-code" class="block text-sm font-semibold leading-6 text-gray-900">Zip Code</label>
              <div class="mt-2.5">
                <input required type="text" name="zip-code" id="zip-code" autocomplete="postal-code" placeholder="Zip Code" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 class="text-lg font-medium mb-6">Payment Information</h2>
          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-2 sm:col-span-1">
              <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
              <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
              <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
              <input type="text" name="cvv" id="cvv" placeholder="000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
              <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
          </div>
          <div class="mt-8">
            <button type="submit" class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Place Order</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { CheckIcon, ShoppingCartIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";
import cart from "@/stores/cart";

export default {
  name: "CheckoutShopping",
  components: {
    CheckIcon,
    ShoppingCartIcon,
    CheckCircleIcon,
  },
  methods: {
    handleSubmit() {
      // Complete the current order
      cart.completeOrder();
      
      // Redirect to the CompleteOrder page
      this.$router.push({ name: 'CompleteOrder' });
    },
  },
};
</script>