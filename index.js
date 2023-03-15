import { menuArray } from "./data.js"

document.addEventListener('click', function(e){
  if (e.target.dataset.add) {
    handleClickAddBtn(e.target.dataset.add)
    getSummaryHtml(e.target.dataset.add)
  }
})

function handleClickAddBtn(itemId) {
  document.getElementById(`order-${itemId}`).style.display = 'block'
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
  let summaryHtml = ``

  menuArray.forEach(function(item){
      summaryHtml = `
        <section id="order-${item.id}" class="hidden">

        <h3>Your Order</h3>
        <div class="order-item">
          <div id="order-item" class="order-item-display">
            <h2>${item.name}</h2>
            <i class="remove-btn">Remove</i>
          </div>
          <div id="order-item-price">
            <h2>$${item.price}</h2>
          </div>
        </div>

        <span>__________________________________________________________________________</span>

        <div class="order-total">
          <h2>Total</h2>
          <h2>$${item.price}</h2>
        </div>

        <button class="complete-order-btn">Complete Order</button>

      </section>
      `
  })

  return summaryHtml
}

function render() {
  document.getElementById('feed-one').innerHTML = getMenuHtml()
  document.getElementById('feed-two').innerHTML = getSummaryHtml()
}


console.log(getSummaryHtml())

render()
