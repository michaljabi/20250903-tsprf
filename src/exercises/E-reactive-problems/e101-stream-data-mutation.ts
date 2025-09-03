import { from, map } from 'rxjs'

/**
 #Zadanie:
 1. Odkomentuj mutację w subskrypcji: Sub - #1, zobacz co się stało w Sub - #2.
 Dlaczego tak się dzieje?
 2. Zaproponuj rozwiązania problemu

 #Cel:
 Zrozumienie iż strumienie powinniśmy traktować jako "tylko do odczytu".
 Logika która ma nam pomóc ...
 */
interface User {
    name: string;
}


const name$ = from([
    {name: 'Michał'} ,
    {name: 'Zbyszek'},
    {name: 'Krysia'},
]);

// Sub - #1
name$.subscribe((user: User) => {
    console.log(user.name)
    // Odkomentuj mutację danych i zobacz co się stanie w subskrypcji poniżej
    // user.name += '_troll';
});

setTimeout(() => {

    // Sub - #2
    name$.pipe(
        map((user: User) => `Welcome back ${user.name}!`)
    ).subscribe((x: string) => console.log(x));
}, 3000);


export {};
