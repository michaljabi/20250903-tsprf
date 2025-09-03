import { interval, take } from 'rxjs'

import { $ } from '../../dom-api/selector'
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
  const btn1 = $('button#btn1');
  const btn2 = $('button#btn2');
  const h6Result1 = $('h6#result1');
  const h6Result2 = $('h6#result2');

  // Strumień
  const second$ = interval(1000).pipe( take(20) );

  // Rozwiązanie:



