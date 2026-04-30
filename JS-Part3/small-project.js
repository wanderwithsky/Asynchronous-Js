let form = document.querySelector("form")
let username = document.querySelector("#name")
let bio = document.querySelector("#bio")
let role = document.querySelector("#role")
let img = document.querySelector("#photo")

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this)) // this -> object
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
        this.renderUi();
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            bio: bio.value,
            role: role.value,
            img: img.value
        })
        form.reset()
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUi();
    },
    renderUi: function () {
        const container = document.querySelector("#cardContainer");
        container.innerHTML = "";

        this.users.forEach((user, index) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
            <img src="${user.img}" />
            <h3>${user.username}</h3>
            <p class="role">${user.role}</p>
            <p class="bio">${user.bio}</p>
            <button onclick="userManager.removeUser(${index})">Delete</button>
        `;
            container.appendChild(card);
        });
    },
}
userManager.init()
