import { interval, Subject, take } from "rxjs";

// COLD
const second$ = interval(1000).pipe(take(5));

second$.subscribe({
  next: (v) => {
    console.log(v);
  },
  error: (err) => {
    console.log(err.message);
  },
  complete: () => {
    console.log("complete!");
  },
});

// HOT:
const hotProxy = new Subject<number>();
// hotProxy.next();
// hotProxy.error();
// hotProxy.complete();
second$.subscribe(hotProxy);

hotProxy.subscribe((v: number) => {
  console.log(v);
});

setTimeout(() => {
  // 2nd consumer:
  hotProxy.subscribe((v) => {
    console.log(v);
  });
}, 4000);

setTimeout(() => {
  hotProxy.subscribe((v) => {
    console.log(v);
  });
}, 6000);
