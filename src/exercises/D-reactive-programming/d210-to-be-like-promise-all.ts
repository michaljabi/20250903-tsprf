import { div, input, txt } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'


/**
    #Zadanie:
    Oblicz wymiary (objętość) obiektu, pobierając wartości z input'ów: height, width i length

    #Cel:
    Pokazanie odpowiednika Promise.all z wykorzystaniem strumieni danych.
    Pokazanie różnic pomiędzy 2 podejściami z wykorzystaniem funkcji pomocniczych: zip oraz combineLatest
 */

  // Pomocnicze wrapper'y DOM:
  const inputHeight = input({name: 'height', placeholder: 'wysokość...'});
  const inputWidth = input({name: 'width', placeholder: 'szerokość...'});
  const inputLength = input({name: 'length', placeholder: 'długość...'});
  const resultDiv = div([txt('0 m3')]);
  
  // Rozwiązanie:
  
  
  
  // HTML Boilerplate:
  const inputsDOM = $('#inputs');
  const resultWrapperDOM = $('#resultWrapper');
  inputsDOM.appendChild(inputHeight);
  inputsDOM.appendChild(inputWidth);
  inputsDOM.appendChild(inputLength);
  // ----
  resultWrapperDOM.appendChild(resultDiv);

  