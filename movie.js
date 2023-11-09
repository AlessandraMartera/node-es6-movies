/* Esercizio
Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
Creare una classe Movie che contenga le informazioni sopra indicate.
Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.

Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo:
Jaws è un film di genere Drama. E’ stato rilasciato nel 1975 ed ha un voto di 8
Breaking Bad è una serie tv di genere Drama. La prima stagione è stata rilasciato nel 2008 ed in totale sono state prodotte 5 stagioni. Ha un voto di 9.5

Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.
Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.
Eseguire tutto il codice da terminale tramite NodeJs e stampiamo nel terminale il risultato delle varie funzioni.

BONUS:
Rendere le proprietà delle classi private e creare dei setter e dei getter per potervi accedere.
Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99
*/

// INIZIO ESERCIZIO ----------------------------------------------------------------------------

// Array di oggetti iniziale
let objList = [
    {
    title: "Ritorno al Futuro",
    year: "1985",
    genre: "action",
    rating: 8.5,
    type: "movie",
    },
    {
    title: "Ritorno al Futuro 2",
    year: "1985",
    genre: "Fantasy",
    rating: 5.5,
    type: "tv",
    seasons: "2"
    },
    {
    title: "Bracking Bad",
    year: "2012",
    genre: "action",
    rating: 9.5,
    type: "tv",
    seasons: "4"
    },
    {
    title: "La bella e la bestia",
    year: "2018",
    genre: "Drama",
    rating: 6.7,
    type: "movie",
    },
    {
    title: "Avengers - infinuty war",
    year: "2015",
    genre: "Fantasy",
    rating: 8.5,
    type: "movie",
    },
    {
    title: "Ritorno al Futuro - la serie",
    year: "1985",
    genre: "Fantasy",
    rating: 5.5,
    type: "tv",
    seasons: "2"
    },
    {
    title: "Loki",
    year: "2021",
    genre: "Fantasy",
    rating: 9.5,
    type: "tv",
    seasons: "2"
    },
    {
    title: "Cenerentola",
    year: "2010",
    genre: "Drama",
    rating: 6.7,
    type: "movie",
    }

];
   
// creazione della Classe Movie
class Movie {
    title;
    year;
    genre;
    rating;
    // dato che il tipe nella classe movie sarà sempre movie quindi volendo potrei assegnarlo subito 
    // type = "movie"
    type;
    
    // passo a type già un valore, cosi se type non doeveese essere specificato li assegno un volere di defoult "movie"
    constructor(title, year, genre, rating, type = "movie"){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString(){
        return `${this.title} è un ${this.type} di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`
    }
}

// estensione dalla classe Movie di Serie Tv
class Tv extends Movie {
    // anche qui potrei fare 
    // type = "tv";
    seasons;

    constructor(title, year, genre, rating, type, seasons){
        // super serve per richiamare il costruttore della classe padre 
        super(title, year, genre, rating, type);
        this.seasons=seasons;
    }

    toString(){
        return `${this.title} è una ${this.type} di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`
    }
}


// Divisione in due array separati di film e serie tv
// map crea un array con lo stesso numero degli elementi del primo
// map deve per forza ritornare un qualcosa, altrimenti da undfind
const MoviesList = objList.map((element => {
    if(element.type === "movie"){
        return new Movie (element.title, element.year, element.genre, element.rating, element.type);
    } else{
        return new Tv (element.title, element.year, element.genre, element.rating, element.type, element.seasons);
    }
}))

console.log(`questa è la lista dei film e serie tv:`);
console.log(MoviesList);

// Funzione di Media Voti in base al genere
function averageVote(value) {

    let sum = 0;
    let sumElement = 0;
    // let choiceElement = value;

    console.log(`la media dei voti del genere ${value} è:`);
    objList.forEach(element => { 
        if ( element.genre === value ){
            sum += element.rating;
            sumElement++;
        }
    })
    return sum/sumElement;  
}
console.log(averageVote("Fantasy"));

// Creiamo una funzione che restituisca la lista di tutti i film in base al genre, senza che questi si ripetano.
function searchGenreFilm(value){
    console.log(`i film che corrispondono al genere ${value} sono:`)
    objList.forEach(el => {
        if ( el.genre === value ){
            if(el.type === "movie"){
                console.log(el.title);
            }
            
        }
    })
}

function allGenreFilm(){
    console.log(`i generi presenti nella lista sono:`)
    allGenre = [];
    objList.forEach(el => {
        if ( !allGenre.includes(el.genre) ){
            allGenre.push(el.genre)
        }
    })
    console.log(allGenre)
}

allGenreFilm();

console.log(`qui di seguito la lista dei film cercati`);
searchGenreFilm("Fantasy");
// Creo la ricerca dei film in base al genere, che non si ripetano
