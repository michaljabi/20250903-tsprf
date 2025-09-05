import { timer, combineLatest, zip } from "rxjs";
import { map, startWith } from "rxjs/operators";

// timerOne emits first value at 1s
const timerOne$ = timer(1000).pipe(
  map((n) => n + 1),
  startWith(0)
);
// timerTwo emits first value at 2s,
const timerTwo$ = timer(2000).pipe(
  map((n) => n + 1),
  startWith(0)
);
// timerThree emits first value at 3s
const timerThree$ = timer(3000).pipe(
  map((n) => n + 1),
  startWith(0)
);

// when one timer emits, emit the latest values from each timer as an array
combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    console.log(`${timerValOne}-${timerValTwo}-${timerValThree}`);
  }
);

zip([timerOne$, timerTwo$, timerThree$]).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    console.log(`${timerValOne}-${timerValTwo}-${timerValThree}`);
  }
);
