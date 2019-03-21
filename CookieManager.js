// JavaScript source code
var banner = document.getElementById("Log");
var logged = sessionStorage.getItem("Logged");
var user = sessionStorage.getItem("User");
if (logged) {
    if (user == "Admin") {
        banner.innerHTML = '<li id="Log"><a href="Admin.html">Perfil: ' + user + ' </a ></li > ';
    }
    else {
        banner.innerHTML = '<li id="Log"><a href="Profile.html">Perfil: ' + user + ' </a ></li > ';
    }
}

