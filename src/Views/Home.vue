<template>
  <router-link to="products">Product List</router-link>
  <Categories
    :select-category="handleSelectedCategory"
    :selected-category="selectedCategory"
  ></Categories>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Categories from "./home/Categories.vue";

export default {
  components: {
    Categories,
  },
  data() {
    return {
      selectedCategory: "All",
    };
  },

  methods: {
    handleSelectedCategory(category) {
      this.selectedCategory = this.selectedCategory = category;
      console.log("selected categeory: ", category);
    },
  },
};
</script>
