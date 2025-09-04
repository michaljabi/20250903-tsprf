import { fromEvent, map, scan, startWith } from "rxjs";
import { $ } from "../../dom-api/selector";
import { sum } from "../B-functional-programming/number.helpers";

/**
  #Zadanie:
  Po kliknięciu na dokument zliczaj kliknięcia w h2Counter.

  #Cel:
  Pokazanie podstawowej możliwości interakcji z DOM, po przez utworzenie strumienia event'ów.
  Utrwalenie wykorzystania helper'ów i operatorów, poznanie kolejnych operatorów.
*/

// Pomocniczy selector DOM:
const h2Counter = $("#counter");

const number$ = fromEvent(document, "click").pipe(
  map((_) => 1),
  startWith(100),
  scan(sum),
);

number$.subscribe((num) => {
  h2Counter.textContent = String(num);
});

// Rozwiązanie:

export {};
