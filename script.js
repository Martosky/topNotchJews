const cards = document.getElementById("card-product");
const totaliTemInCart = document.getElementById("total-n-item");
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("total");
const cartItem = document.getElementById("items-in-cart");
const counter = document.getElementById("cart-counter")


const cardInfo = [
    {
        id: 0,
        img: "watches/watch1.webP",
        alt: "watch photo",
        title: "Patek Phil",
        price: "2,000.00",
        availability: true
    },
    {
        id: 1,
        img: "watches/watch2.webP",
        alt: "watch photo",
        title: "Patek Phil",
        price: "3,100.00",
        availability: false
    },
    {
        id: 2,
        img: "watches/watch3.webP",
        alt: "watch photo",
        title: "Patek Phil",
        price: "1,500.00",
        availability: true
    },
    {
        id: 3,
        img: "watches/watch7.webP",
        alt: "watch photo",
        title: "Patek Phil",
        price: "1,800.00",
        availability: true
    },
    {
        id: 4,
        img: "watches/watch8.webP",
        alt: "watch photo",
        title: "Patek Phil",
        price: "12,000.0",
        availability: true
    },
    {
        id: 5,
        img: "watches/watch6.webP",
        alt: "watch photo",
        title: "Rolex d",
        price: "22,000.0",
        availability: true
    },
    {
        id: 6,
        img: "watches/watch7.webP",
        alt: "watch photo",
        title: "Rolex e",
        price: "4,000.00",
        availability:true
    },
    {
        id: 7,
        img: "watches/watch9.webP",
        alt: "watch photo",
        title: "Rolex e",
        price: "3,200.00",
        availability: true
    },
    {
        id: 8,
        img: "watches/watch10.webP",
        alt: "watch photo",
        title: "Rolex e",
        price: "7,100.00",
        availability: false
    },
    {
        id: 9,
        img: "watches/watch11.webP",
        alt: "watch photo",
        title: "Rolex e",
        price: "4,000.00",
        availability: true
    },
    {
        id: 10,
        img: "watches/watch12.webP",
        alt: "watch photo",
        title: "Rolex e",
        price: "4,000.00",
        availability: true
    },
    {
        id: 11,
        img: "watches/watch13.webP",
        alt: "watch photo",
        title: "Rolex e",
        price: "4,000.00",
        availability: false
    }
];

cardInfo.forEach(elem => {
    cards.innerHTML += `<div class="card-pro" id="${elem.id}">
    <img src="${elem.img}" alt="${elem.alt}" class="card-photo"/>
    <p class="product-name">${elem.title}</p>
    <p class="price" id=${elem.id}>$${elem.price}</p>
    <button class="add-btn" id="addBtn" title="Add to cart"><i class="fa-solid fa-basket-shopping"></i></button>
    <div id="produc-update">${elem.availability?"Available":"Sold Out"}</div>
    </div>`
})

