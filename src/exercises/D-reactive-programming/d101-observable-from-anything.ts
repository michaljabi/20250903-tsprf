import { Observable } from 'rxjs'

/**
  #Zadanie:
  Odbierz wartości od observable i pokaż na konsoli.
  Co się dzieje, jeśli mamy kilku odbiorców ?

  #Cel:
  Pokazanie, że z dowolnych — nawet synchronicznych wartości można utworzyć Observable

  #Porównaj:
  ../C-asynchronous-concepts/c202-promise-from-anything.js
*/

  new Observable( (subscriber) => {

    subscriber.next(1234);
  });


export {}
