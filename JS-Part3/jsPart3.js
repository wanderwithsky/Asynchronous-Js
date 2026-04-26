// Closures - ek func ke andar dusra func jo ki access karta ho parent func ke variables ko

function abcd(){
    let a = 10;
    return function(){
        console.log(a);
        a++;
    }
}
// closures me ek func ke andar dusra hota hai to hum ek var me func store krte hai phr uss var ko call karte hai 

function clickLimiter() {
    let click = 0;
    return function (){
        if(click < 5){
            click++
            console.log(`clicked ${click} times`);
        }
        else{
            console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
        }
    }
}

// let fnc = clickLimiter()

// toaster notification

function createToaster(config){
    return function(str){
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
        setTimeout(()=>{
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
setTimeout(()=>{
    toaster("Download Done!")
}, 2000) // will occur after 2 secs.
// new changes about to happen



