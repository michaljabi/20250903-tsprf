import { interval } from 'rxjs'

/**
  #Zadanie:
  Zakończ subskrypcję po 3 sekundach.

  #Cel:
  Istotne jest zakańczanie subskrypcji jeśli nie jest nam już ona potrzebna.
  Podobnie jak potrzebujemy w JavaScript robić clearInterval lub clearTimeout.
  Tutaj również nie możemy dopuścić do "memory leak'ów"
*/

const number$ = interval(1000);

number$.subscribe((no) => {
  console.log('My number is', no)
});


export {}
