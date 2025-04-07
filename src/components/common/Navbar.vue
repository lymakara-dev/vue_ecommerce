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
        <div class="basket relative" @click="goToCart">
          <span class="text-3xl transform scaleX(-1)">🛒</span>
          <span
            v-if="cart.itemCount > 0"
            class="cart-count absolute top-0 left-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
            >{{ cart.itemCount }}</span
          >
        </div>
        <div>
          <div>
            <button
              type="submit"
              class="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-sm md:text-base lg:text-lg xl:text-xl"
              @click="toggleAuth"
            >
              {{ isLoggedIn ? "Sign Out" : "Sign In" }}
            </button>
          </div>
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
import { useRouter } from "vue-router";
import cart from "@/stores/cart";
import { inject } from "vue";

export default {
  name: "Navbar",
  components: {
    ShoppingBagIcon,
    InformationCircleIcon,
  },

  data() {
    return {
      cart,
    };
  },

  setup() {
    const router = useRouter();
    const isLoggedIn = inject("isLoggedIn");
    const handleSignOut = inject("handleSignOut");

    return { router, isLoggedIn, handleSignOut };
  },

  methods: {
    toggleAuth() {
      if (this.isLoggedIn) {
        this.handleSignOut();
      } else {
        this.$router.push("/auth/signin");
      }
    },

    goToCart() {
      this.router.push({ name: "Cart" });
    },
  },
};
</script>
