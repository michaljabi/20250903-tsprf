/**
 #Zadanie:
 1. Zamień pierwsze litery imion na duże i przedstaw jako nowa tablica.
 Do pokazania danych użyj console.log();

 2. Co zrobisz jeśli nastąpiła zmiana wymagań i imiona należy przedstawić w formie:
    ..............Marian
    ..............Stefan
    .............Jadwiga
    .............Henryka
    ................Anna


 3. Świat nie jest kolorowy..., co jeśli na końcu listy dodamy jakiś np. null ?

 #Cel:
 Zadanie obrazujące iż do osiągnięcia tego samego efektu można uzyskać
 na klika różnych sposobów (imperatywnie, funkcyjnie etc.)
*/

// Z back-endu przychodzą do nas dane w postaci tablicy stringów:
const backendApiRequest = (): (string | null)[] => [
  "marian",
  "michał",
  "stefan",
  null,
  "jadwiga",
  "henryka",
  "anna",
  null,
];

// Rozwiązanie:
const response = backendApiRequest();

typeof {}; //=
typeof []; //=
typeof null; //=
typeof ""; //=
typeof true; //=

// (1 === '1'); //=
// (1 == '1'); //=

// sposób 1: (imperatywny)
let result: string[] = [];
for (const name of response) {
  console.log(name);
  //console.log(typeof name);
  if (name === null) {
    continue;
  }
  result.push(name.charAt(0).toUpperCase() + name.slice(1));
}
console.log(result);

// sposób 2: (deklaratywny) [podejście funkcyjne]
// PURE FUNCTIONS:
// 1. single resposibility
// 2. NO side effects
// 3. same input -> same output
export const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

// type predicate:
const isString = (sth: unknown): sth is string => typeof sth === "string"; // (function expression)
const padWithDots = (name: string) => name.padStart(20, ".");

// function declaration:
function isString2 (sth: unknown): sth is string {
   return typeof sth === "string";
}

isString('') //=
isString(23) //=
isString(true) //=
isString(() => {}) //=

// ---
capitalize('krysia'); //=
capitalize('marek'); //=

const upperNames = response.filter(isString).map(capitalize);
console.log(upperNames);
console.log(response);
// część 2:
console.log(upperNames.map(padWithDots).join("\n"));


for(const myName of upperNames) {
  console.log(myName)
}

console.log(response);

export {};
