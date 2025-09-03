import {Observable, Subject, Subscriber} from 'rxjs'

class MySuperService {

  myData = 'some-static-data';
  subject = new Subject<string>();

  getData (): Subject<string> {
    return this.subject;
  }

  fire () {

  }
}
  /**
    #Zadanie:
    Kontroluj zachowanie strumienia w klasie MySuperService.
    Utwórz jej instancję i dopisz logikę do metody "fire()".
    Pokaż prawidłowość wyniku subskrybując do "getData()"

    Co jeśli chcielibyśmy mieć ostatnią znaną wartości tuż po zasubskrybowaniu ?

    #Cel:
    Poznanie najprostszego sposobu aby w naszej logice aplikacji podejmować decyzję, kiedy rozgłaszać dane.
    Określenie zachowania Subject, który jest za równo Observer jak i Observable.
  */

  // Przypomnij sobie konstrukcję:
  // Jakie posiada ograniczenia ?
  new Observable<number>( (observer: Subscriber<number>) => {

    observer.next(1234);
  });

  // Rozwiązanie:


