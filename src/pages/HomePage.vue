<template>
  <Navbar></Navbar>
  <h1>Home</h1>
  
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import Navbar from "@/components/common/Navbar.vue";
import InputField from "@/components/InputField.vue";

export default {
  name: "HomePage",
  components: { Navbar, Footer, InputField },
};
</script>
