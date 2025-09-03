
/**
 TypeScript posiada mechanizmy pozwalające nam na osiągnięcie podobnej elastyczności zapisów, co w JavaScript.
 Przy jednoczesnym pilnowaniu naszej składni.

 Mapped types
 https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types

 any
 https://www.typescriptlang.org/docs/handbook/basic-types.html#any

 unknown
 // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type

 Utility Types
 // https://www.typescriptlang.org/docs/handbook/utility-types.html#introduction

 Type assertions:
 https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions

 */

// Przykład #1 Mapped types:
// Typ na podstawie pól w interface:

// wprowadzenie:
// w Union możliwy jest również taki zapis:
type State = 'loading' | 'ready' | 'error';
let flag: State;
// teraz flag, może przyjąć jedynie te 3 wartości. Możesz to sprawdzić poniżej

// Zakładając, że mamy Interface:
interface User {
    name: string;
    age?: number;
    position: string;
}
type UserFields = keyof User;

let field: UserFields;
field = 'position';


type HasUserFields = {[K in keyof User]: boolean};

let hasFields: HasUserFields;
hasFields = {
    age: false,
    position: false,
    name: true
}

// JS pozwala również na "dynamiczne" rozszerzanie pól w obiekcie - jak to uzyskać w TS:
interface DynamicObject {
    [key: string]: string
}

const car: DynamicObject = {my: 'car', is: 'great'};
const helloWorld: DynamicObject = { hello: 'World...' };


// Przykład #2 typ any:
// Pomocnik - jeśli nie znamy jeszcze typu - lub migrujemy kod JavaScript do TypeScript
// pozwala na zachowanie znane z JS - jako "dynamiczna zmiana typu" - przyprawiające programistów OOP o zawrót głowy :)
let someValue: any = 546456;
someValue = "can be later a string";
someValue = false;
// Any można przypisać do wszystkiego - co nie jest bezpieczne:
let num: number;
num = someValue;

// Przykład #3 typ unknown:
// W TS 3.0 dostajemy również typ `unknown` - bezpieczniejszą odmianę "any".
// Możemy wszystko przypisać do `unknown` ale samego `unknown` nie możemy przypisać do niczego innego poza `unknown`
let unknownValue: unknown = 546456;
unknownValue = "can be later a string";
unknownValue = false;
// unknown NIE można przypisać do wszystkiego - co poprawia nasze bezpieczeństwo:
let otherNum: number;
// otherNum = unknownValue;

// Przykład #4 Utility Types:
// Również krok w kierunku elastyczności JS. Co jeśli mamy zdefiniowany model danych, ale chcemy korzystać w kolejnym
// obiekcie tylko z 2 - 3 pól poprzedniego?

interface Item {
    name: string;
    value: number;
    amount: number;
}

type NamedThing = Pick<Item, 'name'>;
type ReadOnlyItem = Readonly<Item>;
type OptionalFieldsItem = Partial<Item>;

const myItem: Item =  {amount: 10, name: 'Some things', value: 290};

const namedItem: NamedThing =  {name: 'Name of the thing'};

const readOnlyItem: ReadOnlyItem =  {amount: 10, name: 'Some things', value: 290};

const optionalItem: OptionalFieldsItem =  {amount: 10};


// Przykład #5 Type assertions:
// Często mylone w TS z "type casting" - niestety tutaj "Type assertion" działa jako powiedzenie TypeScript'owi:
// "zaufaj mi - wiem co robie". TS nie wykonuje tutaj żadnego rzutowania typu. Po prostu zdaje się na programistę

// TS sam nie sprawdza typu. Nie zauważy brakujących pól "value" oraz "amount" w typie Item.
const otherNotExactlyAnItem = {name: 'Other item'} as Item;

export {};
