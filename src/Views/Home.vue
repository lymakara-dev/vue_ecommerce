<template>
  <div class="flex flex-col gap-5">
    <HeroSection></HeroSection>
    <Promotions></Promotions>
    <div class="flex flex-row justify-between gap-8 mx-8">
      <Categories
        :select-category="handleSelectedCategory"
        :selected-category="selectedCategory"
      ></Categories>
      <div class="grow">
        <router-view :selected-category="selectedCategory"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import Categories from "./home/Categories.vue";
import ProductsList from "./home/ProductsList.vue";
import Promotions from "./home/Promotions.vue";

export default {
  components: {
    Categories,
    ProductsList,
    Promotions,
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
      console.log("selected categeory (home): ", category);
    },
  },
};
</script>
