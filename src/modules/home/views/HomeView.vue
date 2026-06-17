<template>
  <div class="flex flex-col gap-8 pb-12">
    <HeroSection></HeroSection>

    <section class="mx-4 sm:mx-6 lg:mx-8">
      <h2 class="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
        Special Offers
      </h2>
      <PromotionsCarousel></PromotionsCarousel>
    </section>

    <div class="mx-4 flex flex-col gap-8 sm:mx-6 lg:mx-8 lg:flex-row">
      <CategorySidebar
        :select-category="handleSelectedCategory"
        :selected-category="selectedCategory"
      ></CategorySidebar>
      <div class="grow">
        <router-view :selected-category="selectedCategory"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "@/shared/components/HeroSection.vue";
import CategorySidebar from "@/modules/product/components/CategorySidebar.vue";
import PromotionsCarousel from "@/modules/promotion/components/PromotionsCarousel.vue";

export default {
  name: "HomeView",
  components: {
    CategorySidebar,
    PromotionsCarousel,
    HeroSection,
  },
  data() {
    return {
      selectedCategory: "All",
    };
  },

  methods: {
    handleSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
