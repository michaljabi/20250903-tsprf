import { $ } from '../../dom-api/selector'

  /**
    #Zadanie:
    Po każdym kliknięciu na przyciski "Dodaj" i "Odejmij" ma zmieniać się wynik w "Liczniku".
    Przykładowo: jeśli kliknę 4x add + 1x minus w resultDiv ma pojawić się 3
    Do zadania TRZEBA wykorzystać obiekt: subscriber.

    Jak dodać dodatkowe funkcjonalności do subscriber'a?

    #Cel:
    Kolejny sposób pozyskiwania wartości z 2 strumieni (scalanie).
    Pokazanie, że subskrypcja nie musi być wykonana jako funkcja. Można do niej przekazać obiekt subscriber'a
  */

  // Pomocnicze selektory DOM:
  const addBtn = $('#btnPlus');
  const minusBtn = $('#btnSubs');
  const resultDiv = $('#counter');

  // Nasz Subskrybent
  const subscriber = {
    next(value: string) {
      resultDiv.innerText = value;
    }
  };
  // Rozwiązanie:


export {}
