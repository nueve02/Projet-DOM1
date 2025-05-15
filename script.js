


function updateTotal() {
  const products = document.querySelectorAll(".card-body");
  let total = 0;
  products.forEach((product) => {
    const price = parseFloat(
      product.querySelector(".unit-price").textContent
        .replace("$", "")
        .trim()
    );
    const quantity = parseInt(
      product.querySelector(".quantity").textContent.trim()
    );
    total += price * quantity;
  });
  document.querySelector(".total").textContent = total + " $";
}


window.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  const heartButtons = document.querySelectorAll(".fa-heart");

  
  plusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantitySpan = btn.parentElement.querySelector(".quantity");
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  });

  
  minusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantitySpan = btn.parentElement.querySelector(".quantity");
      let currentQty = parseInt(quantitySpan.textContent);
      if (currentQty > 0) {
        quantitySpan.textContent = currentQty - 1;
        updateTotal();
      }
    });
  });

  
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cardBody = btn.closest(".card-body");
      cardBody.remove();
      updateTotal();
    });
  });

  
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("text-danger"); // rouge si aimé
    });
  });

  updateTotal();
});


document.querySelectorAll('.btn-plus').forEach(btn => {
  btn.addEventListener('click', () => {
    const quantitySpan = btn.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
  });
});

document.querySelectorAll('.btn-minus').forEach(btn => {
  btn.addEventListener('click', () => {
    const quantitySpan = btn.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });
});




