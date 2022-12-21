const formEl = document.querySelector(".login-form")
formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
event.preventDefault();
//var-1
// const formElements = event.currentTarget.elements;
// const email = formElements.email.value;
// const password = formElements.password.value;
// if(email === "" || password === ""){
//     return alert("All fields should be filled")
// }
// console.log({
//     email,
//     password,
// })

//var-2
const {elements: {email, password} } = event.currentTarget

if(email.value === "" || password.value === ""){
    return alert("All fields should be filled")
}
console.log({
    email: email.value,
    password: password.value,
})


event.currentTarget.reset()
}

