import { interval, Observable, take, share } from "rxjs";

// naiwna implementacja operatora kreacyjnego interval
function makeIterval(ms: number) {
  return new Observable<number>((subscriber) => {
    let x = 0;
    const myInt = setInterval(() => {
      subscriber.next(x++);
    }, ms);
    return () => {
      clearInterval(myInt);
    };
  });
}

const second$ = makeIterval(1000).pipe(take(5), share());

second$.subscribe((v) => {
  console.log(v);
});

setTimeout(() => {
  // 2nd consumer:
  second$.subscribe((v) => {
    console.log(v);
  });
}, 3000);

setTimeout(() => {
  // 2nd consumer:
  second$.subscribe((v) => {
    console.log(v);
  });
}, 6000);
