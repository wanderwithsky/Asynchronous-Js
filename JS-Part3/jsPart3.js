// Closures - ek func ke andar dusra func jo ki access karta ho parent func ke variables ko

function abcd() {
    let a = 10;
    return function () {
        console.log(a);
        a++;
    }
}
// closures me ek func ke andar dusra hota hai to hum ek var me func store krte hai phr uss var ko call karte hai 

function clickLimiter() {
    let click = 0;
    return function () {
        if (click < 5) {
            click++
            console.log(`clicked ${click} times`);
        }
        else {
            console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
        }
    }
}

// let fnc = clickLimiter()

// toaster notification

function createToaster(config) {
    return function (str) {
        // create div element
        let div = document.createElement("div")
        // div ke andar text content
        div.textContent = str;
        // assign class to div
        div.className = `w-fit inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}  px-6 py-3 rounded shadow-lg pointer-events-none`;

        // parent div ke andar append kar dena upar wale div ko jispe toaster aayega
        let parent = document.querySelector(".parent")
        parent.appendChild(div)

        //timeout function laga do functionality ke liye 
        setTimeout(() => {
            parent.removeChild(div)
        }, config.duration * 1000) // duration: 3 --> 3*1000 = 3 seconds baad gayab.
    }
}
// createToaster func ko call karenge aur uske andar configuration pass krenge as arguments.
// ab createToaster ek function return karega isliye isko let me store krenge (toaster)
let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
})
// at last, toaster will be called and string will be passed as argument for second function
toaster("Download Started.."); // this will give a toaster notif on screen
setTimeout(() => {
    toaster("Download Done!")
}, 2000) // will occur after 2 secs.
// new changes about to happen

// this keyword --> this ka matlab hota hai “current context ka object” — yani jis object ke andar code run ho raha hai, this usko refer karta hai.

// Lekin important baat: this ka value fix nahi hota, wo depend karta hai function kaise call hua hai.

console.log(this) // --> returns window on global scope
function abcd() {
    console.log(this) // --> returns window on function scope
}
abcd();

// method ke andar object
let obj = {
    name: "akash",
    age: 25,
    sayName: function () { // use ES5 fun, not arrow otherwise this will lose its value and return window again.
        // sayName --> method, function jo object ke andar ho usey method kehte hai
        console.log(this) // prints the object
        console.log(this.name) // prints the object name
    },
}
obj.sayName(); // method ke andar this ki value object ho jati hai

// this in eventHandler 
document.querySelector("h1").addEventListener("click", function () {
    // alert("Close Window ! Warning")
    console.log(this); // consoles h1 (jispe eventListener lagi ho wahi this hota hai iss case me)
    console.log(this.style.color = "red");
})

// class --> this is blank object

// this ki saari values 
// -------------------------------------> 
// global - window
// functiom - window
// method (es5 fnc) - object
// methos with es6 arrow fnc - window
// es5 fnc inside es5 method - object
// arrow fnc inside es5 method - object
// event handler - element
// class - blank object
//-------------------------------------------------------------------------
// Manual binding - call, apply, bind
// call - fnc ko call karte waqt aap set kar skte ho ki uski this ki value kya hogi
let obj1 = {
    name: "satish",
    age: 45,
}
function def(){
    console.log(this)
}
// ab hume chhaiye ki def() ko call krne pe this ki value object aaye yaani ki obj1. to hum use karenge .call()

def.call(obj1)

// `call`, `apply`, `bind` — short and clear

// Teeno ka purpose same hai: function ka `this` manually set karna. Difference bas execution aur arguments ka hai.

// ## 1. `call()` → direct call + arguments comma me


// const user = { 
//      name: "Akash" 
// };
    
// function greet(city) {
//   console.log(this.name + " from " + city);
// }

// greet.call(user, "Jaipur");

// 👉 Output: `Akash from Jaipur`
// 👉 Immediately execute hota hai


// ## 2. `apply()` → direct call + arguments array me

// greet.apply(user, ["Jaipur"]);

// 👉 Same output
// 👉 Difference: bas arguments array me pass hote hain


// ## 3. `bind()` → function return karta hai (later use)

// const newFunc = greet.bind(user, "Jaipur");  (similarly like call)
// newFunc();

// 👉 Output: `Akash from Jaipur`
// 👉 Immediately run nahi hota, **new function milta hai**


// ## One-line difference (important)

// * `call()` → run now, args normal
// * `apply()` → run now, args array
// * `bind()` → run later, returns new function

// ---

// ## Quick memory trick

// 👉 **Call = Call now**
// 👉 **Apply = Apply with array**
// 👉 **Bind = Bind and use later**