
let cart = JSON.parse(localStorage.getItem('cart')) || [];

    localStorage.setItem('cart', JSON.stringify(cart));