import { Observable } from 'rxjs'

/**
    #Zadanie:
    Zaproponuj właściwą obsługę subskrypcji, błędu i zakończenia rozmowy z prawnikiem

    #Cel:
    Pokazanie API dla rxjs.Observable.
    Zauważ, że Observables są leniwe
*/

const mySuperAnswer$ = new Observable( (subscriber) => {

  const goldenAnswersToYourClient = [
    'What would Harvey do?',
    'Please, hang on',
    'I will call you later...',
    'I\'m Donna, I know everything',
    'The subscriber is currently unavailable'
  ];

  let n = 0;
  const interval = setInterval(() => {
    const quote = goldenAnswersToYourClient[n++];
    if(quote) {
      subscriber.next(quote);
    } else {
      subscriber.complete();
      clearInterval(interval);
    }
  }, 500)

} );


export {}

