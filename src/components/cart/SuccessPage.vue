<template>
    <div class="flxe h-[40rem] w-[40rem] mx-auto mb-4 m-4 p-4 bg-blue-100 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-center mb-4">Thank you! 🎉</h1>
      <h2 class="text-xl font-semibold text-center mb-6">Your order has been received</h2>
      
      <div class="flex justify-center mb-6">
        <img src="/img/Cart/product4.png" alt="Headphones" class="w-16 h-16 mx-2" />
        <img src="/img/Cart/product2.png" alt="Watch" class="w-16 h-16 mx-2" />
        <img src="/img/Cart/product3.png" alt="Ring" class="w-16 h-16 mx-2" />
        <img src="/img/Cart/product3.png" alt="Ring" class="w-16 h-16 mx-2" />
      </div>
  
      <div class="border-t border-gray-200 pt-4">
        <div class="flex justify-between mb-2">
          <span>Order code:</span>
          <span>#0123_45678</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Date:</span>
          <span>October 19, 2023</span>
        </div>
        <div class="flex justify-between mb-4">
          <span>Total:</span>
          <span>$1,345.00</span>
        </div>
        <div class="flex justify-between mb-4">
          <span>Payment method:</span>
          <span>Credit Card</span>
        </div>
      </div>
  
      <div class="mt-4">
        <button @click="viewPurchaseHistory" class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Purchase History
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      viewPurchaseHistory() {
        // Implement the logic to view purchase history
        alert("Viewing purchase history...");
      },
    },
  };
  </script>
  
  <style scoped></style>