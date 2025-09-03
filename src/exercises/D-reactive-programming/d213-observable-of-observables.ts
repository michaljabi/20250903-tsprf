import { from, of } from 'rxjs'

/**
   #Zadanie:
   Zasubskrybuj observableOfObservables i przygotuj odbiór tej subskrypcji tak,
   aby możliwe było odebranie "od razu" kolekcji danych - a nie kolekcji Observables
   Innymi słowy: uniknij zagnieżdżenia subskrypcji

   #Cel:
   Zadanie obrazuje jak radzić sobie z kolekcją observable, która emituje inne observable.
   Przypomnienie odniesienia do spłaszczania ("flattening") kolekcji danych.
 */

  // Strumień strumieni :) :
  const observableOfObservable$ = from([ of(1,2,3,4), of(2), of(90) ]);

  // Rozwiązanie:



