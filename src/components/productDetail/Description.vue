<template>
    <div style="display: flex; flex-direction: column; height: 500px; padding: 20px; ">
        <div class="Wrapper">
            <div style="font-weight: bold; font-size: 40px; width: 400px; height: 130px;">Title</div>
            <div style="font-size: 24px; width: 400px; height: 170px;">Description</div>
            <button class="btn"> 
                <i class="fa-solid fa-cart-shopping"></i>
                <p>cart</p>
            </button>
        </div>
        <br><hr><br>
        <div style="display: flex;">
            <button class="tag">Wireless</button>
            <button class="tag">Foldable</button>
            <button class="tag">Bluetooth</button>
        </div>
    </div>

</template>

<style>
.btn{
    widows: 45px;
    height: 25px;
    color: white;
    background-color: #3B82F6;
    display: flex;
    align-items: center;
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
</style>