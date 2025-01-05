<template>
 <HomePage />
 <RouterView />
 <div class="flex">
  <CartItem/>
 </div>
</template>

<script>

import { RouterView } from 'vue-router';

export default {
  name: "App",
  components: { 
    // CartItem,
    // HomePage,
    // RouterView,
    // CartSummery,

   },
};
</script>
