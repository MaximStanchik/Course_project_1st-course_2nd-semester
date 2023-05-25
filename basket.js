// Получаем кнопку для добавления товара в корзину
const addToCartBtn = document.getElementById('add-to-cart-btn');

// Получаем корзину и список товаров в корзине
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');

// Инициализируем переменную для хранения общей стоимости товаров в корзине
let cartTotal = 0;

// Функция для добавления товара в корзину
function addToCart(itemName, itemPrice) {
  // Создаем новый элемент списка для товара
  const cartItem = document.createElement('li');
  cartItem.innerHTML = `${itemName}: ${itemPrice} руб.`;

  // Добавляем элемент списка в корзину
  cartItems.appendChild(cartItem);

  // Обновляем общую стоимость товаров в корзине
  cartTotal += itemPrice;
  document.getElementById('cart-total').innerHTML = `Итого: ${cartTotal} руб.`;
}

// Обработчик клика на кнопку для добавления товара в корзину
addToCartBtn.addEventListener('click', function() {
  // Вызываем функцию для добавления товара в корзину
  addToCart('Название товара', 100);
  
  // Показываем корзину
  cart.style.display = 'block';
});