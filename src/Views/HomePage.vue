<template>
  <Navbar></Navbar>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />
    <div class="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div v-for="promotion in promotionsData" :key="promotion.id">
        <PromotionCard
          :title="promotion.title"
          :description="promotion.description"
          :image="promotion.image"
          :alt="promotion.title"
        ></PromotionCard>
      </div>
    </div>
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
import PromotionCard from "@/components/product/PromotionCard.vue";
import RouteStatus from "@/components/RouteStatus.vue";
import promotionsData from "@/stores/promotions";

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
    PromotionCard,
  },

  data() {
    return { promotionsData };
  },
};
</script>
