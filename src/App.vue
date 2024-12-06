<template>
  <RouterView />
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import Footer from './components/common/Footer.vue';
export default {
  name: "App",
  components: { HomePage, Footer, },
};
</script>
