<template>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />

    <!-- promotion offer -->
    <div
      class="flex gap-4 overflow-x-auto whitespace-nowrap px-4 py-2 scrollbar-hide scroll-smooth"
    >
      <div
        v-for="promotion in promotionsData"
        :key="promotion.id"
        class="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] flex-shrink-0"
      >
        <PromotionCard
          :title="promotion.title"
          :description="promotion.description"
          :image="promotion.image"
          :alt="promotion.title"
        ></PromotionCard>
      </div>
    </div>

    <div class="flex flex-col md:flex-row mx-4 md:mx-8 gap-4 md:gap-8">
      <!-- Sidebar -->
      <div class="hidden md:flex md:w-1/4 flex-col gap-2 overflow-x-auto">
        <!-- All Category -->
        <div
          class="cursor-pointer border border-gray-300 p-4 rounded-md text-center shadow-md hover:bg-gray-100"
          :class="{ 'bg-gray-200': selectedCategory === 'All' }"
          @click="selectCategory('All')"
        >
          <p class="font-bold">All</p>
        </div>

        <!-- Categories -->
        <div
          v-for="category in categoriesData"
          :key="category.id"
          class="cursor-pointer rounded-md text-center shadow-md hover:bg-gray-100"
          :class="{ 'bg-gray-200': selectedCategory === category.name }"
          @click="selectCategory(category.name)"
        >
          <CategoryCard
            :image="category.image"
            :alt="category.name"
            :category-name="category.name"
          />
        </div>
      </div>

      <!-- Main content (e.g. product list) goes here -->
      <div class="flex-grow">
        <!-- Example content placeholder -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import CategoryCard from "@/components/product/CategoryCard.vue";
import PromotionCard from "@/components/product/PromotionCard.vue";
import RouteStatus from "@/components/RouteStatus.vue";
import promotionsData from "@/stores/promotions";
import productsData from "@/stores/products";
import categoriesData from "@/stores/categories";
import ProductCard from "@/components/product/ProductCard.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    RouteStatus,
    PromotionCard,
    CategoryCard,
    ProductCard,
  },

  data() {
    return {
      promotionsData,
      categoriesData,
      productsData,
      selectedCategory: "All",
    };
  },

  computed: {
    filteredProducts() {
      if (this.selectedCategory === "All") {
        return this.productsData;
      }
      return this.productsData.filter(
        (product) => product.category === this.selectedCategory
      );
    },
  },

  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
