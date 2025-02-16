
  
  import { Product } from './script1.js';




class Pro extends Product {
  constructor() {
    super(); // استدعاء الكونستركتور الخاص بـ Product
    console.log('تم إنشاء كائن من كلاس Pro');
  }

  showMessage() {
    console.log('تم التوريث بنجاح من Product في script2.js 🎉');
  }
}

const product1 = {
  imageSrc: "../assets/24.jpg",
  name: "Gold Ring",
  price: 15868,
  weight: "65g",
  description: "A beautifully crafted gold earrings.",
};



const product = new Pro();
str = product.createProductCardElement(); // استدعاء دالة من كلاس Product
product.populateProductDetails(str,product1);


// const product2 = new Product();
// productStructer2 = product2.createProductCardElement();
// product2.populateProductDetails(productStructer2,product02);

/*
  // Example usage:
  
  const product1 = {
    imageSrc: "../assets/24.jpg",
    name: "Gold Ring",
    price: 15868,
    weight: "65g",
    description: "A beautifully crafted gold earrings.",
  };
  const product2 = {
    imageSrc: "../assets/21.jpg",
    name: "Gold earnning",
    price: 170150,
    weight: "17g",
    description: "A beautifully crafted gold ring.",
  };
  const product3 = {
    imageSrc: "../assets/20.jpg",
    name: "Gold Ring",
    price: 150,
    weight: "18g",
    description: "A beautifully crafted gold ring.",
  };
  const product4 = {
    imageSrc: "../assets/19.jpg",
    name: "Gold Ring",
    price: 15868,
    weight: "65g",
    description: "A beautifully crafted gold ring.",
  };
  const product5 = {
    imageSrc: "../assets/9.jpg",
    name: "Gold earnning",
    price: 170150,
    weight: "17g",
    description: "A beautifully crafted gold ring.",
  };
  const product6 = {
    imageSrc: "../assets/8.jpg",
    name: "Gold Ring",
    price: 150,
    weight: "18g",
    description: "A beautifully crafted gold ring.",
  };
  
  const product7 = {
    imageSrc: "../assets/9.jpg",
    name: "Gold earnning",
    price: 170150,
    weight: "17g",
    description: "A beautifully crafted gold ring.",
  };
  const product8 = {
    imageSrc: "../assets/8.jpg",
    name: "Gold Ring",
    price: 150,
    weight: "18g",
    description: "A beautifully crafted gold ring.",
  };
  
  const product9 = {
    imageSrc: "../assets/9.jpg",
    name: "Gold earnning",
    price: 170150,
    weight: "17g",
    description: "A beautifully crafted gold ring.",
  };
  const product10 = {
    imageSrc: "../assets/27.jpg",
    name: "Gold Ring",
    price: 150,
    weight: "18g",
    description: "A beautifully crafted gold ring.",
  };
  
  const product11 = {
    imageSrc: "../assets/26.jpg",
    name: "Gold earnning",
    price: 170150,
    weight: "17g",
    description: "A beautifully crafted gold ring.",
  };
  const product12 = {
    imageSrc: "../assets/25.jpg",
    name: "Gold Ring",
    price: 150,
    weight: "18g",
    description: "A beautifully crafted gold ring.",
  };

  */