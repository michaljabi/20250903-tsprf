
/**
 Typescript implementuje zapis klas z ES6 rozszerzając go o dodatkowe modyfikatory dla pól:
 "public, private, protected" oraz idiom związany z możliwością skróconego zapisu konstruktora,
 w przypadku korzystania z tych pól.

 #Cel:
 Przypomnienie podstawowych zapisów dotyczących klas i obiektów w TS.

 */
// Przykład #1:
// Klasy + instancje
class Person {
    public isRich = false;
    private cashAmount?: number;
    protected name: string;

    constructor(name: string, cash = 0) {
        this.name = name;
        this.cashAmount = cash;
        this.isRich = cash > 2000000;
    }
}

const myBrotherInLaw = new Person('Janusz', 10000);
const myNeighbour = new Person('Grażyna', 2000001);

// Pod spodem transpilowane jest to i tak do funkcji (w JS nie ma klas, to tylko "lukier składniowy").
console.log(typeof Person);

// Tak jak w JS mamy możliwość użycia instanceof - dla porównania właściwego typu obiektu złożonego.
console.log(myBrotherInLaw instanceof Person);
console.log(myBrotherInLaw);
console.log(myNeighbour);
// myNeighbour.name = 'John';


// Przykład #2:
// Skróty używane w klasach:
class OtherPerson {
    public isRich = false;

    constructor(protected name: string, private cashAmount = 0) {
        this.isRich = cashAmount > 2000000;
    }
}
const otherRicher = new OtherPerson('Henryk', 5000000);

console.log(otherRicher);

// W obydwu przypadkach zachowanie JS się nie zmienia "class" to tylko lukier składniowy
console.log(typeof Person);
console.log(typeof OtherPerson);

// Przykład #3:
// Zachowanie JS - się nie zmienia, JS NIE POSIADA mechanizmu przeładowywania metod lub konstruktorów !!

class PayDay {

    // constructor(private cashAmount: number) {}
    constructor(private cashAmount: number, private createdAt: Date) {}

    // giveMeMyMoney() :number {
    //     return this.cashAmount;
    // }
    giveMeMyMoney(from: Date):number {
        const dateEquals = from.toISOString() === this.createdAt.toISOString();
        return dateEquals ? this.cashAmount : 0;
    }
}

const myHappyDay = new PayDay(2000, new Date());

myHappyDay.giveMeMyMoney(new Date()) //?

// Jest to zgodne z zachowaniem, które znamy do tej pory,
// nie ma mowy o obiekcie, który posiada 2 takie same pola:
const mySuperObject = {
    name: 'Cool Thing',
    // name: 'Super Cool Thing'
}
// Zawsze "ostatni wygrywa":
console.log(mySuperObject.name);

export {};
