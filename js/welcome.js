if (localStorage.getItem("currentUser")==null) {
    window.location.replace("index.html")
}

let currentUser = localStorage.getItem("currentUser")
let welcomeH1 = document.getElementById("welcome")
welcomeH1.innerHTML=`welcome  ${currentUser.charAt(0).toUpperCase()+currentUser.slice(1)}`

let logout = document.getElementById("logout")
logout.addEventListener("click", () => {
    localStorage.removeItem("currentUser")
    window.location.replace("index.html")
})


