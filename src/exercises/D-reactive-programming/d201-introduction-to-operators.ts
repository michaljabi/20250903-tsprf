import { interval } from 'rxjs'

/**
    #Zadanie:
    Ze strumienia numerów interesują nas tylko 4 pierwsze emisje.
    Potem chcemy zakończyć subskrypcję.
    Za każdym razem chcemy mieć informację w postaci : "Hello world x" gdzie "x" to numer informacji

    #Cel:
    Wykorzystanie operatorów. Jako "helperów" w osiągnięciu danego zachowania
    naszej subskrypcji
*/

const number$ = interval(800);


export {}
