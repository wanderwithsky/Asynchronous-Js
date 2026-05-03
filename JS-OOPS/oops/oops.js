// function createBiscuits (name, price, qty, category, company){
//     this.name = name
//     this.price = price
//     this.qty = qty
//     this.category = category
//     this.company = company
// }

// let biscuit1 = new createBiscuits("Sunfeast", 10, 5, "Creamy", "Parle");
// let biscuit2 = new createBiscuits("Oreo", 10, 5, "Chocolate", "Cadbury");
// let biscuit3 = new createBiscuits("MarieGold", 10, 10, "Regular", "Brittania");

// function createPencils (name, price, color) {
//     this.name = name
//     this.price = price
//     this.color = color
//     // this.company = company
//     this.write = function(){
//         let h1 = document.createElement("h1")
//         h1.textContent = "Hey, How Are You?"
//         h1.style.color = color
//         document.body.append(h1)
//     }
// }
// createPencils.prototype.company = "Bahubali"

// let pencil1 = new createPencils("Nataraj", 10, "black")
// let pencil2 = new createPencils("Doms", 10, "red")/

// class CreatePencils {
//     constructor(name, company, price, color) {
//         this.name = name
//         this.company = company
//         this.price = price
//         this.color = color
//     }

//     write(text) {
//         let h1 = document.createElement("h1")
//         h1.textContent = text
//         h1.style.color = this.color
//         document.body.append(h1)
//     }
// }

// function erase(){
//     document.querySelectorAll("h1").forEach(function(e){
//         if(e.style.color === "black"){
//             e.remove()
//         }
//     });
// }

// let p1 = new CreatePencils("Nataraj", "Nataraj", 10, "black")
// let p2 = new CreatePencils("Apsara", "Nataraj", 20, "blue")

// inheritance vs prototype inheritance
// inheritance -> class to class using extends
// p. inheritance -> object -> object]
// example of object -> object inheritance in js
// let coffee = {
//     color: "dark",
//     taste: "bitter",
//     drink: function(){
//        console.log("gut gut gut");
//     }
// }
// let mochaCoffee = Object.create(coffee)
// mochaCoffee.drink();

// sync vs async
// aisa code jo line by line chale wo synchronous code hai
// aisa code jo jab ready ho jaye chalne ko tab chale without prioritizing line by line method wo asynchronous code hota hai

// function kuchBhi(val){
//     setTimeout(() => {
//         console.log(val)
//     }, Math.floor(Math.random() * 10) * 1000);
// }
// kuchBhi(function(){
//     console.log("hey");
// })

// callback function -> ek function jo ki pass ho parameter dusre function me wo callback fnc hota hai

function profileLekarAao(username, cb) {
    console.log("Fetching profile data...");
    setTimeout(() => {
        cb({
            id: 1212,
            username,
            age: 24,
            email: "aakashbhattacharya30@gmail.com"
        })
    }, 2000);
}

function postsLekarAao(id, cb) {
    console.log("Fetching all posts...");

    setTimeout(() => {
        cb({
            id,
            posts: [
                "hey",
                "hello ji",
                "good morning ji"
            ]
        })
    }, 3000);
}

function savedPosts(id, cb) {
    console.log("Fetching all saved posts...");
    setTimeout(() => {
        cb({
            id,
            posts: [
                1,
                22,
                24,
                564
            ]
        })
    }, 2000);
}
profileLekarAao("realakaxh", function (data) {
    console.log(data);
    postsLekarAao(data.id, function (posts) {
        console.log(posts);
        savedPosts(data.id, function (saved) {
            console.log(saved);
        })
    })
})