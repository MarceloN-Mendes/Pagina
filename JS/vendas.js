function Finalizar() {
  alert("Sua compra foi finalizada!");
}

const cartItems = {}; // Objeto para armazenar os itens do carrinho

// Função para adicionar um item ao carrinho
function addToCart(id, name, price) {
  if (cartItems[id]) {
    cartItems[id].quantity++;
  } else {
    cartItems[id] = { name, price, quantity: 1 };
  }
  updateCart();
}

// Função para remover um item do carrinho
function removeFromCart(id) {
  delete cartItems[id];
  updateCart();
}

// Função para atualizar o carrinho na interface
function updateCart() {
  const cartTable = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartTable.innerHTML = ''; // Limpa o carrinho
  let total = 0;

  for (const id in cartItems) {
    const item = cartItems[id];
    total += item.price * item.quantity;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
      <td><button onclick="removeFromCart('${id}')">Remover</button></td>
    `;
    cartTable.appendChild(row);
  }

  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona eventos aos botões de adicionar ao carrinho
document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(id, name, price);
  });
});