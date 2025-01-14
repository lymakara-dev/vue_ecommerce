<template>
  <nav class="bg-white p-6">
    <div class="m-auto w-full flex flex-row justify-between items-center">
      <div class="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
        PhoneEdge
      </div>
      <div class="flex space-x-4">
        <button @click="goToRoute('/home')" class="flex items-center space-x-1">
          <HomeIcon class="h-5 w-5" />
          <span>Home</span>
        </button>
        <button @click="goToRoute('/shoppingCart')" class="flex items-center space-x-1">
          <ShoppingBagIcon class="h-5 w-5" />
          <span>Cart</span>
        </button>
        <button @click="goToRoute('/about')" class="flex items-center space-x-1">
          <InformationCircleIcon class="h-5 w-5" />
          <span>About Us</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import {
  HomeIcon,
  ShoppingBagIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "Navbar2",
  components: {
    HomeIcon,
    ShoppingBagIcon,
    InformationCircleIcon,
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>
