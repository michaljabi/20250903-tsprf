import { mergeMap, of } from "rxjs";

const steamOne$ = of(1);
const steamTwo$ = of(2);
const steamThree$ = of(3);

steamOne$
  .pipe(
    mergeMap(() => steamTwo$),
    mergeMap(() => steamThree$)
  )

  .subscribe((v) => {
    console.log(v);
  });

// -------- powód (wartości jednego strumienia, determinują emisje na 2 strumieniu):

const steamOnez$ = of(890);
const steamTwoz$ = (initialValue: number) => of(2 + initialValue);
const steamThreez$ = (initialValue: number) => of(3 + initialValue);

steamOnez$
  .pipe(
    mergeMap((value: number) => steamTwoz$(value)),

    // operacje synchroniczne (nie na strumieniu - też zadziałają w mergeMap)
    // tutaj synchronicznie zwracamy tablicę z obliczeniem, i ona zostanie odpakowana !
    mergeMap((value) => [value + 30, 90]),
    mergeMap((value: number) => steamThreez$(value))
  )

  .subscribe((v) => {
    console.log(v);
  });
