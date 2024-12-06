<template>
  <RouteStatus />
  <div class="grid grid-cols-3 gap-4">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import RouteStatus from "../RouteStatus.vue";
import ProductCard from "./ProductCard.vue";

export default {
  name: "GroupProductCard",
  components: { ProductCard, RouteStatus },
};
</script>
