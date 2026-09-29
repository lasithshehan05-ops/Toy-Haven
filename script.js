/* Toy Haven - simple JavaScript for beginners */

// Product information is stored in a JavaScript array, as requested.
const products = [
  { id: 1, name: "Red Racer", category: "Diecast Cars", price: 6.99, image: "https://titantoyz.com/cdn/shop/files/BMW1.webp?v=1758934246&width=1445", description: "A bright red Hot Wheels style racer made for fast-looking collections." },
  { id: 2, name: "Blue Speedster", category: "Diecast Cars", price: 7.49, image: "https://collectiblepilot.com/assets/images/products/hot-wheels-1967-camaro-diecast-car/hot-wheels-1967-camaro-diecast-car-1.webp", description: "A cool blue speedster that adds a classic racing look to a collection." },
  { id: 3, name: "Golden Muscle", category: "Diecast Cars", price: 8.49, image: "https://i.ebayimg.com/images/g/hAEAAOSw45pmgdYF/s-l1200.jpg", description: "A golden muscle-style diecast car with a bold collector look." },
  { id: 4, name: "Purple Track Star", category: "Diecast Cars", price: 7.99, image: "https://diecasttoyzsg.com/cdn/shop/files/k3ldszyz4bczja4mztwe.webp?v=1752741845", description: "A purple track star designed for display and imaginary races." },
  { id: 5, name: "Turbo Street Car", category: "Diecast Cars", price: 6.49, image: "https://collectiblepilot.com/assets/images/products/hot-wheels-1967-camaro-diecast-car/hot-wheels-1967-camaro-diecast-car-1.webp", description: "A simple street-inspired Hot Wheels style model for new collectors." },
  { id: 6, name: "Classic Red Coupe", category: "Diecast Cars", price: 5.99, image: "https://titantoyz.com/cdn/shop/files/BMW1.webp?v=1758934246&width=1445", description: "A small red coupe that fits nicely into a starter collection." }
];

// Get saved cart or create an empty one.
function getCart() {
  return JSON.parse(localStorage.getItem("toyHavenCart")) || [];
}

// Save the cart in localStorage.
function saveCart(cart) {
  localStorage.setItem("toyHavenCart", JSON.stringify(cart));
  updateCartCount();
}

// Add one product to the cart.
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(product => product.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }

  saveCart(cart);
  alert("Car added to cart!");
}

// Reusable function used on several pages.
function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

// Update the small cart number in the navigation.
function updateCartCount() {
  const countElement = document.getElementById("cartCount");
  if (!countElement) return;

  let total = 0;
  getCart().forEach(item => total += item.quantity);
  countElement.textContent = total;
}

// Mobile menu.
function setupMenu() {
  const button = document.getElementById("menuButton");
  const links = document.getElementById("navLinks");

  if (button && links) {
    button.addEventListener("click", function () {
      links.classList.toggle("show");
    });
  }
}

// Simple scroll reveal animation.
function setupReveal() {
  const items = document.querySelectorAll(".reveal");

  function checkItems() {
    items.forEach(item => {
      if (item.getBoundingClientRect().top < window.innerHeight - 50) {
        item.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkItems);
  checkItems();
}

// Add the current year to the footer.
function setupYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  setupMenu();
  setupReveal();
  setupYear();
  updateCartCount();
});

// Register the service worker when hosted on a web server such as GitHub Pages.
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js");
}
