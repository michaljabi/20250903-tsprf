import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { $ } from "./dom/selector.ts";
import { liElementFactory } from "./dom/li-element.factory.ts";
import {
  debounceTime,
  fromEvent,
  map,
  filter,
  scan,
  startWith,
  tap,
  share,
  Observable,
} from "rxjs";

const sum = (acc: number, value: number): number => acc + value;

const chooseLongest = (longest: number, current: number): number =>
  longest > current ? longest : current;

// LIST OF WORDS + INPUT COMPONENT:
// (input):
const newWordInput: HTMLInputElement = $("#new-word");

// pod spodem fromEvent wygląda mniej więcej tak (+/-)
function makeFromEvent() {
    return new Observable<Event>((subscriber) => 
        newWordInput.addEventListener("input", (ev) => {
            subscriber.next(ev)
        })
    )
}

const input$ = fromEvent(newWordInput, "input").pipe(
  map((ev) => (ev.target as HTMLInputElement).value),
  debounceTime(500),
  tap(() => {
    newWordInput.value = "";
  }),
  share()
);

// (list):
const allWordsUl: HTMLUListElement = $("#all-words");
input$.subscribe((word) => {
  allWordsUl.appendChild(liElementFactory(word));
});

// "A" - WORDS CARD COMPONENT:
const wordsStartWithAUl: HTMLUListElement = $("#words-start-with-a");
input$
  .pipe(filter((word) => word.toLowerCase().startsWith("a")))
  .subscribe((aWord) => {
    wordsStartWithAUl.appendChild(liElementFactory(aWord));
  });

// ALL WORDS COUNTER CARD COMPONENT:
const allWordsCounter: HTMLDivElement = $("#all-words-counter");

input$
  .pipe(
    map((_) => 1),
    startWith(0),
    scan(sum)
  )
  .subscribe((n) => {
    allWordsCounter.textContent = String(n);
  });

// LONGEST WORD CARD COMPONENT:
const longestWordLength: HTMLDivElement = $("#longest-word-length");
input$
  .pipe(
    map((word) => word.length),
    startWith(0),
    scan(chooseLongest)
  )
  .subscribe((n) => {
    longestWordLength.textContent = `${n} liter`;
  });
