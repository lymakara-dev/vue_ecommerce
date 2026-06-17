const products = [
  // Phone Cases
  {
    id: 1,
    name: "Slim Fit Phone Case",
    category: "Phone Cases",
    price: 12.99,
    image: "/phone_case_black.png",
    images: ["/phone_case_sienna.png", "/phone_case_agave.png"],
    description: "A sleek and protective case for your phone.",
    stock: 50,
    rating: 4.5,
    discountPercentage: 10,
    tags: ["Slim", "Light"],
    reviews: [
      {
        username: "Alice",
        Date: "12:01am - 17/11/2024",
        comment: "Great product!",
      },
      {
        username: "Bob",
        Date: "4:55am - 23/11/2024",
        comment: "Good value for money.",
      },
    ],
  },
  {
    id: 2,
    name: "Shockproof Phone Case",
    category: "Phone Cases",
    price: 15.99,
    image: "/phone_case_agave.png",
    images: [
      "/phone_case_ganache.png",
      "/phone_case_black.png",
      "/phone_case_sienna.png",
      "/phone_case_agave.png",
    ],
    description: "Durable case with shockproof protection.",
    stock: 30,
    rating: 4.8,
    discountPercentage: 15,
    tags: ["Slim", "Shockproof"],
    reviews: [
      {
        username: "Anna",
        Date: "12:01am - 17/12/2024",
        comment: "Very durable",
      },
    ],
  },

  // Chargers
  {
    id: 3,
    name: "Fast Charging Cable",
    category: "Chargers",
    price: 8.99,
    image: "/charger_black.png",
    description: "Durable cable for fast and reliable charging.",
    stock: 100,
    rating: 2.7,
    discountPercentage: 0,
    tags: ["Fast charge"],
    reviews: [
      {
        username: "Alice",
        Date: "12:01am - 17/11/2024",
        comment: "Great product!",
      },
      {
        username: "Dan",
        Date: "1:55am - 10/1/2025",
        comment: "Charge really fast.",
      },
    ],
  },
  {
    id: 4,
    name: "Wireless Charger Pad",
    category: "Chargers",
    price: 19.99,
    image: "/charger_black.png",
    description: "Charge your phone wirelessly and efficiently.",
    stock: 45,
    rating: 4.3,
    discountPercentage: 5,
    tags: ["Fast charge", "wireless"],
    reviews: [
      {
        username: "Anne",
        Date: "2:01am - 17/11/2024",
        comment: "Great product!",
      },
      {
        username: "Jane",
        Date: "6:55am - 23/11/2020",
        comment: "Good value for money.",
      },
    ],
  },

  // Screen Protectors
  {
    id: 5,
    name: "Tempered Glass Screen Protector",
    category: "Screen Protectors",
    price: 6.99,
    image: "/screen_protector.png",
    description: "High-quality tempered glass for ultimate protection.",
    stock: 200,
    rating: 3.8,
    discountPercentage: 5,
    tags: ["Tempered Glass", "Screen Guard", "Strach Protection"],
    reviews: [
      {
        username: "Harry",
        Date: "12:01am - 17/11/2024",
        comment: "Great product!",
      },
    ],
  },
  {
    id: 6,
    name: "Privacy Screen Protector",
    category: "Screen Protectors",
    price: 9.99,
    image: "/screen_protector.png",
    description: "Keep your screen safe and your information private.",
    stock: 80,
    rating: 4.1,
    discountPercentage: 10,
    tags: ["Tempered Glass", "Screen Guard", "Strach Protection"],
    reviews: [
      {
        username: "Sophie",
        Date: "1:41pm - 17/11/2024",
        comment: "Very cheap!",
      },
    ],
  },

  // Headphones & Earbuds
  {
    id: 7,
    name: "Wireless Earbuds",
    category: "Headphones & Earbuds",
    price: 39.99,
    image: "/headphoneRed.png",
    images: [
      "/headphoneBlack.png",
      "/headphonePink.png",
      "/headphoneBlue.png",
      "/headphoneWhite.png",
      "/headphoneYellow.png",
    ],
    description: "Experience premium sound with our wireless earbuds.",
    stock: 30,
    rating: 4.6,
    discountPercentage: 0,
    tags: ["Wireless", "Long battery life", "Light", "Portable"],
    reviews: [
      {
        username: "Abby",
        Date: "12:01am - 17/11/2024",
        comment: "Great Quality and the price is affordable too",
      },
      {
        username: "Bob",
        Date: "4:55am - 23/11/2024",
        comment: "Used it since 2023",
      },
    ],
  },
  {
    id: 8,
    name: "Over-Ear Bluetooth Headphones",
    category: "Headphones & Earbuds",
    price: 59.99,
    image: "/headphoneBlack.png",
    images: [
      "/headphonePink.png",
      "/headphoneBlue.png",
      "/headphoneRed.png",
      "/headphoneWhite.png",
      "/headphoneYellow.png",
    ],
    description: "Comfortable and immersive audio experience.",
    stock: 25,
    rating: 4.7,
    discountPercentage: 20,
    tags: ["Wireless", "Long battery life", "Light", "Portable"],
    reviews: [
      {
        username: "Jack",
        Date: "9:01pm - 17/11/2024",
        comment: "Great design!",
      },
      {
        username: "Henry",
        Date: "6:35pm - 23/11/2024",
        comment: "Very durable",
      },
    ],
  },

  // Power Banks
  {
    id: 9,
    name: "10,000mAh Power Bank",
    category: "Power Banks",
    price: 24.99,
    image: "/power_bank_black.png",
    images: ["/power_bank_black.png", "/power_bank_pink.png"],
    description: "Compact and powerful power bank for long-lasting use.",
    stock: 75,
    rating: 1.7,
    tags: ["Long battery life", "Light", "Portable"],
    discountPercentage: 25,
  },
  {
    id: 10,
    name: "20,000mAh Quick Charge Power Bank",
    category: "Power Banks",
    price: 34.99,
    image: "/power_bank_pink.png",
    images: ["/power_bank_pink.png", "/power_bank_black.png"],
    description: "High-capacity power bank with quick charge support.",
    stock: 50,
    rating: 4.4,
    discountPercentage: 15,
    tags: ["Long battery life", "Light", "Portable"],
  },
];

export default products;
