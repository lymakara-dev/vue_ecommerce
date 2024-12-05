<template>
  <Navbar></Navbar>
  <h1>Home</h1>
  <InputField
    label="Username:"
    id="username"
    type="text"
    name="username"
    placeholder="Enter your username"
  />
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
