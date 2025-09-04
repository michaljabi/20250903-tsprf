import { from, fromEvent, map, of, filter, tap, startWith } from "rxjs";
import { li } from "../../dom-api/make-dom";
import { $ } from "../../dom-api/selector";

// Model danych:
interface Professional {
  name: string;
  age: number;
  profession: string;
}

function userService() {
  const userFactory = (
    name: string,
    age: number,
    profession: string
  ): Professional => ({ name, age, profession });

  return {
    getAll: (): Professional[] => [
      userFactory("Zdzisław Ącki", 48, "hydraulik"),
      userFactory("Kasia Kowalska", 28, "aktorka"),
      userFactory("Michał Legacy", 58, "programista"),
      userFactory("Roman Nowak", 68, "polityk"),
      userFactory("Anna Nowak", 25, "ekonomista"),
      userFactory("Zdzisław Nowak", 44, "bankier"),
      userFactory("Roman Zbych", 35, "ekonomista"),
      userFactory("Janina Bosko", 35, "programista"),
    ],
  };
}

/**
  #Zadanie:
    1. Pobierz z serwisu listę użytkowników i pokaż ja na DOM
    2. Zaimplementuj filtrowanie użytkowników używając 'inputFilter'
    3. Zdarzenie 'keyup' przy umownym założeniu iż dane z serwisu przychodzą z serwera,
       to nie do końca "najwydajniejsze" wyjście - zaproponuj rozwiązanie.

  #Cel:
  Pokazanie nowych operatorów i nauczenie się ich wykorzystywania;
  Pamiętaj o możliwości sprawdzenia działania operatorów na: http://rxmarbles.com/;
*/

// Pomocnicze DOM makers:
const makeLi = (user: Professional) =>
  li(`${user.name} (${user.age}) - ${user.profession}`);

// Pomocnicze selektory:
const userList = $("ul#userList");
const inputFilter = $('input[name="filter"]');

// Rozwiązanie:

// powiąż strumienie:
const inputText$ = fromEvent(inputFilter, "input").pipe(
  map((ev) => {
    // if (ev.target instanceof HTMLInputElement) {
    //   return ev.target.value;
    // }
    return (ev.target as HTMLInputElement).value;
  })
);
const user$ = from(userService().getAll());

inputText$
  .pipe(
    startWith(""),
    tap(() => {
      userList.innerHTML = "";
    })
  )
  .subscribe((text) => {
    user$
      .pipe(
        filter((u) => u.profession.toLowerCase().startsWith(text.toLowerCase()))
      )
      .subscribe((user) => {
        userList.append(makeLi(user));
      });
  });

// inputFilter.addEventListener("input", (ev) => {
//   if (ev.target instanceof HTMLInputElement) {
//     console.log(ev.target.value);
//   }
//   userList.innerHTML = "";
//   userList.append(
//     ...userService().getAll().map(makeLi)
//     // makeLi({ name: "Michał", age: 20, profession: "sprzedawca" }),
//     // makeLi({ name: "Henryk", age: 20, profession: "sprzedawca" })
//   );
// });

export {};
