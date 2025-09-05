import {
  fromEvent,
  interval,
  map,
  mergeMap,
  Subscription,
  take,
  switchMap,
  merge,
  share,
  shareReplay,
} from "rxjs";

import { $ } from "../../dom-api/selector";
/**
    #Zadanie:
    Zasubskrybuj się do strumienia sekund wykorzystując przygotowane przyciski.
    Po przyciśnięciu przycisku sub1StartBtn - startujemy subskrypcję 1
    Po przyciśnięciu przycisku sub2StartBtn - startujemy subskrypcję 2

    Wyniki działania subskrypcji (to co przychodzi nam na strumieniu) będziemy pokazywać odpowiednio w:
    {@see sub1ResultH6} oraz {@see sub2ResultH6}

    Po spięciu event'ów i przygotowaniu subskrypcji, naciśnij przycisk sub1StartBtn
    ZANIM naciśniesz przycisk sub2StartBtn - spróbuj zgadnąć co pokażę się w sub2ResultH6;

    #Cel:

    Zrozumienie jak działają strumienie w momencie subskrybowania.
    Poznanie sposobów jak z "cold observable" zrobić "hot observable".
    Utrwalenie fromEvent, używanie operatora switchMap (unikanie zagnieżdżania subskrypcji)
  */

// Pomocnicze selektory DOM:
const btn1 = $("button#btn1");
const btn2 = $("button#btn2");
const h6Result1 = $("h6#result1");
const h6Result2 = $("h6#result2");

// Strumień
const second$ = interval(1000).pipe(
  take(5),
  map((n) => n + 1),
  // share() // jak skończę to rozpoczynam od nowa (jeśli pojawi się nowy subskrybent)
  shareReplay() // jak skończę to już nie ma emisji (jeśli pojawi się nowy subskrybent)
);

// Rozwiązanie:
const btn1Click$ = fromEvent(btn1, "click");
const btn2Click$ = fromEvent(btn2, "click");

// Proper logic - ale mamy tutaj subskrypcję w subskrypcji 😭
let mySub: Subscription;

btn1Click$.subscribe(() => {
  mySub?.unsubscribe();
  mySub = second$.subscribe((num) => {
    h6Result1.textContent = String(num);
  });
});

// Użycie operatora:
// Rozwiązujemy problem z zagnieżdzeniem subów +1
// ale.... dalej w rezultacie multisuby na h6Result2 😭
/*
btn2Click$.pipe(mergeMap(() => second$)).subscribe((num) => {
  h6Result2.textContent = String(num);
});
*/
// dlatego rozwiązaniem będzie `switchMap`
btn2Click$.pipe(switchMap(() => second$)).subscribe((num) => {
  h6Result2.textContent = String(num);
});
