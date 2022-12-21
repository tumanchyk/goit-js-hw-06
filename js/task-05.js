
const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

 inputEl.addEventListener('input', ()=>{
    if(inputEl.value.length == 0){
    return outputEl.textContent = "Anonymous"
    } 
     outputEl.textContent = inputEl.value  
 }
 )