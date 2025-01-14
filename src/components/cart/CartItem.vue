
   <template>
    <div class="flex">
    <div class="container m-10 mr-[0rem] p-10 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-blue-200">
            <th class="text-left p-2">Product</th>
            <th class="text-center p-2">Quantity</th>
            <th class="text-right p-2">Price</th>
            <th class="text-right p-2">Subtotal</th>
            <th class="text-center p-2">Action</th>
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
    </div>
    </div>

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
    <div class="flex justify-between mb-4">
      <span>Total</span>
      <span>${{ total.toFixed(2) }}</span>
    </div>
    <button @click="checkout" class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Checkout
    </button>
  </div>
  </div>
  </template>
  
  <script>
  import categories from '@/stores/categories';
  import products from '@/stores/products';
  export default {
    data() {
      return {
        categories,
        products,
        cartItems: [ ],
        selectedShipping: '0',
        subtotal: 0,
      };
    },
    computed: {
    total() {
      // return this.subtotal + parseFloat(this.selectedShipping);
      return this.subtotal + this.shipping + this.tax;
    },
  },
    methods: {
      increaseQuantity(index) {
        this.cartItems[index].quantity += 1;
      },
      decreaseQuantity(index) {
        if (this.cartItems[index].quantity > 1) {
          this.cartItems[index].quantity -= 1;
        }
      },
      removeItem(index) {
        this.cartItems.splice(index, 1);
      },

      checkout() {
      // Implement checkout logic here (e.g., redirect to payment)
      this.$router.push('/checkout'); 
      },
      loadCartItems() { 
      // Ensure we're accessing the correct category
      if (Array.isArray(categories)) {
        this.cartItems = categories.map(item => ({
          ...item,
          quantity: 1, // Default quantity for demonstration
          price: item.price || 19.00,
         // Add a price for each item (adjust as needed)
        }));
        this.calculateSubtotal(); // Calculate subtotal after loading items
      }
    },
    calculateSubtotal() {
      this.subtotal = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    // Other methods (increaseQuantity, decreaseQuantity, etc.) go here
  },
    mounted() {
    this.loadCartItems(); // Load cart items when the component is mounted
  },
    
  };

  </script>
  
  <style scoped></style>