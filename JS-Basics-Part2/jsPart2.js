// let h1 = document.querySelector("h1");
// h1.innerText = "not good :(";
// h1.textContent = "not good :(";   // preferred

// h1.innerHTML = "<i>not good</i>";
// h1.hidden = true; //h1 ko hide kr dega
// h1.hidden = false; //h1 ko show kr dega

// console.dir(h1);  --> this will list directories on console

// let a = document.querySelector("a");
// a.href = "https://www.google.com";
// a.target = "_blank"; // naya tab me khulega

// OR

// a.setAttribute("href", "https://www.google.com");
// a.setAttribute("target", "_blank");

// let img = document.querySelector("img");
// img.setAttribute(
//     "src", 
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFae3seuCUufv4yL4iapqpTETT3EUeKiErL78nP6b2KWYvXQFu8wwCK991-n4HfpK_ktcJQtOJo2sloOc_iRnt4D86SQqgjjdNvdE5DjDuWknZLqDcOg&s&ec=121624351"
// );

// console.dir(a);

// similarly, getAttribute and removeAttribute bhi hota hai.
// console.log(a.getAttribute("href")); --> use for console.log and a.removeAttribute("href");

// Dynamic DOM manipulation: createElement, prepend, appendChild, removeChild

let h1 = document.createElement("h1");
h1.textContent = "Hello bhai kaise ho";
document.body.prepend(h1);
// OR document.querySelector("body").prepend(h1);
h1.style.color = "aliceblue";
// h1.style.fontFamily = "Gilroy";

let h2 = document.createElement("h2");
h2.textContent = "Aur ghar pe sab kaise hai?";
document.body.appendChild(h2);
h2.style.color = "aliceblue";
// h2.style.fontFamily = "Gilroy";
// h2.remove(); //removeChild  
document.body.style.backgroundColor = "black";  //imp for dark bg

let h3 = document.querySelector("h3");
h3.classList.add("hulu");
// h3.classList.remove("hulu");
// h3.classList.toggle("hulu"); //agar class hai to remove kr dega, nhi hai to add kr dega

// DOM traversal: parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling

// let demo = document.querySelector("#demo");
// console.log(demo.parentNode);
// console.log(demo.childNodes);
// console.log(demo.firstChild);
// console.log(demo.lastChild);
// console.log(demo.nextSibling);
// console.log(demo.previousSibling);


let buynow = document.querySelectorAll(".buy-now");
console.log(buynow);

buynow.forEach((btn) => {
    btn.addEventListener("click", function () {
        h3.style.color = "yellow";
    });
});

document.body.style.textAlign = "center";
// let buttons = document.querySelectorAll(".buy-now");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     h3.style.color = "yellow";
//   });
// });

// Note --> 👉 querySelectorAll returns a NodeList (collection)
// 👉 You cannot directly add event listener to it
// And, querySelector only selects FIRST element.....yaani agar querySelectorAll ka use karna hai to you must use forEach loop or any loop --> buynow.forEach(...){}



// let ul = document.querySelectorAll(".list");
// ul.forEach(function(val){
//     val.style.color = "lightblue";
//     console.log(val);
// })
// textContent vs innerText vs innerHTML {
// textContent: it will give you the text content of the element, including the hidden text. It will not consider the CSS styles. --> faster  

// innerText: it will give you the text content of the element, but it will consider the CSS styles. It will not give you the hidden text. --> slower

// innerHTML: it will give you the HTML content of the element, including the hidden text. It will not consider the CSS styles and you can also print tags. --> faster
//}

let image = document.querySelector("img")
image.setAttribute("src", "https://plus.unsplash.com/premium_photo-1775450651387-2a2085698dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D");
image.style.width = "300px";
image.style.height = "300px";

document.querySelector("div").setAttribute("title", "This is a div element");

let btn = document.querySelector("button")
// btn.removeAttribute("disabled");

// let uul = document.querySelector("ul")
// let li = document.querySelectorAll("li")
// uul.style.color = "white";
// uul.removeChild(li[0]); //removeChild    

// document.querySelector("ul").style.listStyle = "none";
// let ul = document.querySelector("ul")
// ul.style.color = "white";
// let li = document.querySelector("ul li:nth-child(2n)"); //selects all even li elements

// li.forEach(function(val){
//    val.classList.add("highlight");
// })

// setTimeout(function(){
//     console.log("bello")
// }, 4000)

// let tm = setInterval(function(){
//     console.log("hello")
// }, 4000)

// clearInterval(tm);
 
let count = 10;
let interval = setInterval(() => {
    console.log(count);
    count--;

    if (count === 0) {
        clearInterval(interval); // stop when reaches 0
    }
}, 4000);


// forEach loop --> array ke har ek item pe function chalata hai
let nums = [1, 2, 3];

nums.forEach(function(kuchBhiDaalo) {
  console.log(kuchBhiDaalo);
});
// output --> 1 2 3 (vertically)