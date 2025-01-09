<template>
  <div>
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
import promotions from "@/stores/promotions";
export default {
  data() {
    return { promotions };
  },
};
</script>
