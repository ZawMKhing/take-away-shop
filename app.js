var noodle, burger, total, sandwich;


noodle = 4.95;
burger = 3.95;
sandwich = 2.95;
total = 0;


document.getElementById('noodleBtn').addEventListener('click', (event) => {
  let element_shopping_cart = document.getElementById('shopping_cart');
  let new_li = document.createElement('li');
  new_li.innerText = noodle;

  element_shopping_cart.appendChild(new_li);
  total = (typeof total === 'number' ? total : 0) + noodle;
  let element_cart = document.getElementById('cart');
  element_cart.innerText = total;

});

document.getElementById('burgerBtn').addEventListener('click', (event) => {
  let element_shopping_cart2 = document.getElementById('shopping_cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = burger;

  element_shopping_cart2.appendChild(new_li2);
  total = (typeof total === 'number' ? total : 0) + burger;
  let element_cart2 = document.getElementById('cart');
  element_cart2.innerText = total;

});

document.getElementById('sandwichBtn').addEventListener('click', (event) => {
  let element_shopping_cart3 = document.getElementById('shopping_cart');
  let new_li3 = document.createElement('li');
  new_li3.innerText = sandwich;

  element_shopping_cart3.appendChild(new_li3);
  total = (typeof total === 'number' ? total : 0) + sandwich;
  let element_cart3 = document.getElementById('cart');
  element_cart3.innerText = total;

});