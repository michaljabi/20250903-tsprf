
/**
 Piękno TypeScript'a polega na jego rozszerzaniu możliwości języka JavaScript - przy jednoczesnym braku ingerencji
 w dotychczasowe założenia języka i jego strukturę. Innymi słowy: dostajemy faktyczny "nadzbiór JavaScript".
 Możemy stosować TS od razu - albo wprowadzać go krok po kroku (mając odpowiednią jego konfiguracje),
 plik po pliku - ponieważ poprawne zapisy w czystym "Vanilla JS" - będą poprawne z pkt. widzenia TS.

 #Cel:
 Objaśnienie/przypomnienie podstawowych zapisów i motywacji do zastosowania TypeScript w projekcie

 */

// Dodanie zapisu dla typów prostych - tam gdzie nie znamy jeszcze wartości:
let str: string;
let num: number;
let bool: boolean;


// Wnioskowanie typów przez TypeScript - samo przypisanie wartości określa typ danych,
// TypeScript nie pozwoli go dynamicznie zmienić
const myString = '';
const myNumber = 928;
const myBoolean = false;

// Określanie parametrów wejściowych i tego, co zwraca funkcja
function calculateWiningNumber(a: number, b: number): number {
   return a % b;
}

const result = calculateWiningNumber(300, 22);
console.log('result:', result);

export {};
