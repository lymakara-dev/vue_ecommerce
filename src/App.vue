<template>
  <router-view></router-view>
</template>

<script>
import Footer from "./components/common/Footer.vue";
import Navbar from "./components/common/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
