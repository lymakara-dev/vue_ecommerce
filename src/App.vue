<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer></Footer>
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
