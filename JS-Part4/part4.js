// module pattern -> ek aisa code jo bahar se directly use na ho to use IIFE ke andar banaojisse wo private ho jaye aur bahar se access na ho paye aur sirf wahi bahar bhejo return ke through jisko access karana ho.
// bade companies yanai asli production me yahi hota hai
let Bank = (function () {
    let bankBalance = 10000;
    function setBalance(val) {
        bankBalance = val
    }
    function checkBalance() {
        console.log(bankBalance);
    }
    function withdraw(val) {
        if (bankBalance > val) {
            bankBalance -= val;
        }
    }
    return {
        set: setBalance,
        check: checkBalance,
        draw: withdraw
    }
})();

//Observer Pattern
class YoutubeChannel {
    constructor() {
        this.subscribers = new Set(); // avoids duplicates
    }

    subscribe(user) {
        if (!this.subscribers.has(user)) {
            this.subscribers.add(user);
            user.update("You have subscribed to the channel.");
        }
    }

    unsubscribe(user) {
        if (this.subscribers.has(user)) {
            this.subscribers.delete(user);
            user.update("You have unsubscribed from the channel.");
        }
    }

    notify(message) {
        this.subscribers.forEach(user => user.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`${this.name}: ${message}`);
    }
}

// Usage
let sheriyans = new YoutubeChannel();
let user1 = new User("Rohan");
let user2 = new User("Aman");

// sheriyans.subscribe(user1);
// sheriyans.subscribe(user2);

// sheriyans.notify("New video uploaded!");
// sheriyans.unsubscribe(user1);


// Debouncing -> aap koi action kar rhe ho and aap ye nahi chahte har action pe kuch ho, jab bhi mere actions ke beech mein koi specific gap aajaye to phir reaction perform ho

function debounce(fnc, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(function () {
            fnc(...args)
        }, delay)
    }

}
document.querySelector("input")
    .addEventListener("input", debounce(
        function () {
            console.log("hey");
        }, 1000)
    )

// Throttle -> Throttle ensures a function runs at most once in a fixed time interval, no matter how many times the event fires.

function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}