import { Observable } from 'rxjs'

/**
  #Zadanie:
  Odbierz wartości od observable i pokaż na konsoli.
  Co się dzieje, jeśli mamy kilku odbiorców ?

  #Cel:
  Pokazanie, że z dowolnych — nawet synchronicznych wartości można utworzyć Observable

  #Porównaj:
  ../C-asynchronous-concepts/c201-promise-from-anything.js
*/

// Provider
 const number$ =  new Observable<number>( (subscriber) => {

    subscriber.next(1234);
    subscriber.next(1);
    subscriber.next(678);
    // subscriber.next('?');
    subscriber.complete();
  });


// Consumer #1:
number$.subscribe((value) => {
  console.log(value)
})

// Consumer #2:
number$.subscribe((value) => {
  console.log(value)
})

// Consumer #3:
number$.subscribe((value) => {
  console.log(value)
})

// Consumer #4:
number$.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log('Completed!')
  },
  error: (err) => {
    console.log(err.message)
  }
})


export {}
