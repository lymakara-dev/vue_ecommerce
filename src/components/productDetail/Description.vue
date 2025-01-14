<template>
    <div class="descriptionWrapper">
        <div style="flex-grow: 1; ">
            <div class="productTitle">{{Title}}</div>
            <div class="productDescription">{{Description}}</div>
        </div>

        <div class="GroupBtn">
            <p><strong>$ {{ price }}</strong></p>
            <button class="btn"> 
                <i class="fa-solid fa-cart-shopping" style="padding-right: 5px;"></i>
                <p>cart</p>
            </button>
        </div>

        <br><hr><br>
        <div style="display: flex;">
            <button v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</button>
        </div>
    </div>

</template>
<script>
    export default {
        props:{
            Title: String,
            Description: String,
            tags: Array,
            price: Number,
        }
    }
</script>
<style>
.descriptionWrapper{
    display: flex; 
    flex-direction: column; 
    height: 500px; 
    padding: 20px; 
    margin-left: 10px;
    border-left: 1px grey solid;
}
.GroupBtn{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
}

.btn{
    width: 55px;
    height: 25px;
    color: white;
    background-color: #3B82F6;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
}

.tag{
    border: solid 1px grey;
    width: auto;
    padding: 3px;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
}

.productTitle{
    font-weight: bold; 
    font-size: 28px; 
    width: 400px; 
    padding-bottom: 10px;
}

.productDescription{
    font-size: 18px; 
    width: 400px; 
}
</style>
