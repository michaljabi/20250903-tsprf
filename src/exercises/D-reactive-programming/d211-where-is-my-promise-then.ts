import {
  delay,
  from,
  fromEvent,
  map,
  mergeMap,
  Subscription,
  switchMap,
} from "rxjs";
import { button, li, ul } from "../../dom-api/make-dom";
import { $ } from "../../dom-api/selector";
import { ajax } from "rxjs/ajax";
import { tap } from "ramda";

/**
 #Zadanie:
 Po kliknięciu w przycisk załaduj listę użytkowników ze źródła on-line.
 Po czym poczekaj jedną sekundę aby później pokazać wynik na DOM.
 Cała akcja ma 3 kroki (click - ajax - render after 1 sec)

 link do API z listą użytkowników: https://jsonplaceholder.typicode.com/users

 #Cel:
 Czasami potrzebujemy od Observable podobnej funkcjonalności jak w przypadku Promise.
 "Przyjdź z wynikiem, i wykonaj kolejną operację asynchroniczną" - jak w praktyce to osiągnąć?
 W mechanizmie promise mamy .then() i kolejną Promise, jak podobną funkcjonalność osiągnąć w Observable?

 Poznanie wywołań ajax przez observable, unikanie zagnieżdżeń subskrypcji.
 Operatory: switchMap, map, from - utrwalenie
 */
interface AjaxUser {
  name: string;
  email: string;
}

// Pomocnicze wrapper'y DOM:
const loadUsersBtn = button("Załaduj użytkowników", ["btn", "btn-primary"]);
const myUlList = ul([], ["list-group", "text-dark"]);
const mapUserToLi = (user: AjaxUser) => li(`${user.name} (${user.email})`);

// Rozwiązanie:

const btnClick$ = fromEvent(loadUsersBtn, "click");

const user$ = ajax.getJSON<AjaxUser[]>(
  "https://jsonplaceholder.typicode.com/users"
);

/*
let sub: Subscription;

btnClick$.subscribe(() => {
  sub?.unsubscribe();
  sub = user$.pipe(delay(1000)).subscribe((result) => {
    console.log(result);
    myUlList.innerHTML = "";
    myUlList.append(...result.map(mapUserToLi));
  });
});
*/

btnClick$
  .pipe(
    switchMap(() => user$.pipe(delay(1000))),
    tap(() => {
      myUlList.innerHTML = "";
    }),
    mergeMap((users) => {
      console.log(users);
      return from(users);
    })
  )
  .subscribe((user) => {
    myUlList.append(mapUserToLi(user));
  });

// HTML Boilerplate:
const buttonWrapperDOM = $("#buttonWrapper") as HTMLDivElement;
const usersWrapperDOM = $("#usersWrapper") as HTMLDivElement;

buttonWrapperDOM.appendChild(loadUsersBtn);
usersWrapperDOM.appendChild(myUlList);

export {};
