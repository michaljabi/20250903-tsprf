
/**
 Typy proste - to nie wszystko. Możemy na ich podstawie + obiektach - budować bardziej złożone struktury danych.
 Jednocześnie cały czas upewniając się o poprawności ich składni.

 TypeScript pozwala nam na używanie składni dodając nowe nazwane typy za pomocą słów kluczowych:
 type, interface - lub wnioskując typ na podstawie deklaracji klasy (o tym zagadnieniu nieco później - a105)

 #Cel:
 Pokazanie przykładów używania złożonych typów jako "inline" oraz zdefiniowane za pomocą "type" / "interface".

 */
// Przykład #1:
// Typy Inline:
let myHero: {name: string, realName: string};

myHero = {name: 'Batman', realName: 'Bruce Wane'};

// Typ zdefiniowany (re-używalny):
type Hero = {name: string, realName: string};


// Przykład #2:
// Union type:
type MyNumber = string | number;

const largeNumber: MyNumber = '19928338329299102193012736663989123712389';
const otherLuckyNumber: MyNumber = 9827;

// Przykład #3:
// Specjalny typ funkcji
type HelloFn = (name: string) => string;
let greetings: HelloFn;
greetings = (yourName: string) => {
    return `Greetings to ${yourName} !`
}
greetings('Mike') //?

// Przykład #4:
// Reprezentacja modelu danych:
interface FinancialRecord {
    cashAmount: MyNumber;
    name: string;
    startDate: Date;
}

const budget: FinancialRecord = {
    name: 'Budżet domowy',
    cashAmount: '10000',
    startDate: new Date()
}


export {};
