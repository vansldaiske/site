  const cart = {};
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);

      if (!cart[id]) {
        cart[id] = { name, price, quantity: 1 };
      } else {
        cart[id].quantity++;
      }
      renderCart();
    });
  });

  function renderCart() {
    let total = 0;
    let count = 0;
    cartItems.innerHTML = "";

    for (const id in cart) {
      const item = cart[id];
      const subtotal = item.price * item.quantity;
      total += subtotal;
      count += item.quantity;
      cartItems.innerHTML += `
        <div class="d-flex justify-content-between mb-2">
          <div>
            <strong>${item.name}</strong>
            <small class="text-muted d-block">${item.price} ₽ × ${item.quantity}</small>
          </div>
          <span>${subtotal} ₽</span>
        </div>
      `;
    }

    cartTotal.textContent = `${total} ₽`;
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? "inline-block" : "none";
  }

document.querySelectorAll('.btn-buy-now').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const price = btn.dataset.price;

    const query = new URLSearchParams({
      id: id,
      name: name,
      price: price
    });

    window.location.href = `/payment?${query.toString()}`;
  });
});
