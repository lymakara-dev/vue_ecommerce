const products = [
  // Phone Cases
  {
    id: 1,
    name: "Slim Fit Phone Case",
    category: "Phone Cases",
    price: 12.99,
    image: "/src/assets/images/products/phone_case_black.png",
    images: [],
    description: "A sleek and protective case for your phone.",
    stock: 50,
    rating: 4.5,
    discountPercentage: 10,
    tags: ['Slim', 'Light'],
    reviews: [
      { username: 'Alice', rating: 5, Date: '12:01am - 17/11/2024', comment: 'Great product!' },
      { username: 'Bob', rating: 4, Date: '4:55am - 23/11/2024', comment: 'Good value for money.' },
    ], 
  },
  {
    id: 2,
    name: "Shockproof Phone Case",
    category: "Phone Cases",
    price: 15.99,
    image: "/src/assets/images/products/phone_case_agave.png",
    description: "Durable case with shockproof protection.",
    stock: 30,
    rating: 4.8,
    discountPercentage: 15,
    tags: ['Slim', 'Light'],

  },

  // Chargers
  {
    id: 3,
    name: "Fast Charging Cable",
    category: "Chargers",
    price: 8.99,
    image: "/src/assets/images/products/charger_black.png",
    description: "Durable cable for fast and reliable charging.",
    stock: 100,
    rating: 2.7,
    discountPercentage: 0,
    tags: ['Slim', 'Light'],

  },
  {
    id: 4,
    name: "Wireless Charger Pad",
    category: "Chargers",
    price: 19.99,
    image: "/src/assets/images/products/charger_black.png",
    description: "Charge your phone wirelessly and efficiently.",
    stock: 45,
    rating: 4.3,
    discountPercentage: 5,
  },

  // Screen Protectors
  {
    id: 5,
    name: "Tempered Glass Screen Protector",
    category: "Screen Protectors",
    price: 6.99,
    image: "src/assets/images/products/screen_protector.png",
    description: "High-quality tempered glass for ultimate protection.",
    stock: 200,
    rating: 3.8,
    discountPercentage: 5,
  },
  {
    id: 6,
    name: "Privacy Screen Protector",
    category: "Screen Protectors",
    price: 9.99,
    image: "src/assets/images/products/screen_protector.png",
    description: "Keep your screen safe and your information private.",
    stock: 80,
    rating: 4.1,
    discountPercentage: 10,
  },

  // Headphones & Earbuds
  {
    id: 7,
    name: "Wireless Earbuds",
    category: "Headphones & Earbuds",
    price: 39.99,
    image: "src/assets/images/headphone.png",
    description: "Experience premium sound with our wireless earbuds.",
    stock: 30,
    rating: 4.6,
    discountPercentage: 0,
  },
  {
    id: 8,
    name: "Over-Ear Bluetooth Headphones",
    category: "Headphones & Earbuds",
    price: 59.99,
    image: "src/assets/images/headphoneBlack.png",
    description: "Comfortable and immersive audio experience.",
    stock: 25,
    rating: 4.7,
    discountPercentage: 20,
  },

  // Power Banks
  {
    id: 9,
    name: "10,000mAh Power Bank",
    category: "Power Banks",
    price: 24.99,
    image: "src/assets/images/products/power_bank_black.png",
    description: "Compact and powerful power bank for long-lasting use.",
    stock: 75,
    rating: 1.7,
    discountPercentage: 25,
  },
  {
    id: 10,
    name: "20,000mAh Quick Charge Power Bank",
    category: "Power Banks",
    price: 34.99,
    image: "src/assets/images/products/power_bank_pink.png",
    description: "High-capacity power bank with quick charge support.",
    stock: 50,
    rating: 4.4,
    discountPercentage: 15,
  },
];

export default products;
