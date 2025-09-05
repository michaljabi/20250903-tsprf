import { fromEvent, map, merge, of, scan, startWith } from "rxjs";
import { $ } from "../../dom-api/selector";
import { sum } from "../B-functional-programming/number.helpers";

/**
    #Zadanie:
    Po każdym kliknięciu na przyciski "Dodaj" i "Odejmij" ma zmieniać się wynik w "Liczniku".
    Przykładowo: jeśli kliknę 4x add + 1x minus w resultDiv ma pojawić się 3
    Do zadania TRZEBA wykorzystać obiekt: subscriber.

    Jak dodać dodatkowe funkcjonalności do subscriber'a?

    #Cel:
    Kolejny sposób pozyskiwania wartości z 2 strumieni (scalanie).
    Pokazanie, że subskrypcja nie musi być wykonana jako funkcja. Można do niej przekazać obiekt subscriber'a
  */

// [-1, 1, 1, 1].reduce(sum) // =2

// Pomocnicze selektory DOM:
const addBtn = $("#btnPlus"); // -1-1-1-1-1-1-1
const minusBtn = $("#btnSubs"); // -(-1)-(-1)
const resultDiv = $("#counter");

const mapTo = (n: number) => map((_) => n);

const one$ = fromEvent(addBtn, "click").pipe(mapTo(1));
const minusOne$ = fromEvent(minusBtn, "click").pipe(mapTo(-1));

const currentNumber$ = merge(one$, minusOne$).pipe(
  startWith(10),
  scan(sum),
  map((n) => String(n))
);

// Nasz Subskrybent {} (new Object())
const subscriber = {
  next(value: string) {
    resultDiv.innerText = value;
  },
  complete() {
    console.log(":)");
  },
};
// Rozwiązanie:
currentNumber$.subscribe(subscriber);

// const number$ = merge(of(1), of(20), of(22));

// number$.subscribe((v) => {
//   console.log(v);
// });

export {};
