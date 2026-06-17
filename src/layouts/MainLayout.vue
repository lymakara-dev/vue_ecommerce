<template>
  <div class="flex min-h-screen flex-col bg-slate-50">
    <Navbar></Navbar>
    <main class="flex-1">
      <div class="relative mx-auto w-full max-w-7xl">
        <PromotionRail side="left"></PromotionRail>
        <PromotionRail side="right"></PromotionRail>
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/shared/components/Footer.vue";
import Navbar from "@/shared/components/Navbar.vue";
import PromotionRail from "@/modules/promotion/components/PromotionRail.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    Footer,
    PromotionRail,
  },
};
</script>
