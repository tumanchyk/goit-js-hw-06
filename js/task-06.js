const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', ()=>{
    const lengthOfInputValue = inputEl.dataset.length;
    inputEl.value.length == lengthOfInputValue ? inputEl.classList.add('valid') : inputEl.classList.add('invalid')
})

