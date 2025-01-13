<template>
  <div class="flex flex-row gap-8">
    <div class="grow flex flex-col gap-2">
      <div
        class="cursor-pointer border border-gray-300 p-4 rounded-md text-center shadow-md hover:bg-gray-100"
        :class="{ 'bg-gray-200': selectedCategory === 'All' }"
        @click="selectCategory('All')"
      >
        <p class="font-bold">All</p>
      </div>
      <div
        v-for="category in categories"
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
  </div>
</template>

<script>
import CategoryCard from "@/components/product/CategoryCard.vue";
import categories from "@/stores/categories";

export default {
  name: "Categories",
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
