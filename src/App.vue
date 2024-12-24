<template>
 <HomePage />
 <RouterView />
 <CartItem/>
</template>

<script>

import CartItem from './components/cart/CartItem.vue';
import HomePage from './Views/HomePage.vue';

export default {
  name: "App",
  components: { 
    CartItem,
   },
};
</script>
