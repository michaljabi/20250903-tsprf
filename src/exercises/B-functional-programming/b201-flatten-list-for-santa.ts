import assert from 'assert'

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
  name: string;
  price: number;
}

interface Kid {
  name: string;
  wishList: Wish[]
}

// >! Określ model danych (TS):
const santaList = {
  children: [
    {
      name: 'Cris',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Bianca',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Arnold',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Stephanie',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 77},
      ]
    },
    {
      name: 'Ana',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
  ]
};

// Podaj Rozwiązanie:
const cashAmount = 800;



// Sprawdź poprawność:
console.log(cashAmount);
console.log('Witaj Mikołaju, musisz przygotować: ', cashAmount, 'zł, żeby kupić wszystkie prezenty');
assert(cashAmount === 800);

export {
  Wish,
  Kid
}
