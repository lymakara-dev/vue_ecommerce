<template>
  <Navbar></Navbar>
  <h1>Home</h1>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import Navbar from "@/components/common/Navbar.vue";

export default {
  name: "HomePage",
  components: { Navbar, Footer },
};
</script>
