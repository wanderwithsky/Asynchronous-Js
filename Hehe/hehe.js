document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input"); //qsAll pe ek array jaisa index banta hai jisme [inputs[0], inputs[1],...] aise karke elems store honge jo ki honge, [profile pic, name, occupation, info]. inputs[0] = profile pic, inputs[1] = name....etc
let main = document.querySelector("#main"); // ✅ fixed

form.addEventListener("submit", function(e) {
    e.preventDefault(); // ✅ important --> autom submit hone se rokta hai

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let image = document.createElement("img");
    image.setAttribute(
        "src", 
        inputs[0].value
    );

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value; // name

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value; // occupation

    let p = document.createElement("p");
    p.textContent = inputs[3].value; // info

    // ✅ correct append
    profile.appendChild(image);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    })
});