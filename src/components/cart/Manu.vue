<template>
  <div class="mx-auto w-[60rem] h-[4rem] p-4 bg-blue-100 rounded-lg shadow-md">
    <div class="flex justify-between mb-6">
      <!-- Shopping Cart -->
      <div class="flex items-center">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full"
          :class="currentStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'"
        >
          <span v-if="currentStep >= 1">✔</span>
          <span v-else>1</span>
        </div>
        <router-link
          to="/Cart"
          class="ml-2 font-semibold hover:bg-blue-200 rounded-lg"
          :class="currentStep >= 1 ? '' : 'text-gray-400'"
          @click="goToStep(1)"
        >
          Shopping cart
        </router-link>
      </div>

      <!-- Checkout Details -->
      <div class="flex items-center">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full"
          :class="currentStep >= 2 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'"
        >
          <span v-if="currentStep >= 2">✔</span>
          <span v-else>2</span>
        </div>
        <router-link
          to="/Contact"
          class="ml-2 font-semibold hover:bg-blue-200 rounded-lg"
          :class="currentStep >= 2 ? 'text-green-500' : 'text-gray-400'"
          @click="goToStep(2)"
        >
          Checkout details
        </router-link>
      </div>

      <!-- Order Complete -->
      <div class="flex items-center">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full"
          :class="currentStep >= 3 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'"
        >
          <span v-if="currentStep >= 3">✔</span>
          <span v-else>3</span>
        </div>
        <router-link
          to="/Success"
          class="ml-2 font-semibold hover:bg-blue-200 rounded-lg"
          :class="currentStep >= 3 ? 'text-green-500' : 'text-gray-400'"
          @click="goToStep(3)"
        >
          Order complete
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/main.css';

export default {
  data() {
    return {
      currentStep: 1, // Initialize to 1 for the Shopping Cart step
    };
  },
  methods: {
    goToStep(step) {
      this.currentStep = step;

      // Add navigation logic
      if (step === 1) {
        this.$router.push('/Cart');
      } else if (step === 2) {
        this.$router.push('/Contact');
      } else if (step === 3) {
        this.$router.push('/Success');
      }
    },
  },
};
</script>

<style>
.container {
  align-items: center;
  background-color: #f3f4f6; /* Tailwind gray-100 */
}
</style>
