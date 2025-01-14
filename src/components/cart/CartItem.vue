
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
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index" class="border-b">
            <td class="p-8">
              <img :src="item.image" alt="" class="w-16 h-16 mr-4" />
              <div class="flex items-center">
                <div class="w-32 h-full shrink-0">
        
          </div>

                <!-- <span>{{ item.name }}<br /><span class="text-gray-500">{{ item.color }}</span></span> -->
              </div>
            </td>
            <td class="text-center p-3">
              <button @click="decreaseQuantity(index)" class="px-3 py-1 border bg-blue-300  hover:bg-red-500">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(index)" class="px-3 py-1 border bg-blue-300  hover:bg-green-500 ">+</button>
            </td>
            <!-- <td class="text-right p-2">${{ item.price.toFixed(2) }}</td> -->
            <td class="text-right p-2">${{ (item.price ? item.price.toFixed(2) : '0.00') }}</td>
            <td class="text-right p-2">${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td class="text-center p-2">
              <button @click="removeItem(index)" class="text-blue-50 w-[7rem] h-[2rem] bg-red-500 rounded-lg hover:bg-blue-700">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- order summary -->
    <div class="m-10  w-[50rem] h-[30rem] mr-[2rem] p-6 bg-gray-50 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Cart Summary</h2>
    <div class="mb-4 p-6">
      <h3 class="text-lg font-medium">Shipping Options</h3>
      <div class="flex items-center mb-4 p-2">
        <input type="radio" id="free" name="shipping" v-model="selectedShipping" value="0" class="mr-2  " />
        <label for="free" class="cursor-pointer ">Free shipping ($0.00)</label>
      </div>
      <div class="flex items-center mb-4 p-2">
        <input type="radio" id="express" name="shipping" v-model="selectedShipping" value="15" class="mr-2" />
        <label for="express" class="cursor-pointer">Express shipping (+$15.00)</label>
      </div>
      <div class="flex items-center mb-4 p-2">
        <input type="radio" id="pickup" name="shipping" v-model="selectedShipping" value="21" class="mr-2" />
        <label for="pickup" class="cursor-pointer">Pick Up (+$21.00)</label>
      </div>
    </div>
    <div class="flex justify-between mb-2">
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