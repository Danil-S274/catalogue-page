const products = [
    { id: 1, name: "JavaScript Book", category: "books" },
    { id: 2, name: "Laptop", category: "electronics" },
    { id: 3, name: "CSS Guide", category: "books" }
];

const catalogue = document.getElementById("catalogue");
const categorySelect = document.getElementById("category");
const cartCount = document.getElementById("cart-count");

let cart = 0;

function renderProducts(filter) {
    catalogue.innerHTML = "";

    products
        .filter(product => filter === "all" || product.category === filter)
        .forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <button>Add to cart</button>
            `;

            card.querySelector("button").addEventListener("click", () => {
                cart++;
                cartCount.textContent = cart;
            });

            catalogue.appendChild(card);
        });
}

categorySelect.addEventListener("change", (event) => {
    renderProducts(event.target.value);
});

renderProducts("all");
