import { menuArray } from "./data.js"
const itemArray = []
const orderItem = document.getElementById('order-item')
const orderItemPrice = document.getElementById('order-item-price')
const orderItemTotal = document.getElementById('order-total')

document.addEventListener('click', function(e){
  if (e.target.dataset.add) {
    handleClickAddBtn(e.target.dataset.add)
    getSummaryHtml()
  } else if (e.target.dataset.remove) {
    removeItem()
  } else if (e.target.id) {
    completeOrder()
  } else if (e.target.id) {
    console.log(e.target.id)
    pay()
  }
})

function handleClickAddBtn(itemId) {
  document.getElementById('feed-two').style.display = "block"

  itemArray.push(menuArray[itemId])
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
    <span class="spacer">_________________________________________________________________________</span>
      `
  })

  return menuHtml
}

function getSummaryHtml() {
  let orderName = ``
  let orderPrice = ``
  let orderTotal = ``

  itemArray.forEach(function(item){
    orderName += `
    <h2>${item.name}</h2>
    <i class="remove-btn" data-remove="${item.id}">Remove</i>
    `

    orderPrice += `
    <h2>$${item.price}</h2>
    `

    orderTotal = `
    <h2>$${item.price}</h2>
    `
  })

  orderItem.innerHTML = orderName
  orderItemPrice.innerHTML = orderPrice
  orderItemTotal.innerHTML = orderTotal
  let summaryHtml = orderItem + orderItemPrice + orderItemTotal

  return summaryHtml
}

function removeItem() {
  itemArray.pop()
  render()
}

function completeOrder() {
  document.getElementById('modal').style.display = 'flex'
}

function pay() {
  console.log("pay")
}

function render() {
  document.getElementById('feed-one').innerHTML = getMenuHtml()
  document.getElementById('feed-two').innerHTML = getSummaryHtml()
}

render()
