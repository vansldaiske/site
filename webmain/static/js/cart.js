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
          <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
            <div>
              <strong>${item.name}</strong>
              <small class="text-muted d-block">${item.price} $ × ${item.quantity}</small>
            </div>
            <div class="text-end">
              <span class="d-block fw-bold mb-1">${subtotal} $</span>
              <div class="d-flex align-items-center justify-content-end gap-1">
                <button class="btn btn-sm btn-outline-secondary decrease-qty" data-id="${id}" title="decrease"><i class="fas fa-minus"></i></button>
                <button class="btn btn-sm btn-outline-secondary increase-qty" data-id="${id}" title="increase"><i class="fas fa-plus"></i></button>
                <button class="btn btn-sm btn-outline-danger remove-item ms-2" data-id="${id}" title="remove"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
    `;
    }

    cartTotal.textContent = `${total} $`;
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? "inline-block" : "none";

    // ➖ Decrease
    document.querySelectorAll(".decrease-qty").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        if (cart[id]) {
          if (cart[id].quantity === 1) {
            const confirmed = confirm(`Delete "${chart[id].name}" from the trash?`);
            if (!confirmed) return;
            delete cart[id];
          } else {
            cart[id].quantity--;
          }
          renderCart();
        }
      });
    });


    // ➕ Increase
    document.querySelectorAll(".increase-qty").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        if (cart[id]) {
          cart[id].quantity++;
          renderCart();
        }
      });
    });

    // ❌ Remove
    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        delete cart[id];
        renderCart();
      });
    });

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