import { merge, of } from "rxjs";
import { $ } from "../../dom-api/selector";

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

// Nasz Subskrybent
const subscriber = {
  next(value: string) {
    resultDiv.innerText = value;
  },
};
// Rozwiązanie:
of("2010").subscribe(subscriber);

merge(of(1), of(20), of(22, 12, 1)).subscribe((v) => {
  console.log(v);
});

export {};
