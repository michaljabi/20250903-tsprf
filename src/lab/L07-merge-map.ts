import { from, map, mergeAll, mergeMap } from "rxjs";

// Zadanie:
// na każdą emisję stumienia A chcemy zobaczyć całość strumienia B
const streamA$ = from([1, 2, 3]);
const streamB$ = from(["B", "C"]);

// Nienajlepsze rozwiązanie ale działa:
// Obvious:
streamA$.subscribe((v) => {
  console.log(v);
  streamB$.subscribe((v2) => {
    console.log(v2 + v);
  });
});

// 2. Wyprowdzenie mergeMap:
streamA$.pipe(map((v) => streamB$.pipe(map((v2) => v2 + v)))).subscribe((stream) => {
  stream.subscribe((v) => {
    console.log(v);
  });
});

// 2.1 Spłaszczanie strumienia strumieni:
streamA$
  .pipe(
    map(() => streamB$),
    mergeAll()
  )
  .subscribe((v) => {
    console.log(v);
  });

// 2.2 Zauważenie że najpierw map a potem mergeAll (flat) to tak naprawdę: mergeMap
streamA$.pipe(mergeMap((v) => streamB$.pipe(map((v2) => v2 + v)))).subscribe((v) => {
  console.log(v);
});
