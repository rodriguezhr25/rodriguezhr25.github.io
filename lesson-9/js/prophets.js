const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            let birthdate = document.createElement('p');
            let birthplace = document.createElement('p');
            birthdate.textContent = "Date of Birth: " + prophets[i].birthdate;
            birthplace.textContent = "Place of Birth: " + prophets[i].birthplace;
            let img = document.createElement('img');
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + [i]);


            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
        }

        console.table(jsonObject); // temporary checking for valid response and data parsing
    });