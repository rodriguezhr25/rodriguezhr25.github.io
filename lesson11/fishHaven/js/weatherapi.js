var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const apiURLCurrent = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=bc07e7e42f613427f563eb21cda2609d";
fetch(apiURLCurrent)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentWeather = jsObject;
        let current = document.createElement('p');
        let temperature = document.createElement('p');
        let wind_speed = document.createElement('p');
        let wind_chill = document.createElement('p');
        let humidity = document.createElement('p');


        current.textContent = currentWeather.weather[0].main;
        temperature.textContent = currentWeather.main.temp_max.toFixed(0) + "°F";
        wind_speed.textContent = currentWeather.wind.speed + "mph";;
        wind_chill.textContent = calculateWindChill(currentWeather.main.temp_max, currentWeather.wind.speed);
        humidity.textContent = currentWeather.main.humidity + "°%";;

        document.querySelector('div.summary-data').appendChild(current);
        document.querySelector('div.summary-data').appendChild(temperature);
        document.querySelector('div.summary-data').appendChild(wind_chill);
        document.querySelector('div.summary-data').appendChild(wind_speed);
        document.querySelector('div.summary-data').appendChild(humidity);
    });
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=bc07e7e42f613427f563eb21cda2609d";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var today = new Date();
        const forecast = jsObject['list'];
        var count = 0;
        for (let i = 0; i < forecast.length; i++) {
            var hour = new Date(forecast[i].dt_txt).getHours();
            var day = new Date(forecast[i].dt_txt).getDay();
            if (hour == 18) {
                let col = document.createElement('div');
                col.setAttribute("class", "col");
                let span = document.createElement('span');
                span.setAttribute("class", "label");
                let data = document.createElement('span');
                data.setAttribute("class", "data");
                let img = document.createElement('img');
                img.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
                img.setAttribute('alt', forecast[i].weather[0].description);


                span.textContent = days[day];
                data.textContent = forecast[i].main.temp.toFixed(0) + "°F";
                col.appendChild(span);
                col.appendChild(img);
                col.appendChild(data);
                document.querySelector('div.forecast').appendChild(col);
            }
        }

        /* const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
         const desc = jsObject.weather[0].description; // note how we reference the weather array
         document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
         document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
         document.getElementById('icon').setAttribute('alt', desc);*/
    });

const apiURLTowns = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(apiURLTowns)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const towns = jsObject["towns"];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                //let card = document.getElementsByClassName("events");
                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name + " Upcoming events";
                document.querySelector('div.events').appendChild(h2);
                let events = towns[i].events;
                for (let j = 0; j < events.length; j++) {
                    let p = document.createElement('p');
                    p.textContent = events[j];
                    document.querySelector('div.events').appendChild(p);
                }




            }
        }
    });