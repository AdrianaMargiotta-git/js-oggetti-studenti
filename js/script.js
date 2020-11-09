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

    //Esercizio 2: Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
        //definiamo un array di studenti
    var arrayStudenti = [
        {
            'nome' : 'Adriana',
            'cognome' : 'Margiotta',
            'eta' : 22,
        },
        {
            'nome' : 'John',
            'cognome' : 'Doe',
            'eta' : 44,
        },
        {
            'nome' : 'Friedrich',
            'cognome' : 'Nietzsche',
            'eta' : 176,
        },
    ];
        //tramite il ciclo for stampo per ogni studente il nome e il cognome
    for (var i = 0; i < arrayStudenti.length; i++) {
        console.log(arrayStudenti[i].nome + ' ' + arrayStudenti[i].cognome); //li mostro nella console
        //document.getElementById("stampa2").innerHTML = arrayStudenti[i].nome + ' ' + arrayStudenti[i].cognome;
        //document.getElementById("stampa2").innerHTML = JSON.stringify(arrayStudenti[1].nome, null, 4);
    }

});