import { menuArray } from "./data.js"

console.log("hello")

function getFeedHtml() {
  let menuHtml = ``

  menuArray.forEach(function(item){
    console.log(item)
    menuHtml += `
    <div class="menu-item">
      <div class="menu-item-full-info">
        <img class="menu-item-icon" src="images/${item.name}.png">
        <div class="menu-item-info">
          <h2>${item.name}</h2>
          <p>${item.ingredients}</p>
          <h3>$${item.price}</h3>
        </div>
      </div>
      <i>+</i>
    </div>
    <span class="spacer">_________________________________________________________________________</span>
    `
  })
  return menuHtml
}

function render() {
  document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
