const inputEl = document.querySelector('input')
const btnCreateEl = document.querySelector('[data-create]')
const btnDestroyEl = document.querySelector('[data-destroy]')
const boxesEl = document.querySelector('#boxes')

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount){
  amount = inputEl.value;
  const collection = [];
  for( let i = 0; i < amount; i+=1){
    const divEl = document.createElement('div') 
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + 10 * i}px`
    divEl.style.height = `${30 + 10 * i}px`
    collection.push(divEl)  
  }
  boxesEl.append(...collection)
}

function destroyBoxes(){
  boxesEl.innerHTML = ''
  inputEl.value = 0
}

