<template>
  <nav class="bg-white p-6">
    <div class="m-auto w-full flex flex-row justify-between items-center">
      <div class="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
        PhoneEdge
      </div>
      <div class="flex flex-row gap-2 items-center">
        <InformationCircleIcon class="h-6 w-6" />
        <div class="text-sm md:text-base lg:text-lg xl:text-xl max-sm:hidden">
          Need Help?
        </div>
        <div>
          <button
            type="submit"
            class="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-sm md:text-base lg:text-lg xl:text-xl"
            @click="goToRoute"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {
  InformationCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/outline";
export default {
  name: "Navbar",
  components: {
    ShoppingBagIcon,
    InformationCircleIcon,
    
  },
  methods: {
    goToRoute() {
      this.$router.push("/signin");
    },
  },
};
</script>
