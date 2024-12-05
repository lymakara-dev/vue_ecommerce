<template>
  <Navbar></Navbar>
  <HeroSection />
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import Navbar from "@/components/common/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "HomePage",
  components: { Navbar, Footer, HeroSection },
};
</script>
