<template>
  <Navbar></Navbar>
  <div class="flex flex-col gap-8 mb-8">
    <HeroSection />
    <Header class="mx-8"></Header>
    <div class="flex flex-row mx-8 gap-8">
      <div style="width: 1200px"><GroupCategoryCard /></div>
      <div >
        <RouteStatus/>
        <div style="display: flex; margin-bottom: 30px;">
            <DisplayProduct/>
            <br><br>
            <Description/>
        </div>
        <CommentSection/>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

 
 <script>
 import Footer from "@/components/common/Footer.vue";
 import Header from "@/components/common/Header.vue";
 import Navbar from "@/components/common/Navbar.vue";
 import HeroSection from "@/components/HeroSection.vue";
 import CommentSection from "@/components/productDetail/CommentSection.vue";
 import Description from "@/components/productDetail/Description.vue";
 import DisplayProduct from "@/components/productDetail/DisplayProduct.vue";
 import RouteStatus from "@/components/RouteStatus.vue";
 import GroupCategoryCard from "@/components/product/GroupCategoryCard.vue";

 export default{
    components:{
        Footer,
        Header,
        Navbar,
        HeroSection,
        CommentSection,
        Description,
        DisplayProduct,
        RouteStatus,
        GroupCategoryCard,
    }
 };
 </script>
 
 <style scoped>
 
 </style>
 