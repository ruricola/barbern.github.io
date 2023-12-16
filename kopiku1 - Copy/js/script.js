// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Saat menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// menghilangkan nav denagn klik di luar
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

function addToCart(itemName, price) {
    const cartItem = {
        name: itemName,
        price: price,
    };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartList = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    let total = 0;

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Harga: ${item.price}K`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
};

displayCart();

function checkout() {
    alert('Terima kasih telah melakukan checkout!');
    
    // Mengosongkan tampilan keranjang
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    localStorage.removeItem('cartItems');
            displayCart();
};

