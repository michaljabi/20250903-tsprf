
/**
  #Zadanie:
  1. Zakładając że serwer bankowy posiada dane związane z wysokością aktualnych kursów walut.
  Kupując 4 produkty w walucie EUR określ ile musisz zapłacić w PLN.
  Rozwiń API banku tak aby mógł dostarczyć Ci aktualne dane odnośnie walut.

  #Cel:
  Wyjście z hell-koncepcji callbacks to: Promises.
  Odświeżenie sobie najprostszego sposobu utworzenia Promise.
*/
const makeItem = (name: string, amount: number, value: number) => ({name, amount, value});

const bankAPI = {
  // Tutaj potrzebna będzie zmiana:
  fetchCurrencies() {
    const plnTo = {
      USD: 3.78602,
      EUR: 4.32559,
      PLN: 1
    };
  }
};

const yourCart = [
  makeItem('Die cast toy: Tow Mater', 3, 66),
  makeItem('Infento: Genius Kit', 1, 549),
];

const valueInUSD = yourCart.map(i => i.value).reduce((acc: number, value: number) => acc + value);

// Rozwiązanie:
  let valueInPLN = 0;

  console.log('Your cart value in USD:', valueInUSD);
  console.log('Wartość koszyka w PLN:', valueInPLN);


export {};
