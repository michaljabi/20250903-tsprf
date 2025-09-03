import { interval, map, take } from 'rxjs'

import { button, div, h2, h6 } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'

/**
 #Zadanie:
 Po kliknięciu w przycisk startBtn uruchom strumień {@see number$}.
 Zaproponuj obsługę błędów z wykorzystaniem errorWrapper i errorBox.

 #Cel:
 "Podglądanie" wartości strumienia dzięki operatorowi tap.
 Poznanie obsługi błędów w RxJS z użyciem operatorów:
 catchError, finalize, retry

 */

    // Pomocnicze wrapper'y DOM:
const startBtn = button('Start !', ['btn','btn-success', 'mr-2']);
const goUpResultH6 = h6('-');
const errorWrapper = div();
const errorBox = div([], ['alert', 'alert-danger']);

const number$ = interval(500).pipe(
    map((no: number) => {
        if(no > 4) {
            throw new Error('Level too high !')
        } else {
            return no;
        }
    }),
    take(20)
);

// Rozwiązanie:


// HTML Boilerplate:
const $root = $<HTMLDivElement>('main');
const divRow = div([
    div([
        startBtn
    ], ['col-6', 'text-center', 'mt-5']),
    div([
        h2('Idę w górę na piętro:'),
        goUpResultH6,
        errorWrapper
    ], ['col-6', 'text-center']),
], ['container', 'row']);
$root.appendChild(divRow);


export {}
