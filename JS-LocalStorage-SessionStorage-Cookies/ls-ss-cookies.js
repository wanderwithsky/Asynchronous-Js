// LocalStorage → permanent data store (jab tak manually delete na karo, browser me hota hai), ~5MB of data
// SessionStorage → TAB band hote hi data delete, temporarily data store ~5MB
// Cookies → chhota data jo server + browser dono share karte hain (expiry ke saath). ~4KB
// localStorage.removeItem("name")
// localStorage -->
// store kaise kare - localStorage.setItem("name", "rohan")
// data fetch kaise kare - localStorage.getItem("name")
// rmove kaise kare - removeItem("name")
// similarly for sessionStorage but the only catch is that, it is temporarily

// "localstorage me arrays/objects/kuch bhi store nhi kar sakte isliye unhe string bana ke stor karte hai using JSON.stringify(). 
// phir jab localStorage se data wapis nikalte hai to string milta hai.
// string se use apne natural form me laane ke liye `JSON.parse()` karte hai"

// localStorage.setItem("friends", ["akash", "veera", "akshat"]) ❌ 
// localStorage.setItem("friends", JSON.stringify(["akash", "veera", "akshat"])) ✔️ after on console write localStorage.getItem("friends") and uske baad

// JSON.parse("[\"akash\",\"veera\",\"akshat\"]") --> on console 
// OR here do 👇🏼
// let fr = JSON.parse(localStorage.getItem("friends"))
// console.log(fr)