import assert from 'assert'
import { Kid } from './b201-flatten-list-for-santa';

/**
 #Zadanie:
 Oblicz jakim budżetem musi dysponować Mikołaj żeby zakupić prezenty dla dzieci.

 #Cel:
 Poznanie biblioteki "Ramda" która może działać na zasadzie "rurociągu".
 */

const santaList: {children: Kid[]} = {
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


console.log('Witaj Mikołaju, musisz przygotować: ', cashAmount, 'zł, żeby kupić wszystkie prezenty');

assert(cashAmount === 800);



export {}
