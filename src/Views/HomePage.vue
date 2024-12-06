<template>
  <Navbar></Navbar>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />
    <Header class="mx-8"></Header>
    <div class="flex flex-row mx-8 gap-8">
      <div class="grow"><GroupCategoryCard /></div>
      <div class=""><GroupProductCard /></div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import Header from "@/components/common/Header.vue";
import Navbar from "@/components/common/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import GroupCategoryCard from "@/components/product/GroupCategoryCard.vue";
import GroupProductCard from "@/components/product/GroupProductCard.vue";
import RouteStatus from "@/components/RouteStatus.vue";

export default {
  name: "HomePage",
  components: {
    Navbar,
    Footer,
    HeroSection,
    Header,
    GroupCategoryCard,
    GroupProductCard,
    RouteStatus,
  },
};
</script>
