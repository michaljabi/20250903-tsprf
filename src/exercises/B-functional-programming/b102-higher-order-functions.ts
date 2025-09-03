
/**
 #Zadanie:
 Poznaj / przypomnij sobie możliwości dzięki wykorzystaniu API dla tablic

 #Cel:
 Utrwalenie zasad programowania funkcyjnego:
 Brak mutacji danych, małe funkcje, krok-po-kroku do celu, re-używalność kodu
 Poznanie innych funkcji higher order dla tablic

 więcej:
 {@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
 */

// Iteracja elementów
[1,2,3,4,5].forEach((element: number) => {
 console.log(element);
});

// Mapowanie
// Transformacja elementów
const mapped = [1,2,3,4,5].map((nr: number) => 'Chapter #'+nr);
console.log(mapped);

// Filtrowanie
// Zmiana ilości elementów
const oddNumbers = [1,2,3,4,5].filter((nr: number) => (nr%2));
console.log(oddNumbers);

// Sprawdzenie warunku
// Każdy element spełnia predykat
const allLowerThan10 = [1,2,3,4,5].every((nr: number) => nr < 10);
console.log(allLowerThan10);

// "Redukcja" elementów
// Gdzie map i filter nie może tam reduce pośle!
const sumOfElements = [1,2,3,4,5].reduce((acc: number, value: number) => acc + value);
console.log(sumOfElements);

// Mapowanie a potem spłaszczenie tablicy
const elements = [1, 2, 3];
console.log(elements.flatMap((e: number) => [e, e ** 2]))
console.log(elements.map((e: number) => [e, e ** 2]).flat())

export {}





const numbers = [1,2,3,4,5];
const numbersBy2 = numbers.map((nr: number) => nr * 2);

console.log(numbersBy2)
