<template>
  <div class="flex flex-row bg-red-500">
    <div>
      <RouteStatus />
      <div style="display: flex; margin-bottom: 30px">
        <DisplayProduct />
        <br /><br />
        <Description />
      </div>
      <CommentSection />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import Header from "@/components/common/Header.vue";
import Navbar from "@/components/common/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import CommentSection from "@/components/productDetail/CommentSection.vue";
import Description from "@/components/productDetail/Description.vue";
import DisplayProduct from "@/components/productDetail/DisplayProduct.vue";
import RouteStatus from "@/components/RouteStatus.vue";
import GroupCategoryCard from "@/components/product/GroupCategoryCard.vue";

export default {
  components: {
    CommentSection,
    Description,
    DisplayProduct,
  },
};
</script>

<style scoped></style>
