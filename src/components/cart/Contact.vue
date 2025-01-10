<template>
    <div class="max-w-4xl mx-auto p-6 bg-blue-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">First Name</label>
          <input v-model="form.firstName" type="text" placeholder="First name" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Last Name</label>
          <input v-model="form.lastName" type="text" placeholder="Last name" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input v-model="form.phone" type="text" placeholder="Phone number" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Email Address</label>
          <input v-model="form.email" type="email" placeholder="Your Email" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
      </div>
  
      <h2 class="text-2xl font-bold mb-4">Shipping Address</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Street Address</label>
          <input v-model="form.streetAddress" type="text" placeholder="Street Address" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Country</label>
          <select v-model="form.country" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="">Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Town / City</label>
          <input v-model="form.city" type="text" placeholder="Town / City" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">State</label>
          <input v-model="form.state" type="text" placeholder="State" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Zip Code</label>
          <input v-model="form.zip" type="text" placeholder="Zip Code" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
      </div>
  
      <h2 class="text-2xl font-bold mb-4">Payment Method</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="flex items-center">
          <input v-model="form.paymentMethod" type="radio" id="card" value="card" class="mr-2" />
          <label for="card" class="text-sm font-medium text-gray-700">Pay by Card Credit</label>
        </div>
        <div class="flex items-center">
          <input v-model="form.paymentMethod" type="radio" id="paypal" value="paypal" class="mr-2" />
          <label for="paypal" class="text-sm font-medium text-gray-700">Paypal</label>
        </div>
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700">Card Number</label>
          <input v-model="form.cardNumber" type="text" placeholder="1234 1234 1234 1234" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label class="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input v-model="form.expirationDate" type="text" placeholder="MM/YYYY" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label class="block text-sm font-medium text-gray-700">CVC</label>
          <input v-model="form.cvc" type="text" placeholder="CVC" class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
      </div>
  
      <button @click="placeOrder" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Place Order</button>
    </div>

  <div class="max-w-lg mx-3 md:mt-30 p-10 bg-white rounded-lg shadow-md ">
    <h2 class="text-2xl font-bold mb-6 text-center">Order Summary</h2>
      
      <div v-for="item in items" :key="item.id" class="flex justify-between items-center border-b pb-4 mb-4">
        <div class="flex items-center">
          <img :src="item.image" alt="" class="w-16 h-16 rounded mr-4" />
          <div>
            <p class="text-lg font-semibold">{{ item.name }}</p>
            <p class="text-gray-600">Color: {{ item.color }}</p>
            <div class="flex items-center mt-1">
              <button @click="decrement(item.id)" class="bg-gray-200 rounded px-2 py-1">-</button>
              <span class="mx-2">{{ item.quantity }}</span>
              <button @click="increment(item.id)" class="bg-gray-200 rounded px-2 py-1">+</button>
            </div>
          </div>
        </div>
        
        <p class="font-semibold">${{ item.price * item.quantity }}</p>
      </div>
  
      <div class="flex justify-between items-center mt-4">
        <input 
          type="text" 
          v-model="discountCode" 
          placeholder="Input Discount Code" 
          class="border rounded-md p-2 w-full mr-2" 
        />
        <button 
          @click="applyDiscount" 
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>
  
      <div class="flex justify-between items-center mt-4">
        <p class="font-semibold">Shipping:</p>
        <p>Free</p>
      </div>
      <div class="flex justify-between items-center mt-2">
        <p class="font-semibold">Subtotal:</p>
        <p>${{ subtotal }}</p>
      </div>
      <div class="flex justify-between items-center mt-2">
        <p class="font-semibold">Total:</p>
        <p class="text-xl font-bold">${{ total }}</p>
      </div>
  
      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Upload a Picture</label>
        <input 
          type="file" 
          @change="handleFileUpload" 
          class="border rounded-md p-2 w-full" 
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          streetAddress: '',
          country: '',
          city: '',
          state: '',
          zip: '',
          paymentMethod: '',
          cardNumber: '',
          expirationDate: '',
          cvc: '',
        },

        items: [
          { id: 1, name: 'Headphones', color: 'Black', price: 38, quantity: 1, image: '/img/Cart/product2.png' },
          { id: 2, name: 'Tray Table', color: 'Red', price: 38, quantity: 1, image: '/img/Cart/product3.png' },
          { id: 3, name: 'Table Lamp', color: 'Gold', price: 39, quantity: 1, image: '/img/Cart/product4.png' },
        ],
        discountCode: '',
        discountAmount: 25,
      };
    },
    computed: {
      subtotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      total() {
        const discount = this.discountCode === 'JENKATMW' ? this.discountAmount : 0;
        return this.subtotal - discount;
      },
    },
    methods: {
      placeOrder() {
        console.log(this.form);
        // Add your order processing logic here
        alert('Order placed successfully!');
      },

      increment(id) {
        const item = this.items.find(item => item.id === id);
        if (item) item.quantity++;
      },
      decrement(id) {
        const item = this.items.find(item => item.id === id);
        if (item && item.quantity > 1) item.quantity--;
      },
      applyDiscount() {
        alert(`Discount code ${this.discountCode} applied!`);
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          console.log('Uploaded file:', file);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add any additional styles here */
  </style>