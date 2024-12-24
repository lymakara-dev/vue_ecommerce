<template>
  <div class="my-3 text-xl font-semibold text-gray-900 sm:text-2xl">
    Category
  </div>
  <CategoryCard category-name="PowerBank" :image="powerBankImage" />
  <CategoryCard category-name="Headphone" :image="headPhoneImage" />
  <CategoryCard category-name="PowerBank" :image="powerBankImage" />
  <CategoryCard category-name="Headphone" :image="headPhoneImage" />
  <CategoryCard category-name="PowerBank" :image="powerBankImage" />
  <CategoryCard category-name="Headphone" :image="headPhoneImage" />
</template>

<script>
import CategoryCard from "./CategoryCard.vue";
import powerBankImage from "../../assets/images/power-bank.png";
import headPhoneImage from "../../assets/images/headphone.png";

export default {
  name: "GroupCategoryCard",
  components: { CategoryCard },
  data() {
    return {
      powerBankImage,
      headPhoneImage,
    };
  },
};
</script>
