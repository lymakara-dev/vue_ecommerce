<template>
    <div class="cart-page">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
      </table>
      <tbody>
        <tr v-for="(product,index) in cartItems" :key="index">
          <td>
            <img :src="product.img" :alt="product.name" class="Product-img"/>
            <div>
              <p>{{ product.name }}</p>
              <p class="color">Color:{{ product.color }}</p>
              <button class="remove-btn" @click="removeItem(index)">Remove</button>
            </div>
          </td>
          <td>
            <div class="quantity-control">
              <button class="decrement" @click="updateQuantity(index, -1)">-</button>
              <input type="text" v-model="product.quantity" class="quantity">
              <button class="increment" @click="updateQuantity(index, 1)">+</button>
            </div>
          </td>
          <td class="price">{{formatCurrency(product.price) }}</td>
          <td class="quantity">{{formatCurrency(product.quantity * product.price)}}</td>
        </tr>
      </tbody>

    </div>
  </template>
  
  <script>
  export default {
    name: 'CartItem',
    data() {
      return{
        cartItems:[
          {
            name:"Red Beats Headphone",
            color:"color: red",
            price: 19.00,
            quantity:2,
            img:"/img/Cart/redheadphone.png",
          },
          {
            name:" Headphone",
            color:"color: black",
            price: 19.00,
            quantity:2,
            img:"/img/Cart/product2.png",

          },
          {
            name:" Headphone",
            color:"color: black",
            price: 19.00,
            quantity:2,
            img:"/img/Cart/product3.png",

          },
          {
            name:" Headphone",
            color:"color: black",
            price: 19.00,
            quantity:2,
            img:"/img/Cart/product4.png",

          },
        ],

      };
    },
    methods:{
      updateQuantity(index,change){
        const item =this.cartItems[index];
        const newQuantity =item.quantity + change;
        if(newQuantity >= 1){
          item.quantity =newQuantity;
        }
      },
      removeItem(index){
        this.cartItems.splice(index,1);
      },
      formatCurrency(value){
        return '19.0$';
      },
    },
  };
  </script>
  
  <style scoped>
  body{
    font-family: Arial,sans-serif;
    background-color:#ffffff;
    margin: 0;
    padding: 5px;
  }
  .cart-page{
    width: 40%;
    /* height: 50%; */
    margin: 0 auto;
    background: #F0F4FF;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    margin-top: 100px;
    margin-left: 50px;

  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
  th,td{
    padding: 10px;
    /* text-align: left; */
  }
  th{
    background: #f3fbfd;
    border-bottom: solid 1px rgb(169, 164, 164);
    font-size: 14px;
    text-transform: uppercase;
    color: #555;
  }
  img{
    width: 40%;
    height: 10%;
    border-radius: 5px;
    object-fit: cover;
  }
  .Product-img{
    position: relative;
  }
  .quantity-control{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 300px;
  }
  .quantity-control button{
    padding: 5px 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position:relative;
   
    
  }
  .quantity-control input{
    width: 40px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 2px;
  }
  .remove-btn{
    background: rgb(61, 143, 150);
    border: 2px solid gray;
    border-radius: 5px;
    color:white;
    cursor: pointer;
    font-size: 14px;
  }
  .price {
    position: relative;
    right: 200px;
  }
  /* .quantity{
    position: relative;
    right: 100px;
  } */

  </style>
  