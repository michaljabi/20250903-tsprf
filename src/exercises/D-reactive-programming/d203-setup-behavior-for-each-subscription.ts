import { interval } from "rxjs";

import { map, take, filter } from "rxjs/operators";

/**
    #Zadanie:
    Utwórz 4 subskrypcje, które co sekundę będą pokazywały na konsoli następujące rzeczy:
        1. -1-2-3|
        2. -('Hello')-('Hello !')-('Hello !!')-('Hello !!!')|
        3. -2-4-6-8-10|
        4. -10-20--40|

    #Cel:
    Zrozumienie, że każda ze subskrypcji, nawet dla tego samego strumienia - może mieć swój unikatowy charakter
    dzięki użyciu operatorów
*/

const incrementBy = (value: number) => map((n: number) => n + value);
const multiplyBy = (value: number) => map((n: number) => n * value);

const second$ = interval(1000);

//x -1-2-3|
second$.pipe(take(3), incrementBy(1)).subscribe((n) => {
  console.log(n);
});

//x -('Hello')-('Hello !')-('Hello !!')-('Hello !!!')|
second$
  .pipe(
    take(4),
    map((n) => `Hello ${"!".repeat(n)}`.trim())
  )
  .subscribe((n) => {
    console.log(n);
  });

//x -2-4-6-8-10|
second$.pipe(take(5), incrementBy(1), multiplyBy(2)).subscribe((n) => {
  console.log(n);
});

//x -10-20--40|
second$
  .pipe(
    take(4),
    filter((n) => n !== 2),
    incrementBy(1),
    multiplyBy(10)
  )
  .subscribe((n) => {
    console.log(n);
  });

export {};
