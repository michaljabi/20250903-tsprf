import { BehaviorSubject, Subject } from "rxjs";

const sampleCounter = new Subject<number>();

sampleCounter.next(230);
sampleCounter.next(99);

sampleCounter.subscribe((v) => {
  console.log(v);
});

const sampleCounterRememberLast = new BehaviorSubject<number>(100);

sampleCounterRememberLast.subscribe((v) => {
  console.log(v);
});

sampleCounterRememberLast.getValue(); //=
sampleCounterRememberLast.next(230);

sampleCounterRememberLast.getValue(); //=
sampleCounterRememberLast.next(99);

sampleCounterRememberLast.getValue(); //=

sampleCounterRememberLast.subscribe((v) => {
  console.log(v);
});

const countMe = new BehaviorSubject<number>(0);
function addNew(num: number) {
  countMe.next(countMe.getValue() + num);
}

addNew(10);
addNew(20);
addNew(40);

countMe.subscribe((v) => {
  console.log(v);
});

addNew(1);
addNew(1);
addNew(10);