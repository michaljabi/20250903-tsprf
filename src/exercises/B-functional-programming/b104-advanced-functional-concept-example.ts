
/**
 #Zadanie:
 Krysia kupuje nowy sprzęt Dolby Surround.
 Po jakimś czasie decyduje się jeszcze na zakup lepszego SubWoofer'a.
 1. Potrzebujemy żeby nasza funkcja "sumItems" obsługiwała sumy częściowe. Ponieważ zakupy następują oddzielnie.
 Innymi słowy, Krysia nie wie ile będzie kosztował SubWoofer a funkcja "sumItem" musi poczekać.
 2*. Co jeśli musimy mieć obie funkcjonalności dla "sumItems": tj. zakup "synchroniczny" i "asynchroniczny"

 #Cel:
 Bardziej zaawansowane użycie funkcji.
 Poznanie koncepcji curry w JavaScript

 "Jak to funkcja zwraca funkcje?" :)
 "Jak to funkcja przyjmuje funkcję?" :)
 */

// >! Zdefiniuj odpowiedni typ dla modelu danych (TS):

const homeCinema = { item: 'DolbySurround Home Cinema', price: 1500 };
const subWoofer  = { item: 'A better SubWoofer', price: 500 };


// Rozwiązanie:
function sumItems(a :number, b: number): number {
 return a + b;
}


export {}
