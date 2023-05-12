import { menuArray } from "./data.js"
const itemArray = []
const details = []
let count = {};
const orderItem = document.getElementById('order-item')
const orderItemPrice = document.getElementById('order-item-price')
const orderItemTotal = document.getElementById('order-total')

document.addEventListener('click', function(e){
  if (e.target.dataset.add) {
    handleClickAddBtn(e.target.dataset.add)
    getSummaryHtml()
  } else if (e.target.dataset.remove) {
    removeItem()
    getSummaryHtml()
    render()
  } else if (e.target.id === "complete-order-btn") {
    completeOrder()
  } else if (e.target.id === "pay-btn") {
    pay()
  }
})


function handleClickAddBtn(itemId) {
  document.getElementById('feed-two').style.display = "block"

  const item = menuArray[itemId];
  itemArray.push(item);

  count[item.id] = (count[item.id] || 0) + 1;
  console.log(count)
}

function getMenuHtml() {
  let menuHtml = ``

  menuArray.forEach(function(item){
    menuHtml += `
    <div class="menu-item">
      <div class="menu-item-full-info" id="item">
        <img class="menu-item-icon" src="images/${item.name}.png">
        <div class="menu-item-info">
          <h2>${item.name}</h2>
          <p>${item.ingredients}</p>
          <h2>$${item.price}</h2>
        </div>
      </div>
      <i class="add-btn" data-add="${item.id}">+</i>
    </div>
    <hr>
      `
  })

  return menuHtml
}

function getSummaryHtml() {
  let orderName = ``
  let orderPrice = ``
  let orderTotal = ``
  let itemCount = {};

  itemArray.forEach(function(item){
    itemCount[item.id] = (itemCount[item.id] || 0) + 1;

    if (itemCount[item.id] === 1) {
      orderName += `
        <div class="order-item-display">
          <h2>${item.name} - x${itemCount[item.id] * count[item.id]}</h2>
          <i class="remove-btn" data-remove="${item.id}">Remove</i>
        </div>
      `;
      orderPrice += `
        <h2>$${item.price * count[item.id]}</h2>
      `;
    }
  });

  orderTotal = `
    <h2>Total</h2>
    <h2>$${itemArray.reduce((total, item) => total + item.price, 0)}</h2>
  `;

  orderItem.innerHTML = orderName
  orderItemPrice.innerHTML = orderPrice
  orderItemTotal.innerHTML = orderTotal

  const summaryHtml = orderItem + orderItemPrice + orderItemTotal

  return summaryHtml
}

function removeItem() {
  const removedItem = itemArray.pop();
  count[removedItem.id] = (count[removedItem.id] || 0) - 1;
}

function completeOrder() {
  document.getElementById('modal').style.display = 'flex'
}

function pay() {
  const name = document.getElementById('name').value
  const cardNumber = document.getElementById('card-number').value
  const ccv = document.getElementById('ccv').value
  let detailsHtml = ``

  details.push(
    {
      name: name,
      cardNumber: cardNumber,
      ccv: ccv,
    })

  details.forEach(function(d){
    detailsHtml = `
    <div class="submitted-payment">
      <h2>Thanks, ${d.name}! Your order is on its way!</h2>
    </div>
    `
  })

  document.getElementById('feed-two').innerHTML = detailsHtml
  document.getElementById('modal').style.display = 'hidden'
}

document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById('modal').style.display = 'none'
})


function render() {
  document.getElementById('feed-one').innerHTML = getMenuHtml()
}

render()
