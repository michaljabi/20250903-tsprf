import { Subject } from "rxjs";

const subject = new Subject<string>();

subject.subscribe((v) => {
  console.log(v);
});



subject.next('A')
subject.complete();
subject.next('B')