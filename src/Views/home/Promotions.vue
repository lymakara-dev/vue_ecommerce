<template>
  <div class="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
    <div v-for="promotion in promotions" :key="promotion.id">
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
import PromotionCard from "@/components/product/PromotionCard.vue";
import promotions from "@/stores/promotions";
export default {
  components: {
    PromotionCard,
  },
  data() {
    return { promotions };
  },
};
</script>
