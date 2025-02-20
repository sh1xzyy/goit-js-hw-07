const registerForm = document.querySelector(".login-form")   

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = event.target.elements.email.value.trim()
    const password = event.target.elements.password.value.trim()

    if(email === "" || password === ""){
        return alert("All form fields must be filled in")
    }
    const obj = {
        email,
        password,
    }
    console.log(obj);
    registerForm.reset()
})