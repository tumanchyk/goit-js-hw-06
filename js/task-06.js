const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(ev){
    if(ev.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else if(ev.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}

//var-2
// inputEl.addEventListener('blur', ()=>{
//     const lengthOfInputValue = inputEl.dataset.length;
//     inputEl.value.length == lengthOfInputValue ? inputEl.classList.add('valid') : inputEl.classList.add('invalid')
// })