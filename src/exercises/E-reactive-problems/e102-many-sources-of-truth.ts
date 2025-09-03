import { BehaviorSubject } from 'rxjs'

class SimpleService {

    number$: BehaviorSubject<number>;

    constructor () {
        this.number$ = new BehaviorSubject(1);
        setTimeout(() => {
            this.number$.next(1000);
        }, 2000);
    }

    getNumbers() {
        return this.number$;
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

// #1 Subscriber:
serviceInstance
    .getNumbers()
    .subscribe((no: number) => console.log('#sub1', no));

// #2 Subscriber:
serviceInstance
    .getNumbers()
    .subscribe((no: number) => console.log('#sub2', no));

// #3 Subscriber:
serviceInstance
    .getNumbers()
    .subscribe((no: number) => console.log('#sub3', no));

(function deepDownInTheOceanOfModules(){

    // co się stanie jeśli odkomentujemy linię poniżej
    // timer(4000).pipe(mapTo('TROLL')).subscribe(serviceInstance.getNumbers())
}());



export {};
