import { Observable, Subject, Subscriber } from "rxjs";

class MySuperService {
  // private myData = 'some-static-data';

  // pole prywatne w JS / TS:
  #myData = "some-static-data";
  #subject = new Subject<string>();

  getData() {
    // naprawiamy problem - udostępnienia .next() na zewnątrz (Co potencjalnie tworzy tzw. "many sources of truth")
    return this.#subject.asObservable();
  }

  fire() {
    this.#subject.next(this.#myData);
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
new Observable<number>((observer: Subscriber<number>) => {
  observer.next(1234);
});

// Rozwiązanie:
const myDIInstance = new MySuperService();

// myDIInstance.#myData;

myDIInstance.getData().subscribe((value: string) => {
  console.log(value);
});

// myDIInstance.getData().next("OOPS!");

myDIInstance.fire();
