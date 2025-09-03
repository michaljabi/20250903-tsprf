
/**
   #Zadanie:
   1. Zakładając że serwer bankowy posiada dane związane z wysokością aktualnych kursów walut.
   Kupując 4 produkty w walucie EUR określ ile musisz zapłacić w PLN.
   Rozwiń API banku [w najprostszy znany Ci sposób = callbacks] tak aby mógł dostarczyć Ci aktualne dane odnośnie walut.

   2. Jak można obsłużyć błędy w zaproponowanym przez nas rozwiązaniu?

   #Cel:
   Pokazanie wykorzystania w praktyce przekazywania funkcji jako callback.
   Nakreślenie problemu "Callback Hell".
*/
// >! Zdefiniuj model danych dla rzeczy w koszyku

const makeItem = (name: string, amount: number, value: number) => ({name, amount, value});

interface CommercialBank {
  fetchCurrencies(): void;
}

const bankAPI: CommercialBank = {
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

const valueInUSD = yourCart.map(i => i.value).reduce((acc, value) => acc + value);

// Rozwiązanie:
const valueInPLN = 0;

console.log('Your cart value in USD:', valueInUSD);
console.log('Wartość koszyka w PLN:', valueInPLN);



export {};
