var today = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


document.getElementById('dateUpdated').textContent = days[today.getDay()] + ", " + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

var day = new Date();
var today = day.getDay();

if (today == 5) {
    document.getElementById("message").className = "show";
}