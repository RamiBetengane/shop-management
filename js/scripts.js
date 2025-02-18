class Product {
  // Function to create the product card structure
  createProductCardElement() {
    const colDiv = document.createElement("div");
    colDiv.className = "col mb-5";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    const img = document.createElement("img");
    img.className = "card-img-top";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body p-4";
    const textCenterDiv = document.createElement("div");
    textCenterDiv.className = "text-center";

    const h5 = document.createElement("h5");
    h5.className = "fw-bolder";

    const priceP = document.createElement("p");

    textCenterDiv.appendChild(h5);
    textCenterDiv.appendChild(priceP);
    cardBodyDiv.appendChild(textCenterDiv);

    const exclamationIcon = document.createElement("i");
    exclamationIcon.className = "bi bi-exclamation-circle ms-3";
    exclamationIcon.style.fontSize = "1.5rem";
    exclamationIcon.style.color = "gray";
    exclamationIcon.style.cursor = "pointer";
    exclamationIcon.setAttribute("data-bs-toggle", "modal");
    exclamationIcon.setAttribute("data-bs-target", "#productModal");

    const cardFooterDiv = document.createElement("div");
    cardFooterDiv.className =
      "card-footer p-4 pt-0 border-top-0 bg-transparent";
    const footerDiv = document.createElement("div");
    footerDiv.className = "d-flex justify-content-between align-items-center";

    const reserveBtn = document.createElement("a");
    reserveBtn.className = "btn btn-outline-dark mt-auto";
    reserveBtn.href = "#";
    reserveBtn.innerText = "Reserve Now";

    const favoriteIcon = document.createElement("i");
    favoriteIcon.className = "bi bi-heart favorite-btn";
    favoriteIcon.style.fontSize = "1.5rem";
    favoriteIcon.style.cursor = "pointer";

    footerDiv.appendChild(reserveBtn);
    footerDiv.appendChild(favoriteIcon);
    footerDiv.appendChild(exclamationIcon);
    cardFooterDiv.appendChild(footerDiv);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooterDiv);
    colDiv.appendChild(cardDiv);

    return { colDiv, img, h5, priceP, exclamationIcon, favoriteIcon };
  }

  // Function to populate the product card with details
  populateProductDetails(elementRefs, product) {
    elementRefs.img.src = product.imageSrc;
    elementRefs.h5.innerText = product.name;
    elementRefs.priceP.innerText = `$${product.price}`;

    elementRefs.exclamationIcon.addEventListener("click", () => {
      document.getElementById("productModalLabel").innerText = product.name;
      document.querySelector(
        "#productModal .modal-body p"
      ).innerText = `Price: ${product.price}\nWeight: ${product.weight}\nDescription: ${product.description}`;
    });

    elementRefs.favoriteIcon.onclick = () =>
      toggleFavorite(elementRefs.favoriteIcon);

    document
      .getElementById("products-container")
      .appendChild(elementRefs.colDiv);
  }
}



const product01 = {
  imageSrc: "../assets/50.jpg",
  name: "Gold Ring",
  price: 15868,
  weight: "65g",
  description: "A beautifully crafted gold ring.",
};

const product02 = {
  imageSrc: "../assets/70.jpg",
  name: "Gold earnning",
  price: 170150,
  weight: "17g",
  description: "A beautifully crafted gold ring.",
};
const product03 = {
  imageSrc: "../assets/73.jpg",
  name: "Gold Ring",
  price: 150,
  weight: "18g",
  description: "A beautifully crafted gold ring.",
};
const product04 = {
  imageSrc: "../assets/50.jpg",
  name: "Gold Ring",
  price: 15868,
  weight: "65g",
  description: "A beautifully crafted gold ring.",
};
const product05 = {
  imageSrc: "../assets/70.jpg",
  name: "Gold earnning",
  price: 170150,
  weight: "17g",
  description: "A beautifully crafted gold ring.",
};
const product06 = {
  imageSrc: "../assets/73.jpg",
  name: "Gold Ring",
  price: 150,
  weight: "18g",
  description: "A beautifully crafted gold ring.",
};
const product07 = {
  imageSrc: "../assets/73.jpg",
  name: "Gold Ring",
  price: 150,
  weight: "18g",
  description: "A beautifully crafted gold ring.",
};const product08 = {
  imageSrc: "../assets/73.jpg",
  name: "Gold Ring",
  price: 150,
  weight: "18g",
  description: "A beautifully crafted gold ring.",
};

window.onload = function() {
  // إنشاء كائنات المنتجات
  const products = [product01, product02, product03, product04, product05, product06,product07,product08];
  
  // إنشاء كائن جديد من الفئة Product
  const productInstance = new Product();

  // تكرار المنتجات وإضافتها للصفحة
  products.forEach(product => {
    const productElement = productInstance.createProductCardElement();
    productInstance.populateProductDetails(productElement, product);
  });
};

function toggleFavorite(icon) {
  // إذا كانت الأيقونة تحتوي على الفئة bi-heart، استبدلها بـ bi-heart-fill لجعلها حمراء. 
  icon.classList.toggle("bi-heart");
  icon.classList.toggle("bi-heart-fill");
}
