
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
const backendApiRequest = (): string[] => ['marian', 'stefan', 'jadwiga', 'henryka', 'anna'];

// Rozwiązanie:
const response = backendApiRequest();

console.log(response)

export {}
