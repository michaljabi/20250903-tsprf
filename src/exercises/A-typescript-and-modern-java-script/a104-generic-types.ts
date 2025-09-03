
/**
 Typy generyczne pełnią istotną funkcję z pkt. widzenia RxJS.
 Ponieważ dowolne dane mogą być potraktowane jako strumień, oznacza to iż typ danych "Observable"
 może określać również typ, który będzie emitowany na strumieniu.

 W tym układzie posiadamy zapis mówiący o np. Strumieniu, który emituje wartości numeryczne:

 Observable<number>

 ---
 @see: https://www.typescriptlang.org/docs/handbook/generics.html

 #Cel:
 Poznanie ważnej roli typów generycznych, które mają swoje zastosowanie w RxJS, oraz w programowaniu funkcyjnym
 w momencie, w którym korzystamy z TypeScript - i chcemy być pewni co do poprawności naszych zapisów i składni.

 */

// Przykład #1:
// Proste użycie generic function:
function showMyType<T>(arg: T): string {
    return typeof arg;
}

console.log(showMyType('hello world'));
console.log(showMyType(222));
console.log(showMyType( () => {}));

// Przykład #2:
//
function collectElements<TYPE>(first: TYPE, second: TYPE) {
    const myCollector: TYPE[] = [];
    myCollector.push(first);
    myCollector.push(second);
    return myCollector;
}

const elements: number[] = collectElements(1, 2);
const strElements: string[] = collectElements<string>('1', '2');


// Przykład #3:
// Wbudowane klasy generyczne

// najprostsza:
// const myArray: Array = []

// Mapy:
let myMapper: Map<number, string>;
let otherMapper = new Map<string, {name: string, value: number}>();

otherMapper.set('first-item', {name: 'Lego', value: 399})
otherMapper.set('second-item', {name: 'RC Car', value: 89.99})

// Promise:
let giveMeNumber: Promise<number>;


export {};
