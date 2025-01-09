<template>
  <div>
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import Navbar from "@/components/common/Navbar.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
