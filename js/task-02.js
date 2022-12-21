const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')
console.log(ingredientsEl)

const makeProductItem = (arr) => {
    return arr.map(item => {      
    const productItem = document.createElement('li')
    productItem.textContent = item;
    productItem.classList.add('item')
    return productItem    
  })
}
const products = makeProductItem(ingredients)
ingredientsEl.append(...products)