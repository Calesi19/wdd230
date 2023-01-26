let date = new Date()

document.getElementById("footer-date").innerHTML = "Last Updated: " + date.toISOString().split('T')[0]

document.getElementById("footer-signature").innerHTML = "&copy; " + date.getFullYear() + " .:|:. Carlos Lespin .:|:. Idaho" 


