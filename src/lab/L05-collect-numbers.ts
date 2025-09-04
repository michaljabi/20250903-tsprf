import { interval } from "rxjs";

import { take, scan, map } from "rxjs/operators";

[1, 2, 3, 4, 5].reduce((acc: number[], value: number) => {
  console.log(acc);
  acc.push(value + 1);
  return acc;
}, []); //=

// użyteczny operator
const incrementBy = (value: number) => map((n: number) => n + value);

const numberCollector$ = interval(1000).pipe(
  take(5),
  incrementBy(1),
  scan((acc: number[], value: number) => {
    console.log(acc);
    acc.push(value);
    return acc;
  }, [])
);

numberCollector$.subscribe((value) => {
  console.log(value);
});
