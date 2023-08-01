if (localStorage.getItem("currentUser") != null) {
    window.location.replace("welcome.html")
}

let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let loginBtn = document.getElementById("logInBtn")
let warning = document.querySelector(".warning")
let emailLabel = document.getElementById("emailLabel")
let passwordLabel = document.getElementById("passwordLabel")
let usersArr = []

if (localStorage.getItem("user") != null) {
    usersArr = JSON.parse(localStorage.getItem("user"))
}

loginBtn.addEventListener("click", () => {
    if (userEmail.value == "" && userPassword.value == "") {
        emailLabel.classList.add("redColor")
        passwordLabel.classList.add("redColor")
    }

    else if (userEmail.value == "") {
        emailLabel.classList.add("redColor")
        passwordLabel.classList.remove("redColor")

    }

    else if (userPassword.value == "") {
        passwordLabel.classList.add("redColor")
        emailLabel.classList.remove("redColor")
    }

    else {

        emailLabel.classList.remove("redColor")
        passwordLabel.classList.remove("redColor")

        let flag = 0

        usersArr.forEach((el) => {
            if ((el.userEmail.toLowerCase() == userEmail.value.toLowerCase()) && (el.userPassword.toLowerCase() == userPassword.value.toLowerCase())) {
                let currentUser = el.userName
                warning.classList.replace("visible", "invisible")
                window.location.replace("welcome.html")
                localStorage.setItem("currentUser", currentUser);
                console.log("done");
                flag = 1

            }
        })

        if (flag == 0) {
            warning.classList.replace("invisible", "visible")
            console.log("ichta");
        }
    }
})
