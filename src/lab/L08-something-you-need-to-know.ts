import { interval, Subject, take } from "rxjs";

// COLD
const second$ = interval(1000).pipe(take(5));

second$.subscribe((v) => {
  console.log(v);
});

setTimeout(() => {
  // 2nd consumer:
  second$.subscribe((v) => {
    console.log(v);
  });
}, 3000);

// HOT:
const myNumbers = new Subject();

myNumbers.next(101);

myNumbers.subscribe((v) => {
  console.log(v);
});

myNumbers.next(10);

myNumbers.subscribe((v) => {
  console.log(v);
});

myNumbers.next(202);
