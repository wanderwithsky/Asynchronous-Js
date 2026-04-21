// element node ka element ho sakta hai but text node ka nahi ho sakta hai. text node ke andar text hota hai, element node ke andar element hota hai.

{/* <body>
    <p>Lorem ipsum <b>dolor</b> sit amet.</p>
    <div>
        hello <span>beautiful</span> world
    </div>
</body> */}

// beautiful is text node, hello and world is element node

// document.getElementById("demo");
// document.querySelector("#demo");
// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";
// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//     p.style.color = "maroon";
// })

// // to double click
// p.addEventListener("dblclick", function () {
//     p.style.color = "pink";
// })

// let input = document.querySelector("input")

// input.addEventListener("input", function (val) {
//     if (val.data !== null) {
//         console.log(val.data);
//     }
// })
// input.addEventListener("input", function(elem){
//     console.log(elem.target.value);  or elem.data
// }) 

// change event ka matlb hota hai ki jab input se focus hat jaye tabhi change event trigger hota hai. input event ka matlab hota hai ki jab bhi input me kuch type ho ya delete ho tabhi input event trigger hota hai.

// let h3 = document.querySelector("h3");
// let select = document.querySelector("select");

// select.addEventListener("change", function () {
//     console.log(`Device selected:  ${select.value}`)
//     h3.textContent = `Device selected:  ${select.value}` // use template literals instead of concatenation
// })

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(data){
//     // h1.textContent = data.key;
//     console.log(data);
// })

// let h1 = document.getElementById("display");

// window.addEventListener("keydown", function (e) {
//     h1.textContent = e.key;
// });
// mini project for printing keys on browser


let int = setInterval(() => {
    alert("You need to shutdown rn!!")
}, 3000)

clearInterval(int)