/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

___________________________________________________________________

*/

let età = document.getElementById("userAge");
let km = document.getElementById("userKm");
let button = document.getElementById("userAgeButton");

let pricePerKm = 0.21

let baseTicketPrice = km.value * pricePerKm

let prezzoFinale

userAgeButton.addEventListener("click", function () {

    if(età.value < 18) {

        console.log()

    } else if(età.value >= 65) {

        console.log()

    } else {

        console.log()

    }
})
