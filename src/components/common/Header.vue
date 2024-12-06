<template>
  <div class="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
    <PromotionCard
      title="Promotion 1"
      description="description 1"
      :image="headPhoneImage"
    />
    <PromotionCard
      title="Promotion 1"
      description="description 1"
      :image="headPhoneImage"
    />
    <PromotionCard
      title="Promotion 1"
      description="description 1"
      :image="headPhoneImage"
    />
    <PromotionCard
      title="Promotion 1"
      description="description 1"
      :image="headPhoneImage"
    />
    <PromotionCard
      title="Promotion 1"
      description="description 1"
      :image="headPhoneImage"
    />
  </div>
</template>

<script>
import PromotionCard from "../product/PromotionCard.vue";
import powerBankImage from "../../assets/images/power-bank.png";
import headPhoneImage from "../../assets/images/headphone.png";

export default {
  name: "Header",
  components: {
    PromotionCard,
  },
  data() {
    return {
      powerBankImage,
      headPhoneImage,
    };
  },
};
</script>
