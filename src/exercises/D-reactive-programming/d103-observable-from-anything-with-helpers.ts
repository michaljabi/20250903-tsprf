// creation operators:
import { interval, of, from, Observable } from "rxjs";

// instance operators:
import { take } from "rxjs/operators";

/**
  #Zadanie:
  Wykaż możliwości utworzenia observable jako:
  interwał, tablica, string, Object
  różnica pomiędzy "of" oraz "from"

  #Cel:
  Wykazanie, że z użyciem "helperów" (statycznych operatorów) można utworzyć obserwowalną kolekcję z dowolnych składników JavaScript
*/

class NgService {
  getVeggies(): Observable<string> {
    return of("");
  }
}

const vegetable = "tomato";
const fruits = ["apples", "bananas", "mangoes", "cherries"];

// czy te strumienie są skończone ?
// czy może pojawić się error ?

const vegetable$ = of(vegetable /*, 'lettuce', 'onion'*/);

vegetable$.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Completed!");
  },
});

const fruit$ = from(fruits);

fruit$.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Completed!");
  },
});

const second$ = interval(500);

// Consumer 1:
second$.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Completed!");
  },
});

// Consumer 2:
second$.pipe(take(5)).subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Completed!");
  },
});

export {};
