import assert from "assert";

import {
  from,
  map,
  mergeMap,
  reduce,
  tap /*, scan, interval, take,*/,
} from "rxjs";
import { sum } from "./number.helpers";

/**
 #Zadanie:
 Oblicz jakim budżetem musi dysponować Mikołaj żeby zakupić prezenty dla dzieci.

 #Cel:
 Zadnie na wstęp do tzw. PIPES - pokazuje związek między zadaniem, które można wykonać krok po kroku
 a definiowanymi wcześniej przez nas funkcjami pomocniczymi.
 Zauważając zależność możemy wykonać nasz własny pipeline!
 */
// Pomocniczy model danych:
interface Wish {
  name?: string;
  price: number;
}

interface Kid {
  name: string;
  wishList: Wish[];
}

// >! Określ model danych (TS):
const santaList = {
  children: [
    {
      name: "Cris",
      wishList: [
        { name: "", price: 123 },
        { name: "", price: 27 },
      ],
    },
    {
      name: "Bianca",
      wishList: [
        { name: "", price: 123 },
        { name: "", price: 27 },
      ],
    },
    {
      name: "Arnold",
      wishList: [
        { name: "", price: 123 },
        { name: "", price: 27 },
      ],
    },
    {
      name: "Stephanie",
      wishList: [
        { name: "", price: 123 },
        { name: "", price: 77 },
      ],
    },
    {
      name: "Ana",
      wishList: [
        { name: "", price: 123 },
        { name: "", price: 27 },
      ],
    },
  ],
};

// -----(ch)-(ch)-(ch)---->
//       megemap  |
//       \     \
// -------(w)-(w)-(w)-(w)-(w)
//       map
//         |   |   |   |
// --------(p)-(p)-(p)

// Podaj Rozwiązanie:
let cashAmount = 0;

const pluckPrice = (w: Wish): Wish["price"] => w.price;

pluckPrice({ price: 3000 }); //=

// gdzie chcesz możesz re-użyć funkcji do sumowania
sum(300, 20); //=

// sum może posłużyć jako PURE function do utworzenia operatora na bazie sumowania:
const sumOperator = () => reduce(sum);

// Od razu jako strumień:
// interval(500)
from(santaList.children)
  .pipe(
    mergeMap((ch) => ch.wishList),
    map(pluckPrice),
    tap((v) => {
      console.log(v);
    }),
    // reduce(sum)
    sumOperator()
  )
  .subscribe((value: number) => {
    cashAmount = value;
  });

// Sprawdź poprawność:
console.log(cashAmount);
console.log(
  "Witaj Mikołaju, musisz przygotować: ",
  cashAmount,
  "zł, żeby kupić wszystkie prezenty"
);
assert(cashAmount === 800);

export { Wish, Kid };
