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
  "stefan",
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

const upperNames = response
  .filter((w) => typeof w === "string")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
console.log(upperNames);
console.log(response);
// część 2:
console.log(upperNames.map((name) => name.padStart(20, ".")).join("\n"));

export {};
