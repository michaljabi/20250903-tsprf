import { Observable } from "rxjs";

// PROVIDER:
const number$ = new Observable<number>((subscriber) => {
  // subscriber.error(new Error("Oh no...!"));
  subscriber.next(1);
  subscriber.next(2);

  setTimeout(() => {
    subscriber.next(3);
  }, 2000);

  subscriber.complete();
});

// CONSUMER 1:
number$.subscribe((num) => {
  console.log("I got:", num);
});

// CONSUMER 2:
number$.subscribe({
  next(v) {
    console.log(v);
  },
  error(e) {
    console.log(e.message);
  },
  complete() {
    console.log("!");
  },
});
