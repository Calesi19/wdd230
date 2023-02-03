
const date = new Date();




document.getElementById("footer-copyright").innerHTML = "&copy; " + date.getFullYear() + " Mountain View Chamber"
document.getElementById("last-modified").innerHTML = "Last Modified: " + date.toUTCString()
document.getElementById("current-date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day: "numeric"})