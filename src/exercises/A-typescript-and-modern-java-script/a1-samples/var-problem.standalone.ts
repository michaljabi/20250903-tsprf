/**
 #Zadanie:
 Najpierw zgadnij, co pokaże linia "console.log(car)".
 Dopiero później sprawdź (odkomentuj).

 #Cel:
 Zobrazowanie problemów z var. I braku poczucia komfortu w vanilla JavaScript,
 na skutek dziwnych zdefiniowanych w JavaScript zachowań języka.
*/

var car = 'Audi A8';

(function () {

  console.log(car);

  (function myOtherCar () {
    // #! Spróbuj zgadnąć jaką wartość pokaże linia poniżej:
    // console.log(car);

    var car = 'My Band new Car';
    // .....
  })()
}());


export {}
