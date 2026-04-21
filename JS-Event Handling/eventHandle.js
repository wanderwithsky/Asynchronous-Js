document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// let abcd = document.querySelector("#abcd")

// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor = "yellow";
// });
// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor = "red";
// });

// window.addEventListener("mousemove", function(dets){
//     abcd.style.top = dets.clientY + "px"
//     abcd.style.left = dets.clientX + "px"
// })

//Event Bubbling --> jispe event aayega agar uspe listener nahi hua to uske parent pe listener aayega

// let ul = document.querySelector("ul")

// ul.addEventListener("click", function(dets){
//     // dets.target.style.textDecoration = "line-through"
//     dets.target.classList.toggle("lt")
// })

// let inp = document.querySelector("input")
// let span = document.querySelector("span")

// inp.addEventListener("input", function(){
//     // console.log(`input length: ${inp.value.length}`)
//     let left = 20 - inp.value.length
//     span.textContent = left
//     if(left < 0){
//         span.style.color = "red"
//         inp.style.color = "red"
//     }
//     else{
//         span.style.color = "white"
//         inp.style.color = "black"
//     }
// })

let naam = document.querySelector("#name")
let form = document.querySelector("form")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let ans = regex.test("a@a.a")
    console.log(ans);

    // if (naam.value.length > 2) {
    //     document.querySelector("#hide").style.display = "none"
    // }
    // else {
    //     document.querySelector("#hide").style.display = "initial"
    // }
})

