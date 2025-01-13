<!-- <template>
    <div class="wrapper1">
        <img src="@/assets/images/headphoneWhite.png" alt="Product Picture" class="displayedProduct">
    </div>
    <div class="wrapper2" >
        <img src="@/assets/images/headphonePink.png" alt="Product Picture" class="pic">
        <img src="@/assets/images/headphoneBlue.png" alt="Product Picture" class="pic">
        <img src="@/assets/images/headphoneBlack.png" alt="Product Picture" class="pic">
        <img src="@/assets/images/headphoneRed.png" alt="Product Picture" class="pic">
        <img src="@/assets/images/headphoneYellow.png" alt="Product Picture" class="pic">
    </div>
</template> -->


<template>
    <div class="wrapper1">
        <img :src="mainImage" alt="Product Picture" class="displayedProduct" />
    </div>
    <div class="wrapper2">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Product Picture" class="pic" @click="updateMainImage(image)"/>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mainImage: String,
      images: Array,
      productId: Number,
    },

    methods:{
        updateMainImage(image) {
            this.$emit('update-main-image', image); // Emit the updated image to the parent
        },
    }
  };
  </script>

<style>
.wrapper1{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 450px;
    background-color: white;
    border-radius: 10px;
}
.wrapper2{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 100px;
    padding-top: 10px;
}
.displayedProduct{
    width: 350px;
    height: 350px;
}
.pic{
    width: 80px;
    height: 80px;
    border: solid 1px;
    border-radius: 10px;
    margin: 5px;
    background-color: white;

}
</style>