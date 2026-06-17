<template>
  <nav class="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md">
    <div
      class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
    >
      <button
        class="text-xl font-extrabold tracking-tight text-primary-600 transition-colors hover:text-primary-700 sm:text-2xl lg:text-3xl"
        @click="goHome"
      >
        PhoneEdge
      </button>

      <div class="flex items-center gap-3 sm:gap-6">
        <div
          class="hidden items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-primary-600 sm:flex sm:text-base"
        >
          <InformationCircleIcon class="h-5 w-5" />
          <span>Need Help?</span>
        </div>

        <button
          type="button"
          class="group relative flex items-center justify-center rounded-full p-2 text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
          aria-label="View cart"
          @click="goToCart"
        >
          <ShoppingBagIcon class="h-6 w-6 transition-transform group-hover:scale-110" />
          <span
            v-if="cart.itemCount > 0"
            :key="cart.itemCount"
            class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-500 px-1 text-xs font-bold text-white animate-pop"
          >
            {{ cart.itemCount }}
          </span>
        </button>

        <button type="button" class="btn-primary text-sm sm:text-base" @click="toggleAuth">
          {{ isLoggedIn ? "Sign Out" : "Sign In" }}
        </button>
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
import { useCartStore } from "@/modules/cart/store/cart.store";
import { inject } from "vue";

export default {
  name: "Navbar",
  components: {
    ShoppingBagIcon,
    InformationCircleIcon,
  },

  setup() {
    const router = useRouter();
    const isLoggedIn = inject("isLoggedIn");
    const handleSignOut = inject("handleSignOut");
    const cart = useCartStore();

    return { router, isLoggedIn, handleSignOut, cart };
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

    goHome() {
      this.router.push("/products");
    },
  },
};
</script>
