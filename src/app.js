console.log('Hallo daar!');

import axios from "axios";

//Stap 1. Welk endpoint heb je nodig? https://restcountries.com/v2/all

//Stap 2. Schrijf een asynchrone functie die (met try + catch), met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?

//Stap 3. Zet de referenties naar de HTML Data in het Javascript bestand

const countryData = document.getElementById('country');

async function fetchCountryInfo() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response.data); //Dit is de request

        allCountries(response.data)

        //Hier de data injecteren!


    } catch (error) {
        console.error(error); //Dit is de error catch

        //Hier de errormelding injecteren in browser

    }
}
fetchCountryInfo();


function allCountries(countryList) {
    const countryData = document.getElementById('country');
    countryData.innerHTML = countryList.map((countries) => {
      return`<li>
<h3>${countries.name}</h3> 
 <img src="${countries.flag}" alt="plaatje van de Afghaanse vlag"/>
 <p>Has a population of: ${countries.population} people</p>
 </li>
`
    });

}


allCountries(countries);

