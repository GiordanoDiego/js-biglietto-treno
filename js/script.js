/*
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)

    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


let numeroKm;
numeroKm = prompt("Quanti km vuoi percorrere?");
numeroKm = parseInt(numeroKm);
document.getElementById('numeroKm').innerHTML = numeroKm;
console.log("numero km percorsi",numeroKm, typeof numeroKm);


let userEta;
userEta = prompt("Inserisci la tua età:");
userEta = parseInt(userEta);
document.getElementById('userEta').innerHTML = userEta;
console.log("Età del passegero",userEta, typeof userEta);

const priceKm = 0.21;
let prezzoCorsa = numeroKm * priceKm;

//controllo se l'utente ha inserito un numero
if (isNaN(numeroKm) || isNaN(userEta)){
    document.getElementById('errore').innerHTML = "Errore puoi inserire soltanto numeri nelle domande";
    console.log("Errore, puoi inserire soltanto numeri");
}

else{
    console.log("hai inserito soli numeri");
    if (userEta < 18){
        let prezzoCorsaMinorenni = prezzoCorsa - ((prezzoCorsa * 20) / 100);
        document.getElementById('prezzoCorsaMinorenni').innerHTML = prezzoCorsaMinorenni.toFixed(2) + " (prezzo scontato per i minorenni)";


        console.log("Prezzo totale della corsa, sconto per i minorenni = ",prezzoCorsaMinorenni, typeof prezzoCorsaMinorenni);
    } 
    else if (userEta > 65) {
        let prezzoCorsaOver65 = prezzoCorsa - ((prezzoCorsa * 40) / 100);

        document.getElementById('prezzoCorsaOver65').innerHTML = prezzoCorsaOver65.toFixed(2) + " (prezzo scontato per gli over 65)";
        console.log("Prezzo totale della corsa, sconto over 65= ",prezzoCorsaOver65, typeof prezzoCorsaOver65);
    }
    else{
        document.getElementById('prezzoCorsa').innerHTML = prezzoCorsa.toFixed(2);
        console.log("Prezzo totale della corsa = ",prezzoCorsa, typeof prezzoCorsa);
    } 
}





// alternative sconto





