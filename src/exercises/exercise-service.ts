
interface Exercise {
  title: string;
  value: string;
  run?(): Promise<any> | Promise<undefined>;
  path?: string;
  disabled?: boolean;
}

const emptyRun = async () => {};

const exercisesList: Exercise[] = [
  {title: '[lv.0 - A] ES Syntax - przypomnienie i rozszerzenie', run: emptyRun, disabled: true, value: '-'},
  {value: 'a201', run: () => import('./A-typescript-and-modern-java-script/a201-es6-news'), title: 'A2.1 - ES6, czyli nowości w świecie JavaScript po 2015r.' },
  {value: 'a202', run: () => import('./A-typescript-and-modern-java-script/a202-es7-es8-es-next'), title: 'A2.2 - ES(7,8) ES-next, więcej nowości.... w latach 2016+' },

  {title: '[lv.1 - B] Wstęp - programowanie funkcyjne', run: emptyRun, disabled: true, value: '-'},
  {value: 'b101', run: () => import('./B-functional-programming/b101-functional-thinking'), title: '#B1.1 - Myślenie funkcyjne - a Ty? jak to wykonasz...' },
  {value: 'b102', run: () => import('./B-functional-programming/b102-higher-order-functions'), title: '#B1.2 - Zasady w programowaniu funkcyjnym oraz Higher Order Functions' },
  {value: 'b103', run: () => import('./B-functional-programming/b103-list-of-user-favourite-books'), title: '#B1.3 - Lista cytatów z książek - programowanie funkcyjne w praktyce' },
  {value: 'b104', run: () => import('./B-functional-programming/b104-advanced-functional-concept-example'), title: '#B1.4 - Zaawansowane koncepcje programowania funkcyjnego na przykładzie: "Curry"' },
  {value: 'b201', run: () => import('./B-functional-programming/b201-flatten-list-for-santa'), title: '#B2.1 - Pomóż Mikołajowi policzyć budżet na zakup prezentów' },
  {value: 'b202', run: () => import('./B-functional-programming/b202-flatten-list-for-santa-ramda'), title: '#B2.2 - Poznaj Ramda - rozwiązując ponownie problem Mikołaja' },
  {value: 'b203', path: 'exercises/B-functional-programming/dom/b203-functional-in-dom.html', title: '#B2.3 - Programowanie funkcyjne w praktyce: użyj DOM' },

  {title: '[lv.2 - C] Sposoby radzenia sobie z asynchronicznością', run: emptyRun, disabled: true, value: '-'},
  {value: 'c101', run: () => import('./C-asynchronous-concepts/c101-aync-using-callbacks'), title: '#C1.1 - Używanie Callbacks' },
  {value: 'c201', run: () => import('./C-asynchronous-concepts/c201-promise-from-anything'), title: '#C2.1 - Promise można zrobić ze wszystkiego!' },
  {value: 'c202', run: () => import('./C-asynchronous-concepts/c202-promise-refresher'), title: '#C2.2 - Przypomnij sobie całość konstrukcji promisów i używaj ich dzielnie!' },
  {value: 'c203', run: () => import('./C-asynchronous-concepts/c203-aync-using-promises'), title: '#C2.3 - Używanie Promise' },
  {value: 'c204', run: () => import('./C-asynchronous-concepts/c204-promise-wait-for-all'), title: '#C2.4 - Oblicz czy jest pogoda na latawiec pozyskując dane async z kilku źródeł' },

  {title: '[lv.3 - D] Programowanie reaktywne', run: emptyRun, disabled: true, value: '-'},
  {value: 'd101', run: () => import('./D-reactive-programming/d101-observable-from-anything'), title: '#D1.1 - Co to są strumienie danych i jak zorbić własny, z... czegokolwiek?' },
  {value: 'd102', run: () => import('./D-reactive-programming/d102-observable-api'), title: '#D1.2 - Jak wygląda całe API do subskrypcji' },
  {value: 'd103', run: () => import('./D-reactive-programming/d103-observable-from-anything-with-helpers'), title: '#D1.3 - Jeśli chcesz strumień danych z "czegokolwiek" - stosuj odpowiednie fn pomocnicze' },
  {value: 'd104', run: () => import('./D-reactive-programming/d104-subscription-control'), title: '#D1.4 - Kontroluj swoje subskrypcje' },
  {value: 'd201', run: () => import('./D-reactive-programming/d201-introduction-to-operators'), title: '#D2.1 - Użycie operatorów - startujemy!' },
  {value: 'd202', run: () => import('./D-reactive-programming/d202-understand-stream-of-values'), title: '#D2.2 - Utrwalenie i użycie wcześniej poznanych funkcjonalności: Zamiana na strumienie danych' },
  {value: 'd203', run: () => import('./D-reactive-programming/d203-setup-behavior-for-each-subscription'), title: '#D2.3 - Każda subskrypcja ma swoje unikatowe zachowanie - zrozumienie koncepcji subskrybowania' },
  {value: 'd204', path: 'exercises/D-reactive-programming/dom/d204-simple-dom-integration.html', title: '#D2.4 - Jak wygląda prosta integracja z Eventami w DOM?' },
  {value: 'd205', path: 'exercises/D-reactive-programming/dom/d205-more-advanced-dom-integration.html', title: '#D2.5 - Bardziej zaawansowane użycie DOM - wykorzystanie wcześniej poznanych własności strumieni, subskrybowania, i operatorów' },
  {value: 'd206', path: 'exercises/D-reactive-programming/dom/d206-filter-users-with-better-performance.html', title: '#D2.6 - Filtrowanie użytkowników' },
  {value: 'd207', path: 'exercises/D-reactive-programming/dom/d207-what-is-a-subscriber.html', title: '#D2.7 - Kto to właściwie jest subskrybent?' },
  {value: 'd208', path: 'exercises/D-reactive-programming/dom/d208-cold-and-hot-observable.html', title: '#D2.8 - Cold oraz Hot Observables | co oznacza ten podział?' },
  {value: 'd209', run: () => import('./D-reactive-programming/d209-what-is-a-subject'), title: '#D2.9 - Czym jest Subject?' },
  {value: 'd210', path: 'exercises/D-reactive-programming/dom/d210-to-be-like-promise-all.html', title: '#D2.10 - Być jak Promise.all w Observable' },
  {value: 'd211', path: 'exercises/D-reactive-programming/dom/d211-where-is-my-promise-then.html', title: '#D2.11 - No dobrze, ale gdzie jest moje piękne "promise.then(x).then(y)"' },
  {value: 'd212', path: 'exercises/D-reactive-programming/dom/d212-error-handling-operators.html', title: '#D2.12 - Operatory pomocne w wychwytywaniu błędów' },
  {value: 'd213', path: 'exercises/D-reactive-programming/dom/d213-observable-of-observables.html', title: '#D2.13 - Jak radzić sobie ze strumieniem, który emituje strumienie...?!' },

  {title: '[lv.4 - E] Najczęstsze błędy / problemy w prog. z użyciem strumieni', run: emptyRun, disabled: true, value: '-'},
  {value: 'e101', run: () => import('./E-reactive-problems/e101-stream-data-mutation'), title: '#E1.1 - Mutacja danych w strumieniu' },
  {value: 'e102', run: () => import('./E-reactive-problems/e102-many-sources-of-truth'), title: '#E1.2 - Wiele źródeł prawdy?!' },
  {value: 'e103', run: () => import('./E-reactive-problems/e103-subject-overuse'), title: '#E1.3 - Nadużywanie obiektu Subject' },
  {value: 'e104', path: 'exercises/E-reactive-problems/dom/e104-nesting-subscription.html', title: '#E1.4 - Zagnieżdżanie subskrypcji, hmmm wygląda znajomo....' },
];

export const exerciseService = {

  getAll(): Exercise[] {
     return exercisesList;
  },
  getOne(value: string): Exercise {
    const idx = exercisesList.findIndex((ex: Exercise)=> ex.value === value);
    return exercisesList[idx];
  }
};
