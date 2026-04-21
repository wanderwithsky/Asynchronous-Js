// window.matchMedia('(prefers-color-scheme: dark)')

let toggleThemeBtn = document.querySelector("#toggleTheme")

toggleThemeBtn.addEventListener("click", () => {
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        document.body.classList.add("light") //toggle can be used too
    } else{
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
})