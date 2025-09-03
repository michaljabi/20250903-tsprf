import { interval, Observable } from "rxjs";

import { take, map, filter, tap } from "rxjs/operators";

/**
    #Zadanie:
    Ze strumienia numerów interesują nas tylko 4 pierwsze emisje.
    Potem chcemy zakończyć subskrypcję.
    Za każdym razem chcemy mieć informację w postaci : "Hello world x" gdzie "x" to numer informacji

    #Cel:
    Wykorzystanie operatorów. Jako "helperów" w osiągnięciu danego zachowania
    naszej subskrypcji
*/

const number$ = interval(2000);
const hello$: Observable<string> = number$.pipe(
  take(4),
  tap((n) => {
    console.log(n);
  }),
  filter((n) => n > 0),
  map((n) => `Hello world ${n}`),
  tap((n) => {
    console.log(n);
  })
);

hello$.subscribe((value) => {
  console.log(value);
});

export {};
