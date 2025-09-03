/**
 Pisanie w TypeScript przypomina po trosze "duck-typing". Jest to wynikiem implementacji języka TS jako
 strukturalnie a nie nominalnie typowanego.

 @see: https://www.typescriptlang.org/docs/handbook/type-compatibility.html#introduction

 Decyzja o takim właśnie podejściu - była naturalna z punktu widzenia tego, jak działa JavaScript.

 W skrócie: możemy mówić o tym, że typ N jest kompatybilny z M jeśli M posiada przynajmniej wszystkie
 wymagane przez N pola/własności

 #Cel:
 Zrozumienie, że TypeScript używa tzw. typowania strukturalnego. Gdzie to "struktura" jest typem danych.
 Jeśli obiekt przypisywany posiada te samą strukturę danych - wymaganą przez nałożony typ. Wszystko jest OK.

 */

interface User {
    name: string;
    accessLevel: number;
    // isCool: boolean;
}

interface Administrator {
    name: string;
    accessLevel: number;
}

const myAdmin: Administrator = {
    name: 'Janusz',
    accessLevel: 1,
}
const myUser: User = myAdmin;

console.log(myUser)

export {};
