/*var temp = parseFloat(document.getElementById("temperature").textContent);
var windSpeed = parseFloat(document.getElementById('windSpeed').innerText);

var windChillResult = calculateWindChill(temp, windSpeed)

var div = document.getElementById('windChild');
div.innerHTML = windChillResult;


function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        var a = Math.pow(v, .16);
        var windChill = 35.74 + 0.6215 * t - 35.75 * a + .4275 * t * a;
    } else {
        windChill = "N/A";
    }
    return windChill;

}*/

function windChillCalculation() {

    var t = parseFloat(document.getElementById("temperature").textContent);
    var s = parseFloat(document.getElementById("windSpeed").textContent);
    var f = 'N/A';
    if (t <= 50 && s >= 3.0) {
        f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
        Math.round(f);
    }
    document.getElementById("windChill").textContent = f;
}