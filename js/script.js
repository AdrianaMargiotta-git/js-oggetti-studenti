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
        $('.stampa').append(key + ': ' + studente[key] + ' '); //stampa a schermo la proprietà completa
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
    };

    //Eserczio 3: Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
        //creo una nuova variabile per inserire i sati dell'utente
    var nuovoStudente = {
        'nome' : prompt("Inserisci il tuo nome:"),
        'cognome' : prompt("Inserisci il tuo cognome:"),
        'eta' : parseInt(prompt("Inserisci la tua eta"))
    };
    arrayStudenti.push(nuovoStudente); //pusho i dati dell'utente nell'arrayStudenti
    console.log(arrayStudenti);

    for(var i = 0; i < arrayStudenti.length; i++){
    console.log(arrayStudenti[i].nome + ' ' + arrayStudenti[i].cognome + ' ' + arrayStudenti[i].eta);
    };

    //Stampa tutta la lista a schermo
    for(var i = 0; i < arrayStudenti.length; i++){
        for (var key in arrayStudenti[i]){
            document.getElementById('listaCompleta').innerHTML = "Lista studenti";
            $('.studenti').append('<p>' + key + ': ' + arrayStudenti[i][key] + '</p>');
        };
    };

});