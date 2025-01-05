<template>
  <div class="cart-page w-[1024px] mx-auto bg-blue-100 rounded-lg shadow-md overflow-x-auto mt-24 ml-12">
    <div class="w-full border-collapse">
      <div class="grid grid-cols-4 gap-4 m-3">
        <div class="text-blue-600 font-semibold">Product</div>
        <div class="font-semibold">Quantity</div>
        <div class="font-semibold">Price</div>
        <div class="font-semibold">Subtotal</div>
        
      </div>
      
      <div class="flex-col justify-between gap-[50rem] w-full ">
        <div v-for="(product, index) in cartItems" :key="index" class="border-b border-gray-200 w-full">
          <div class="grid grid-cols-4 w-[1024px]">
            <div class="p-2 flex items-center  ">
              <img :src="product.img" :alt="product.name" class="Product-img w-20 h-20 rounded object-cover mr-4"/>
              <div>
                <p class="font-medium">{{ product.name }}</p>
                <p class="text-gray-500">Color: {{ product.color }}</p>
                <button class=" border-2 border-gray-400 p-1 rounded text-sm text-white cursor-pointer mt-2" @click="removeItem(index)">Remove</button>
              </div>
            </div>
            <div class="p-2 flex items-center">
              <div class="quantity-control flex items-center">
                <button class="p-1 bg-white text-black rounded-l cursor-pointer" @click="updateQuantity(index, -1)">-</button>
                <input type="text" v-model="product.quantity" class="w-12 text-center bg-white text-black p-1">
                <button class="increment p-1 bg-white text-black rounded-r cursor-pointer" @click="updateQuantity(index, 1)">+</button>
              </div>
            </div>
            <div class="p-2 flex items-center">{{ formatCurrency(product.price) }}</div>
            <div class="p-2 flex items-center">{{ formatCurrency(product.quantity * product.price) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {
      cartItems: [
        {
          name: "Red Beats Headphone",
          color: "red",
          price: 19.0,
          quantity: 2,
          img: "/img/Cart/redheadphone.png",
        },
        {
          name: "Headphone",
          color: "black",
          price: 19.0,
          quantity: 2,
          img: "/img/Cart/product2.png",
        },
        {
          name: "Headphone",
          color: "black",
          price: 19.0,
          quantity: 2,
          img: "/img/Cart/product3.png",
        },
        {
          name: "Headphone",
          color: "black",
          price: 19.0,
          quantity: 2,
          img: "/img/Cart/product4.png",
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    updateQuantity(index, change) {
      const item = this.cartItems[index];
      const newQuantity = item.quantity + change;
      if (newQuantity >= 1) {
        item.quantity = newQuantity;
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>
