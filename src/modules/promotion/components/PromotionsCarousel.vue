<template>
  <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide sm:gap-6">
    <div v-for="promotion in promotions" :key="promotion.id" class="snap-start">
      <PromotionCard
        :title="promotion.title"
        :description="promotion.description"
        :image="promotion.image"
        :alt="promotion.title"
      ></PromotionCard>
    </div>
  </div>
</template>
<script>
import PromotionCard from "./PromotionCard.vue";
import promotions from "../data/promotions.js";
export default {
  name: "PromotionsCarousel",
  components: {
    PromotionCard,
  },
  data() {
    return { promotions };
  },
};
</script>
