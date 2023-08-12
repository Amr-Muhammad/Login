if (localStorage.getItem("currentUser") != null) {
    window.location.replace("welcome.html")
}

let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let signUp = document.getElementById("signUp")
let signUpLayer = document.getElementById("signUpLayer")
let userNameLabel = document.getElementById("userNameLabel")
let emailWarning = document.querySelector(".warning")
let emailLabel = document.getElementById("emailLabel")
let passwordLabel = document.getElementById("passwordLabel")
let usersArr = []

if (localStorage.getItem("user") != null) {
    usersArr = JSON.parse(localStorage.getItem("user"))
}


signUp.addEventListener("click", function () {
    signUpBtn()
})


userName.addEventListener("keyup", function () {
    if (checkUserName() == true) {
        userNameLabel.classList.remove("redColor", "fw-bold")
    } else {
        userNameLabel.classList.add("redColor", "fw-bold")
    }
})

userEmail.addEventListener("keyup", () => {
    if (checkEmail() == true) {
        emailLabel.classList.remove("redColor", "fw-bold")
        emailWarning.classList.replace("visible", "invisible")

    } else {
        emailLabel.classList.add("redColor", "fw-bold")
    }
})

userPassword.addEventListener("keyup", () => {
    if (checkPassword() == true) {
        passwordLabel.classList.remove("redColor", "fw-bold")
    } else {
        passwordLabel.classList.add("redColor", "fw-bold")

    }
})


document.addEventListener("keyup", () => {
    if (e.key == "Enter") {
        if (userName.value == "" && userEmail.value != "" && userPassword.value != "") {
            userNameLabel.classList.add("redColor", "fw-bold")
        }
        else if (userName.value != "" && userEmail.value == "" && userPassword.value != "") {
            emailLabel.classList.add("redColor", "fw-bold")
        }
        else if (userName.value != "" && userEmail.value != "" && userPassword.value == "") {
            passwordLabel.classList.add("redColor", "fw-bold")
        }
        else if (userName.value == "" && userEmail.value == "" && userPassword.value != "") {
            userNameLabel.classList.add("redColor", "fw-bold")
            emailLabel.classList.add("redColor", "fw-bold")
        }
        else if (userName.value == "" && userEmail.value != "" && userPassword.value == "") {
            userNameLabel.classList.add("redColor", "fw-bold")
            passwordLabel.classList.add("redColor", "fw-bold")
        }
        else if (userName.value != "" && userEmail.value == "" && userPassword.value == "") {
            emailLabel.classList.add("redColor", "fw-bold")
            passwordLabel.classList.add("redColor", "fw-bold")
        }

        else if (userName.value == "" && userEmail.value == "" && userPassword.value == "") {
            userNameLabel.classList.add("redColor", "fw-bold")
            emailLabel.classList.add("redColor", "fw-bold")
            passwordLabel.classList.add("redColor", "fw-bold")
        }

        else {
            if (checkUserName() == true && checkEmail() == true && checkPassword() == true) {
                let userObj = {
                    userName: userName.value,
                    userEmail: userEmail.value,
                    userPassword: userPassword.value,
                }
                let ifFound = usersArr.find((el) => (el.userEmail == userEmail.value))

                if (ifFound == undefined) {
                    emailWarning.classList.replace("visible", "invisible")
                    usersArr.push(userObj);
                    localStorage.setItem("user", JSON.stringify(usersArr));
                    signUpLayer.classList.replace("d-none", "d-block")
                    let redirectCounterSpan = document.getElementById("redirectCounter")
                    let i = 4
                    spanCounter(i)
                    function spanCounter(i) {
                        setInterval(() => {
                            redirectCounterSpan.innerHTML = i
                            if (i == 0) {
                                clearInterval(spanCounter(i))
                                console.log(i);
                                window.location.replace("index.html")
                            }
                            i--
                        }, 1000);
                    }
                }
                else {
                    emailWarning.classList.replace("invisible", "visible")
                    emailLabel.classList.add("redColor", "fw-bold")
                }
            }
        }
    }
})


function signUpBtn() {

    if (userName.value == "" && userEmail.value != "" && userPassword.value != "") {
        userNameLabel.classList.add("redColor", "fw-bold")
    }
    else if (userName.value != "" && userEmail.value == "" && userPassword.value != "") {
        emailLabel.classList.add("redColor", "fw-bold")
    }
    else if (userName.value != "" && userEmail.value != "" && userPassword.value == "") {
        passwordLabel.classList.add("redColor", "fw-bold")
    }
    else if (userName.value == "" && userEmail.value == "" && userPassword.value != "") {
        userNameLabel.classList.add("redColor", "fw-bold")
        emailLabel.classList.add("redColor", "fw-bold")
    }
    else if (userName.value == "" && userEmail.value != "" && userPassword.value == "") {
        userNameLabel.classList.add("redColor", "fw-bold")
        passwordLabel.classList.add("redColor", "fw-bold")
    }
    else if (userName.value != "" && userEmail.value == "" && userPassword.value == "") {
        emailLabel.classList.add("redColor", "fw-bold")
        passwordLabel.classList.add("redColor", "fw-bold")
    }

    else if (userName.value == "" && userEmail.value == "" && userPassword.value == "") {
        userNameLabel.classList.add("redColor", "fw-bold")
        emailLabel.classList.add("redColor", "fw-bold")
        passwordLabel.classList.add("redColor", "fw-bold")
    }

    else {
        if (checkUserName() == true && checkEmail() == true && checkPassword() == true) {
            let userObj = {
                userName: userName.value,
                userEmail: userEmail.value,
                userPassword: userPassword.value,
            }
            let ifFound = usersArr.find((el) => (el.userEmail == userEmail.value))

            if (ifFound == undefined) {
                emailWarning.classList.replace("visible", "invisible")
                usersArr.push(userObj);
                localStorage.setItem("user", JSON.stringify(usersArr));
                signUpLayer.classList.replace("d-none", "d-block")
                let redirectCounterSpan = document.getElementById("redirectCounter")
                let i = 4
                spanCounter(i)
                function spanCounter(i) {
                    setInterval(() => {
                        redirectCounterSpan.innerHTML = i
                        if (i == 0) {
                            clearInterval(spanCounter(i))
                            console.log(i);
                            window.location.replace("index.html")
                        }
                        i--
                    }, 1000);
                }
            }
            else {
                emailWarning.classList.replace("invisible", "visible")
                emailLabel.classList.add("redColor", "fw-bold")
            }
        }
    }

}

function checkUserName() {
    let userNameRegex = /^[a-zA-Z_]{3,15}$/
    return userNameRegex.test(userName.value)
}

function checkEmail() {
    let emailRegex = /^[a-zA-z0-9_]{3,15}@[a-zA-z]{3,8}\.[a-zA-z]{2,5}$/
    return emailRegex.test(userEmail.value)
}

function checkPassword() {
    let passwordRegex = /^[a-zA-z0-9()!@#$%^&*-+]{4,16}$/
    return passwordRegex.test(userPassword.value)
}