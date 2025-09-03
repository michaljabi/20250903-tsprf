import { Subject, map, repeat, scan } from 'rxjs'
import { ajax } from 'rxjs/ajax'

/**
 #Zadanie:
 Zamień nadużywane subject'y na observable.

 #Cel:
 Przypomnienie operatorów interval, take
 Dodanie operatora merge (2 przykład)
 */

(function updateCounterModule() {

  function myData(){
    let data = 0;
    const subject = new Subject();
    const interval = setInterval(() => {
      subject.next(data++);

      if(data > 3) {
        clearInterval(interval);
      }
    }, 500);
    return subject;
  }

  myData().subscribe((no) => {
    console.log('myData', no)
  });

}());

(function updateCounterModule() {
  const subject = new Subject<number>();

  document.addEventListener('click', () => {
    subject.next(1);
  });

  ajax('https://jsonplaceholder.typicode.com/todos')
      .pipe( map(() => 1), repeat(3) )
      .subscribe(() => subject.next(1));

  subject
      .pipe(
          scan((acc: number, val: number) => acc + val)
      )
      .subscribe((sum: number) => console.log('Counter updated', sum));
}());

export {};
