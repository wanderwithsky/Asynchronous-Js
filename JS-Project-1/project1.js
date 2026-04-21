const workers = [
    {
        name: "Aarav Mehta",
        pic: "https://i.pinimg.com/1200x/52/09/f6/5209f6863f1e5a4e552bdbbc30bf20fb.jpg",
        bio: "Senior software engineer with 8 years of experience."
    },
    {
        name: "Daniel Brooks",
        pic: "https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg",
        bio: "Project manager known for coordinating cross-functional teams."
    },
    {
        name: "Ethan Carter",
        pic: "https://i.pinimg.com/736x/c1/f2/24/c1f2240e06b6baead08370c3841031db.jpg",
        bio: "Financial analyst experienced in budgeting & forecasting."
    },
    {
        name: "Marcus Reed",
        pic: "https://i.pinimg.com/736x/c9/61/05/c961051eb5181769d0439b3135faad07.jpg",
        bio: "Architect with a strong background in modern commercial spaces."
    },
    {
        name: "James Walker",
        pic: "https://i.pinimg.com/736x/af/a4/a2/afa4a2754f1c3745f6435d256e9b6fb4.jpg",
        bio: "Cybersecurity consultant helping companies protect systems."
    },
    {
        name: "Fatima Khan",
        pic: "https://i.pinimg.com/736x/82/a1/df/82a1dfeedcdbac121164338439f58766.jpg",
        bio: "Data scientist skilled in analytics."
    }
];

function showWorkers(arr) {
    arr.forEach(function (worker) {
        // main outer card div banaya
        const card = document.createElement("div");
        card.classList.add("card");

        // image element banaya
        const img = document.createElement("img");
        img.src = worker.pic;
        img.alt = "User card image";
        img.classList.add("bg-img");

        // blur effect ke liye layer banayi
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${worker.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // content rakhne ke liye div banaya (name, bio on card)
        const content = document.createElement("div");
        content.classList.add("content");

        // user name ke liye heading banayi
        const h3 = document.createElement("h3");
        h3.textContent = worker.name;

        // bio/description ke liye paragraph banaya
        const bio = document.createElement("p");
        bio.textContent = worker.bio;

        // heading aur paragraph ko content div ke andar dala
        content.appendChild(h3);
        content.appendChild(bio);

        // image, blur layer, aur content ko main card ke andar dala
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // card ko page me show karne ke liye cards div me add kiya
        document.querySelector(".cards").appendChild(card);

    });
}
// print kara diya sabko
showWorkers(workers);

let inp = document.querySelector("input")

inp.addEventListener("input", () => {
    let newWorkers = workers.filter((worker) => {
        return worker.name.toLowerCase().startsWith(inp.value.toLowerCase())
    })

    document.querySelector(".cards").innerHTML = "";

    if (newWorkers.length > 0) {
        showWorkers(newWorkers);
    } else {
        document.querySelector(".cards").innerHTML = "<p class='not-found'>No Users Found!</p>";
    }
})