function readInput() {
    var temp = parseFloat(document.getElementById("temperature").textContent);
    var windSpeed = parseFloat(document.getElementById('windSpeed').innerText);

    var windChillResult = calculateWindChill(temp, windSpeed)

    var div = document.getElementById('windChill');
    div.innerHTML = windChillResult + " ° F";

}

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        var a = Math.pow(windSpeed, .16);
        var windChill = 35.74 + 0.6215 * temp - 35.75 * a + .4275 * temp * a;
    } else {
        windChill = "N/A";
    }
    return Math.round(windChill) * 100 / 100;

}