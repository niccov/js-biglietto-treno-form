/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

___________________________________________________________________
-dichiarare e memorizzare la variabile con id userAge
-dichiarare e memorizzare la variabile con id userKm
-dichiarare e memorizzare la variabile con id userAgeButton
-dichiarare e memorizzare una variabile per la tariffa al km
-dichiarare e memorizzare una variabile per il prezzo base del biglietto
-dichiarare e memorizzare una variabile per il prezzo totale anziani
-dichiarare e memorizzare una variabile per il prezzo totale minorenni
-aggiungere evento click
-eseguire il calcolo per il biglietto base
? SE l'eta inserita è meno di 18
   .calcola il prezzo finale per i minorenni
   .stampa in console il prezzo finale per i minorenni 
:? ALTRIMENTI SE l'età inserita è maggiore o uguale di 65
   .calcola il prezzo finale per gli anziani
   .stampa in console il prezzo finale per gli anziani
:ALTRIMENTI 
   .stampa in console il prezzo base   
*/

let età = document.getElementById("userAge");
let km = document.getElementById("userKm");
let button = document.getElementById("userAgeButton");

let pricePerKm = 0.21;

let baseTicketPrice;

let prezzoFinaleMinorenni;
let prezzoFinaleAnziani;

userAgeButton.addEventListener("click", function () {

    baseTicketPrice = (km.value * pricePerKm).toFixed(2);

    if(età.value < 18) {

        prezzoFinaleMinorenni = (baseTicketPrice - (baseTicketPrice / 100 * 20)).toFixed(2);
        console.log(prezzoFinaleMinorenni);
        document.getElementById("prezzo-biglietto").innerHTML=prezzoFinaleMinorenni

    } else if(età.value >= 65) {

        prezzoFinaleAnziani = (baseTicketPrice - (baseTicketPrice / 100 * 40)).toFixed(2);
        console.log(prezzoFinaleAnziani);
        document.getElementById("prezzo-biglietto").innerHTML=prezzoFinaleAnziani

    } else {

        console.log(baseTicketPrice);
        document.getElementById("prezzo-biglietto").innerHTML=baseTicketPrice

    }
})
