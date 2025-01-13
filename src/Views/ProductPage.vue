<template>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />
      <div class="flex flex-row mx-8 gap-8">
        <!-- side bar -->
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

          <!-- display product detail   -->
          <div>
            <div style="display: flex; margin-bottom: 30px">
              <DisplayProduct
                :mainImage="product.image"
                :images="product.images"
                @update-main-image="product.updateMainImage"
              />
              <Description
                :Title="product.name"
                :Description="product.description"
                :tags="product.tags"
              />
            </div>

            <CommentSection/>
        </div>
      </div>

      </div>
  </div>
</template>

<!-- <template>
  <div>
    <div style="display: flex; margin-bottom: 30px">
      <DisplayProduct
        :mainImage="product.image"
        :images="product.images"
        @update-main-image="product.updateMainImage"
      />
      <Description
        :Title="product.name"
        :Description="product.description"
        :tags="product.tags"
      />
    </div>

    <CommentSection />
  </div>


</template> -->

<script>
import HeroSection from "@/components/HeroSection.vue";
import CommentSection from "@/components/productDetail/CommentSection.vue";
import Description from "@/components/productDetail/Description.vue";
import DisplayProduct from "@/components/productDetail/DisplayProduct.vue";
import RouteStatus from "@/components/RouteStatus.vue";
import products from "@/stores/products";
import categoriesData from "@/stores/categories";
import CategoryCard from "@/components/product/CategoryCard.vue";

import { useRoute } from "vue-router";

export default {
  components: {
    HeroSection,
    CommentSection,
    Description,
    DisplayProduct,
    RouteStatus,
    CategoryCard
  },

  data() {
    return {
      categoriesData,
      selectedCategory: "All",
    };
  },
  // data() {
  //   return {
  //     products,

  //     // mainImage: "/src/assets/images/headphoneWhite.png",
  //     // images: [
  //     //   "/src/assets/images/headphonePink.png",
  //     //   "/src/assets/images/headphoneBlue.png",
  //     //   "/src/assets/images/headphoneBlack.png",
  //     //   "/src/assets/images/headphoneRed.png",
  //     //   "/src/assets/images/headphoneYellow.png",
  //     // ],
  //   };
  // },


  computed: {
    productId() {
      return Number(this.$route.params.productId);
    },

    product() {
      return products.find((product) => product.id === this.productId);
    },
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
    updateMainImage(image) {
      const index = this.images.indexOf(image);
      if (index !== -1) {
        //if the image exists in the array
        this.images[index] = this.mainImage;
        this.mainImage = image;
      }
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped></style>
