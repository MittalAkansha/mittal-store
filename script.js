
const products = [
    { name: "Fresh Apples", price: 120, category: "Fruits", emoji: "🍎" },
    { name: "Bananas", price: 50, category: "Fruits", emoji: "🍌" },
    { name: "Potatoes", price: 30, category: "Vegetables", emoji: "🥔" },
    { name: "Tomatoes", price: 40, category: "Vegetables", emoji: "🍅" },
    { name: "Fresh Milk", price: 60, category: "Dairy", emoji: "🥛" },
    { name: "Bread", price: 40, category: "Bakery", emoji: "🍞" }
];

const productContainer = document.getElementById("productContainer");
const categoryContainer = document.getElementById("categoryContainer");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");

let cart = 0;

// Display grocery products
function displayProducts(items) {
    productContainer.innerHTML = "";

    items.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "product-card";

        
card.innerHTML = `
    <div class="product-emoji">${product.emoji}</div>
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <button class="details-button">View Details</button>
    <button class="add-button">Add to Cart</button>
`;

card.querySelector(".details-button").addEventListener("click", function() {
    document.getElementById("modalName").textContent = product.name;
    document.getElementById("modalPrice").textContent = "Price: ₹" + product.price;
    document.getElementById("modalCategory").textContent = "Category: " + product.category;

    document.getElementById("productModal").style.display = "flex";
});

        
card.querySelector(".add-button").addEventListener("click", function() {
    cart++;
    cartCount.textContent = cart;
});

        productContainer.appendChild(card);
    });
}

// Display grocery categories
const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery"];

categories.forEach(function(category) {
    const button = document.createElement("button");
    button.textContent = category;

    button.addEventListener("click", function() {
        if (category === "All") {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(function(product) {
                return product.category === category;
            });

            displayProducts(filteredProducts);
        }
    });

    categoryContainer.appendChild(button);
});

// Search grocery products
searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchText);
    });

    displayProducts(filteredProducts);
});

// Shop Now button
document.getElementById("shopButton").addEventListener("click", function() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

// Show products when the website loads
displayProducts(products);


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
}

document.getElementById("nextSlide").addEventListener("click", function() {
    showSlide(currentSlide + 1);
});

document.getElementById("prevSlide").addEventListener("click", function() {
    showSlide(currentSlide - 1);
});


document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("productModal").style.display = "none";
});

document.getElementById("productModal").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

document.getElementById("modalAddToCart").addEventListener("click", function() {
    cart++;
    cartCount.textContent = cart;
    document.getElementById("productModal").style.display = "none";
});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
        const faqItem = question.parentElement;
        faqItem.classList.toggle("open");

        const symbol = question.querySelector("span");

        if (faqItem.classList.contains("open")) {
            symbol.textContent = "−";
        } else {
            symbol.textContent = "+";
        }
    });
});