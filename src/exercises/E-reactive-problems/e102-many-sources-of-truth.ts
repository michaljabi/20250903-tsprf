import { BehaviorSubject, timer } from "rxjs";
import { map, mapTo } from "rxjs/operators";

class SimpleService {
  private number$: BehaviorSubject<number>;

  // spoiler o co chodzi przed rozwiązaniem e102.
  // dla przykładu Array
  private myData: number[] = [];

  constructor() {
    this.number$ = new BehaviorSubject(1);
    setTimeout(() => {
      this.number$.next(1000);
    }, 2000);
  }

  getNumbers() {
    return this.number$.asObservable();
  }

  getData(): readonly number[] {
    return this.myData;
  }
}

/**
 #Zadanie:
 1. Odkomentuj linię i sprawdź działanie w konsoli.
 Dlaczego tak się dzieje? Czy to dobra praktyka, czy jednak coś zmienić?

 2. Zamień brzydki setTimeout w SimpleService na observable i skomponuj z BehaviourSubject'em.

 #Cel:
 Omówienie typowego problemu "not a single source of truth"
 Subject'y muszą być prywatne!
 Musimy być pewni kto emituje dane i gdzie. Najlepiej robić to w ramach jednej klasy / modułu.
 */

const serviceInstance = new SimpleService();

// od teraz TS zabrał wszyskie metody mutujące w tym co wystawia w getData()
// serviceInstance.getData().push(2);

// #1 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no: number) => console.log("#sub1", no));

// #2 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no: number) => console.log("#sub2", no));

// #3 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no: number) => console.log("#sub3", no));

(function deepDownInTheOceanOfModules() {
  // co się stanie jeśli odkomentujemy linię poniżej
  timer(4000)
    .pipe(map((_) => 999))
    .subscribe(serviceInstance.getNumbers());


  // co się tam dziej
  // -----4000ms-(999)|->

  setTimeout(() => {
    serviceInstance.getNumbers().next(999);
    serviceInstance.getNumbers().complete();
  }, 4000)

  timer(4000)
    .pipe(map((_) => 999))
    .subscribe(() => {});
  timer(4000)
    .pipe(map((_) => 999))
    .subscribe({
      next(v) {},
      error(e) {},
      complete() {},
    });

  setTimeout(() => {
    serviceInstance.getNumbers().subscribe((v) => {
      console.log(v);
    });
  }, 5000);
})();

export {};
