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
INIZIO ESERCIZIO*/
const objList = [];
   
class Movie {
    title;
    year;
    genre;
    rating;
    type;
    
    constructor(title, year, genre, rating, type){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;

    }

    toString(){
        console.log(`${this.title} è un ${this.type} di genere ${genre}. E/’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`)
    }
}

class Tv extends Movie {
    seasons;

    constructor(title, year, genre, rating, type, seasons){
        // super
        super(title, year, genre, rating, type,);
        this.seasons=seasons;
    }

    toString(){
        console.log(`${this.title} è una ${this.type} di genere ${genre}. E/’ stato rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`)
    }
}

