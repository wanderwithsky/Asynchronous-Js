// MINI PROJECT FOR EMAIL, PASS VALIDATE

let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", function (dets) {
    dets.preventDefault()

    document.querySelector("#emailError").textContent = ""
    document.querySelector("#passError").textContent = ""

    let isValid = true;
    let result = document.getElementById("result");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans = emailRegex.test(email.value)
    let passwordans = passwordRegex.test(password.value)
    
    if (!emailans) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordans) {
        document.querySelector("#passError").textContent = "Password is incorrect";
        document.querySelector("#passError").style.display = "initial";
        isValid = false;
    }

    if (isValid === true){
        result.style.display = "block";
        result.textContent = "Login Successful";
        result.className = "result success";
    }
})