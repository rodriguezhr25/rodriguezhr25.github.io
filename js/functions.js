var today = new Date();
var actualYear = today.getFullYear();
document.getElementById("year").innerHTML = actualYear;

document.getElementById('dateUpdated').textContent = "Last Updated:" + document.lastModified;