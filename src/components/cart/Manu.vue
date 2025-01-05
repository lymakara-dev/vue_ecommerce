<template>
    <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <!-- Progress Steps -->
      <div class="flex justify-between mb-6">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">1</div>
          <span class="ml-2 font-semibold">Shopping cart</span>
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center">2</div>
          <span class="ml-2 text-gray-400">Checkout details</span>
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center">3</div>
          <span class="ml-2 text-gray-400">Order complete</span>
        </div>
        <hr class="border-gray-300 mb-4">
      </div>

    </div>
  </template>
  <script>
import '../../assets/main.css';
</script>
  <style>
  .container {
    align-items: center;
    background-color: #f3f4f6; /* Tailwind gray-100 */
  }
  </style>
