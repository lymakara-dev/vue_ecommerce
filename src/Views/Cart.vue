<template>
  <Manu />
  <CartItem />
</template>
<script>
import Manu from "@/components/cart/Manu.vue";
import CartItem from "@/components/cart/CartItem.vue";

export default {
  name: "Cart",
  components: {
    Manu,
    CartItem,
  },
};
</script>
