$(document).ready(function(){

    //Esercizio 1: Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
        //definiamo la varaiabile studente
    var studente = {
        'nome' : 'Adriana',
        'cognome' : 'Margiotta',
        'eta' : 22,
    };
        //tramite il ciclo for...in stampiamo sullo schermo tutte le proprietà
    for (var key in studente){
        //console.log(studente[key]); //stampo solo i valori
        console.log(key + ': ' + studente[key]); //stampo la proprietà completa (sia il nome che il valore)
        //document.getElementById("stampa").innerHTML = studente[key]; //stampa a schermo
        $('.stampa').append(studente[key] + ' '); //stampa a schermo solo i valori
        //$('.stampa').append(key + ': ' + studente[key]); //stampa a schermo solo i valori
    };

    

});