import { $ } from '../../dom-api/selector'
import { li } from '../../dom-api/make-dom'
import { interval } from 'rxjs';

/**
  #Zadanie:
  Pokazuj co 2 sekundy na liście kolejną osobę która wchodzi do pokoju.
  Obok pokaż upływający co sekundę czas

  Czy potrzebujemy do tego dwóch strumieni-interwałów?

  #Cel:
  Utrwalenie: jak zachowuje się strumień a jak możemy zmodyfikować subskrypcję.
*/

// Pomocniczy generator prawników:
function* pearsonSpecterLittGenerator(){
  yield 'Jessica Pearson';
  yield 'Harvey Specter';
  yield 'Louis Litt';
}
// Pomocniczy iterator
const lawyerEnter = pearsonSpecterLittGenerator();

// Pomocnicze selektory DOM:
const myUlList = $('#ulLawyers')
const h2Timer = $('#timer')
const divAlertTimerOver = $('#alertTimeOver')
// divAlertTimerOver.style.visibility = 'hidden';

// tworzenie elementu <li> z tekstem
const makeLawyer = (name: string) => li(name);

// Rozwiązanie:


export {}

