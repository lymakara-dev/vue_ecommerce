<template>
  <div class="flex flex-row">
    <Categories
      :select-category="handleSelectedCategory"
      :selected-category="selectedCategory"
    ></Categories>
    <div>
      <router-view :selected-category="selectedCategory"></router-view>
    </div>
  </div>
</template>

<script>
import Categories from "./home/Categories.vue";
import ProductsList from "./home/ProductsList.vue";

export default {
  components: {
    Categories,
    ProductsList,
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
