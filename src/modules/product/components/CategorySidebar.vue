<template>
  <aside class="flex w-full flex-col gap-2 lg:w-60 lg:shrink-0">
    <h3 class="px-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
      Categories
    </h3>
    <button
      type="button"
      class="rounded-2xl border p-4 text-left text-sm font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      :class="
        selectedCategory === 'All'
          ? 'border-primary-200 bg-primary-50 text-primary-700'
          : 'border-slate-200 bg-white text-slate-700 hover:border-primary-200'
      "
      @click="selectCategory('All')"
    >
      All Products
    </button>
    <button
      v-for="category in categories"
      :key="category.id"
      type="button"
      class="w-full rounded-2xl border text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      :class="
        selectedCategory === category.name
          ? 'border-primary-200 bg-primary-50'
          : 'border-slate-200 bg-white hover:border-primary-200'
      "
      @click="selectCategory(category.name)"
    >
      <CategoryCard
        :image="category.image"
        :alt="category.name"
        :category-name="category.name"
      >
      </CategoryCard>
    </button>
  </aside>
</template>

<script>
import CategoryCard from "./CategoryCard.vue";
import categories from "../data/categories.js";

export default {
  name: "CategorySidebar",
  components: { CategoryCard },

  props: {
    selectCategory: {
      type: Function,
      required: true,
    },
    selectedCategory: {
      type: String,
      required: true,
    },
  },
  data() {
    return { categories };
  },
};
</script>
