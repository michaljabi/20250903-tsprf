
  /**
   #Zadanie:
   Sprawdź dane. Popraw funkcje tak aby były PURE

   #Cel:
   Utrwalenie zasad Pure functions, na przykładach funkcji, które są IMPURE.
   */

  // Przykłady funkcji typu IMPURE:

  // #1 (same) INPUT / (different) OUTPUT
  function radomNickname(name = '') {
    return `${name}_${Math.random() * 1000 | 0}`;
  }
  // dla tych samych danych wejściowych produkowane zawsze różne dane wyjściowe

  // #2 INPUT mutation
  function extendLawyerSkill(lawyer = {}) {
    lawyer.adaptEnvironmentRate = '60%';
    return lawyer;
  }
  // Powód:
  // Dane wejściowe są mutowane, zmienia się ich stan

  // #3 External dependency
  function getTodosTitles(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then( res => res.json())
      .then( todos => {
        const titles = todos.map(t => t.title);
        callback(titles);
      });
  }
  // Powód:
  // Wynik działania w callback jes zależny od tego co dostarczy serwer

