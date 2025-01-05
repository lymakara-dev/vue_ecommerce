<template>
  <Navbar></Navbar>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />
    <Header class="mx-8"></Header>
    <div class="flex flex-row mx-8 gap-8">
      <div style="width: 1200px"><GroupCategoryCard /></div>
      <div>
        <RouteStatus />
        <div style="display: flex; margin-bottom: 30px">
          <DisplayProduct
            :mainImage="mainImage"
            :images="images"
            @update-main-image="updateMainImage"
          />
          <Description
            Title="Wireless headphone"
            Description="Wireless headphones with crystal-clear sound, long battery life, and a sleek, comfy design—perfect for music and calls."
            :tags="['Wireless', 'Foldable', 'Light', 'Bluetooth']"
          />
        </div>
        <CommentSection />
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
    Footer,
    Header,
    Navbar,
    HeroSection,
    CommentSection,
    Description,
    DisplayProduct,
    RouteStatus,
    GroupCategoryCard,
  },

  data() {
    return {
      mainImage: "/src/assets/images/headphoneWhite.png",
      images: [
        "/src/assets/images/headphonePink.png",
        "/src/assets/images/headphoneBlue.png",
        "/src/assets/images/headphoneBlack.png",
        "/src/assets/images/headphoneRed.png",
        "/src/assets/images/headphoneYellow.png",
      ],
    };
  },

  methods: {
    updateMainImage(image) {
      const index = this.images.indexOf(image); // find index of the clicked image in the array, if the image is not found it returns -1
      if (index !== -1) {
        //if the image exists in the array
        this.images[index] = this.mainImage;
        this.mainImage = image;
      }
    },
  },
};
</script>

<style scoped></style>
