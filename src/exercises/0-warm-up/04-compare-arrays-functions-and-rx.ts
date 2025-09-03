import { from, map } from 'rxjs'

// ----------------------
// ARRAYS:
// 1:
const numbers = [1, 10, 20, 30, 40, 6, 4, 3];
console.log(numbers);
// 2:
// Tablica numerów poddana transformacji:
const multipliedNumbers = numbers.map(n => n * 10);
console.log(multipliedNumbers);
// 3:
// Bazowa tablica nie ulega zmianie:
console.log(numbers)

// ----------------------
// STREAMS:
// 1:
const number$ = from(numbers);
number$.subscribe((num) => {
	console.log(num);
})
// 2:
// Strumień numerów poddany transformacji:
const multipliedNumber$ = number$.pipe(map(n => n * 10));
multipliedNumber$.subscribe((num) => {
	console.log(num);
})
// 3:
// Bazowy strumień nie ulega zmianie:
number$.subscribe((num) => {
	console.log(num);
})
