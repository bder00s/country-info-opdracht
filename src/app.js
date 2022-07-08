console.log('Hallo daar!');

import axios from "axios";

//Stap 1. Welk endpoint heb je nodig? https://restcountries.com/v2/all

//Stap 2. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?

//Stap 3. Zet de referenties naar de HTML Data in het Javascript bestand

const countryList = document.getElementById('list-of-countries');

async function fetchCountryInfo() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response.data); //Dit is de request

        //Hier de data injecteren!
        countryList.innerHTML = ` <li>in het land ${response.data[0].name} spreken ze de taal ${response.data[0].languages[0].name}</li> `



    } catch (error) {
        console.error(error); //Dit is de error catch

        //Hier de errormelding injecteren in browser

    }
}
fetchCountryInfo();