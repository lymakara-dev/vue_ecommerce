<template>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />

    <div class="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div v-for="promotion in promotionsData" :key="promotion.id">
        <PromotionCard
          :title="promotion.title"
          :description="promotion.description"
          :image="promotion.image"
          :alt="promotion.title"
        ></PromotionCard>
      </div>
    </div>

    <div class="flex flex-row mx-8 gap-8">
      <div class="grow flex flex-col gap-2">
        <div
          class="cursor-pointer border border-gray-300 p-4 rounded-md text-center shadow-md hover:bg-gray-100"
          :class="{ 'bg-gray-200': selectedCategory === 'All' }"
          @click="selectCategory('All')"
        >
          <p class="font-bold">All</p>
        </div>
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
          >
          </CategoryCard>
        </div>
      </div>
      <router-view></router-view>
      <div>
        <RouteStatus></RouteStatus>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="product in filteredProducts" :key="product.id">
            <ProductCard
              :image="product.image"
              :alt="product.name"
              :name="product.name"
              :description="product.description"
              :rating-point="product.rating"
              :discount-percentage="product.discountPercentage"
              :price="product.price"
              :productId="product.id"
            ></ProductCard>
          </div>
        </div>
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
import ProductDetailPage from "./ProductDetailPage.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    RouteStatus,
    PromotionCard,
    CategoryCard,
    ProductCard,
    ProductDetailPage,
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
