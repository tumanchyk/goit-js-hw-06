const rangeInputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector("#text")

rangeInputEl.addEventListener('input', ()=>{
 textEl.style.fontSize = `${rangeInputEl.value}px`
})