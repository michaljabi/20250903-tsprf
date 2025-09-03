import { li } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'

/**
 #Zadanie:
 1. Pokaż elementy przychodzące z back-endu jako elementy listy <li> w DOM.
 2. Dodaj obok tablicę "Użytkowniczki" zawierającą tylko kobiety

 #Cel:
 Użycie programowania funkcyjnego w praktycznym przykładzie, gdzie renderujemy coś w DOM.
 */

// Z back-endu przychodzą do nas dane w postaci tablicy stringów:
const backendApiCallRequest = (): string[] => ['marian', 'stefan', 'jadwiga', 'henryka', 'anna'];

// Rozwiązanie:


// DOM wrappers:
const ulUserList = $('#userList') as HTMLUListElement;
const sampleLi = li('Przykładowy element <li>');

ulUserList.appendChild(sampleLi);

//
/*
 Koncepcyjny układ DOM dla 2 części zadania:
 <div class="row">
     <div class="col-6">
         <h6>Użytkownicy aktywni</h6>
         <ul id="userList" class="list-group">
             <li class="list-group-item">marian</li>
             <li class="list-group-item">stefan</li>
             ...
         </ul>
     </div>
     <div class="col-6">
         <h6>Użytkowniczki</h6>
         <ul class="list-group">
             <li class="list-group-item">jadwiga</li>
             <li class="list-group-item">anna</li>
             ...
         </ul>
     </div>
 </div>
*/


export {}
