// 1:
const numbers: number[] = [1, 10, 20, 30, 40, 6, 4, 3]

// Tablica numerów:
console.log(numbers)

// 2:
const higherNumbers = numbers.filter((n: number) => n > 10)

// Tablica numerów poddana transformacji:
console.log(higherNumbers)

// 3:
// Bazowa tablica nie ulega zmianie:
console.log(numbers)

