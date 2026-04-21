// Every kind of function we will learn in this course, we will learn in the form of a project. So let's start with our first project, which is to create a simple JavaScript file and print "Hello, JS sikhna hai?" in the console.

//variable declared (function expression)
// let fnc = function(){
//     console.log("Hello, JS sikhna hai?");
// }

// fnc();

// //fat arrow function
// let fncc = () => {
//     console.log("Hello, JS sikhna hai?");
// }
// fncc(); 


//default, rest, spread operator    
function add(v1 = 10, v2 = 50) {
    console.log(v1 + v2);
}

// add(1,2);
// add(); // Uses default values....assign 0,1,2..any number to parameters if no arguments are passed

//rest operator
function abcd(a, b, c, ...val) {
    console.log(val); // it will print all the values in an array   
}

// abcd(1,2,3,4,5); // it will print [1, 2, 3, 4, 5]

function aka(a) {
    return 12 + a;
}

let val = aka(3135);
// console.log(val);    concept of retutn statement

//first class functions -- functions ko value ki tarah treat karna, yani ki functions ko hum variables mein store kar sakte hain, functions ko arguments ke roop mein pass kar sakte hain, aur functions se return bhi kar sakte hain. 
function abcd(val) {
    val(); // it will call the function passed as an argument
}
//abcd is an higher order function because it takes a function as an argument and calls it inside the function body, hof wo hota hai jo ki return kare ya accept kare function ko 

// abcd(function(){
//     console.log("Hello, JS sikhna hai?");
// }) 

// pure vs impure functions
// pure function -- a function that always returns the same output for the same input and has no side effects. 

let a = 12;
function abcd() {
    console.log(a);
}

// impure function -- a function that does not always return the same output for the same input or has side effects.
function bcde() {
    a++; // it will affect a and change value of a
}
// Closures -> ek function jo ki return karega ek dusra function aur dusra function use krega parent function ka variable.
function xyz() {
    let abc = 12;
    return function () {
        console.log(abc);
    }
}
// it will print 12 because of closure, even after the parent function has finished executing, the inner function still has access to the variables of the parent function.

// lexical scoping ->  ek function ek andar ek aur function hota hai, toh jo child function hai wo parent function ke variables ko access kar sakta hai, lekin parent function child function ke variables ko access nahi kar sakta.

function uwu() {
    let b = 15;
    function uwuwu() {
        let c = 18;
        console.log(b); // it will print 15 because of lexical scoping
    }
    // uwuwu();
}
// uwu();

// iife -- Immediately Invoked Function Expression, ek function jo ki turant hi execute ho jata hai, bina kisi ke call kiye.

// (function(){
//     console.log("hello");
// })();

// Hoisting differences between declaration and expression

// hehehe();

function hehehe() {
    console.log("Hoisting ka example");
}



// Q1. What's the differenvce between function declaration and function expression in terms of hoisting?

// hehehe(); //works
function hehehe() {
    console.log("Hoisting ka example");
}

// huhuhu(); //does not work
let huhuhu = function () { // because of expression, it is not hoisted
    console.log("Hoisting ka example");
}


// Q2. Convert to arrow function
// function multiply(a, b){
//     return a * b;
// }

// let multiply = (a, b) => {
//     return a * b;
// }

//  OR

// let multiply = (a, b) => a * b; // agar return sirf ek hi expression hai toh curly braces aur return statement dono ko hata sakte hain.

// Q3. Use rest parameter to accept any numbr of scores and return the total.

function getTotal(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total += val;
    })
    return total;
}
// console.log(getTotal(10, 20, 30));

// Q4: if else concept using early return
function checkAge(age) {
    if (age < 18) return "Too Young";
    return "Old Enough";
}
// console.log(checkAge(15));

// Q5. What does it mean when we say that functions are first-class citizens in JavaScript? 
// Functions isliye first-class citizens hote hai kyuki hum unhe variables mein store kar sakte hain, unhe arguments ke roop mein pass kar sakte hain, aur unse return bhi kar sakte hain. Iska matlab hai ki functions ko hum kisi bhi tarah se treat kar sakte hain jaise ki hum kisi bhi dusre data type ko treat karte hain.

// Q6.Assign a function to a variable and then call that function.

let meow = function () {
    console.log("Ghop ghop ghop");
}
// meow();

//  Q7. Pass a function inside another function an d call it.
// function laadle(val) {
//     val(); // it will call the function passed as an argument
// }

// laadle(function () {
//     console.log("Mai kya laadle");
// });

// Write a BMI Calculator
function bmi(weight, height) {
    return weight / (height*height);
}
// console.log(bmi(456, 88));

// create a reusable discount calculator

function discountCalculator(discount) {
    return function(price) {
        return price - (price * discount / 100);    
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
// console.log(ten(100)); // it will return 90
// console.log(twenty(100)); // it will return 80

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let c = counter();
// console.log(c());

function double(val){
    return val * 2;
}
// console.log(double(5));

// Basic Arrays Concept
 let ar = [1, 2, 3, 4, 5];

// let arr = new Array(100, 2, 30, 445, 5); // array constructor
// ar.splice(2, 2);// it will remove 2 elements from index 2
// console.log(ar); // it will print [1, 2, 5]
// ar.sort();

// let sr = arr.sort(function(a, b){
//     return a - b
// })
// console.log(sr); // it will print [1, 2, 3, 4, 5] because of sorting in ascending order 
let array = [100, 2, 30, 445, 5];

// array.forEach(function(val){  
//     console.log(val); // it will print each element of the array
// })
let fruits = ["apple", "banana", "mango"]
fruits.push("orange");
// console.log(fruits); 
fruits.push("khatte meethe berries")
// console.log(fruits);   

// shehar ke bohot sare akash --> arrays
// ghar ke andar bohot sare kamre --> objects (ek bande ki baat aur details --> objects)
let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
obj.age;
obj['age']; // it will also give the same result as obj.age

let aa = 'name';
obj[aa]; // it will also give the same result as obj.name but not obj.aa.

const student = {
  name: "Akash",
  age: 22,
  address: {
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302001
  }
};
// console.log(student.address?.pincode); // put '?' after address to avoid errors, it will print 302001 if correct otherwise undefined. This is called optional chaining.

// Destructuring --> it is a way to extract values from arrays or objects and store them in variables. It makes it easier to work with complex data structures.
let {city, state} = student.address; // it will extract city and state from address and store in variables city and state
// console.log(city); // it will print Jaipur, instead of student.address.city you can write it shortly as city because of destructuring

// for in loop --> it is used to iterate over the properties of an object. It will give the key of the object.
const apiResponse = {
  user: {
    id: 101,
    profile: {
      name: "Akash",
      social: {
        twitter: "@akash_dev"
      }
    }
  }
};
for (let key in apiResponse){
    //console.log(key, apiResponse[key]); // it will give the value of the key in apiResponse    
} 
console.log(Object.keys(apiResponse)); // it will print all the keys of the object in array 