<template>
  <Navbar></Navbar>
  <HomePage />
  <RouterView />
  <Footer></Footer>
</template>

<script>
import Footer from "./components/common/Footer.vue";
import Navbar from "./components/common/Navbar.vue";
import HomePage from "./Views/HomePage.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
