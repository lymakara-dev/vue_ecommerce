<template>
  <CartSummery/>
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
            <div class="p-2 flex items-center">
              <div class="quantity-control flex items-center">
                <button class="p-1 bg-white text-black rounded-l cursor-pointer" @click="updateQuantity(index, -1)">-</button>
                <input type="text" v-model="product.quantity" class="w-12 text-center bg-white text-black p-1">
                <button class="increment p-1 bg-white text-black rounded-r cursor-pointer" @click="updateQuantity(index, 1)">+</button>
              </div>
            </div>
          </td>
          <td class="price">{{formatCurrency(product.price) }}</td>
          <td class="quantity">{{formatCurrency(product.quantity * product.price)}}</td>
        </tr>
      </tbody>
    <div class="cart-summary">
  <h2>Cart summary</h2>
  <div class="shipping-options">
    <label>
      <input
        type="radio"
        name="shipping"
        value="0"
        v-model="shippingCost"
      />
      <h1>Free shipping</h1>
      <span>$0.00</span>
    </label>
    <label>
      <input
        type="radio"
        name="shipping"
        value="15"
        v-model="shippingCost"
      />
      <h1>Express shipping</h1>
      <span>+$15.00</span>
    </label>
    <label>
      <input
        type="radio"
        name="shipping"
        value="21"
        v-model="shippingCost"
      />
      <h1>Pick Up</h1>
      <span>$21.00</span>
    </label>
  </div>
  <div class="price-summary">
    <div>
      <span>Subtotal</span>
      <span>${{ subtotal.toFixed(2) }}</span>
    </div>
    <div>
      <span>Total</span>
      <span>${{ total.toFixed(2) }}</span>
    </div>
    </div>
    <button class="btsum" @click="checkout">Checkout</button>
     </div>
  </div>
  <div class="coupon-container">
    <h2>Have a coupon?</h2>
    <p>Add your code for an instant cart discount</p>
    <div class="coupon-input">
        <input type="text" placeholder="Coupon Code" class="input-field" />
        <button class="apply-btn">Apply</button>
    </div>
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

        subtotal: 304.0, // Subtotal value
        shippingCost: 0, // Default to free shipping

      };
    },

    computed: {
    total() {
      return this.subtotal + parseFloat(this.shippingCost);
    },
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
      formatCurrency(value) {
       // Check if value is a number and not NaN
      if (typeof value !== 'number' || isNaN(value)) {
       // console.error('Invalid value for formatCurrency:', value);
       return '$0.00'; // Return a default value if invalid
    }
     return `$${value.toFixed(2)}`; // Format the number to two decimal places
},

      checkout() {
      alert(`Checking out with a total of $${this.total.toFixed(2)}`);
    },
    },
  };
  </script>
  
  <style scoped>
  body{
    font-family: Arial,sans-serif;
    margin: 0;
    padding: 5px;
  }
  .cart-page{
    width: 60%;
    margin: 0 auto;
    border-radius: 8px;
    border: 2px solid rgb(140, 140, 140);
    box-shadow: 0 4px 10px rgba(68, 68, 68, 0.1);
    overflow-x: auto;
    margin-top: 50px;
    margin-left: 50px;

  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
  th,td{
    position:relative;
    padding: 10px;
  }
  th{
    background: #f3fbfd;
    border-bottom: solid 1px rgb(169, 164, 164);
    font-size: 14px;
    text-transform: uppercase;
    color: #555;
  }
  img{
    width: 30%;
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
    width: 40%;
    background: rgb(61, 143, 150);
    border: 2px solid gray;
    border-radius: 5px;
    color:white;
    cursor: pointer;
    padding: 10px;
    font-size: 1em;
  }
  .remove-btn:hover{
    background: #007bff;
  }
  .price {
    position: relative;
    right: 200px;
  }
  
  .cart-summary {
  width:30% ;
  height: 50%;
  font-family: Arial, sans-serif;
  border: 2px solid #8d8d8d;
  border-radius: 8px;
  position: absolute;
  right: 100px;
  top: 155px;
  padding: 10px;

}
h2 {
  margin-bottom: 40px;
  margin-left: 30%;
  font-size: 2.2em;
}
.shipping-options {
    padding: 10px;
    border: 1px solid #ccc; /* Light border */
    border-radius: 5px;
    background-color: #e5eefc;
}
.shipping-options label {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
}
.price-summary {
  border-top: 1px solid #ddd;
  padding-top: 8px;
  margin-bottom: 16px;
}
.price-summary div {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
}
.btsum {
  width: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px ;
  position: relative;
  left: 25%;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}
.btsum:hover {
  background-color: #0056b3;
}
span{
  font-size: 1rem;
  margin-bottom: 20px;
}

.coupon-container {
    background-color: #e5efff; /* Light blue background */
    border-radius: 8px;
    padding: 20px;
    max-width: 600px; /* Set a max width */
    margin: auto; /* Center the container */
    margin-top: 20px;
    margin-left: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.coupon-container h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
}

.coupon-container p {
    margin-bottom: 20px;
    color: #555; /* Darker text color for better contrast */
}

.coupon-input {
    display: flex;
}

.input-field {
    flex: 1; /* Allow the input to take available space */
    padding: 10px;
    border: 1px solid #ccc; /* Light border */
    border-radius: 4px;
    font-size: 1em;
}

.apply-btn {
    padding: 10px 15px;
    background-color: #007bff; /* Blue background */
    color: white; /* White text */
    border: none; /* No border */
    border-radius: 4px;
    cursor: pointer; /* Pointer cursor on hover */
    margin-left: 10px; /* Space between input and button */
    font-size: 1em;
}

.apply-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
}


  </style>
  