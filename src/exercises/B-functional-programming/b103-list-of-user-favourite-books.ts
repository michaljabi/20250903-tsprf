
/**
 #Zadanie:
 Pokaż tablicę Array<string> zawierającą jedynie cytaty,
 z wszystkich książek, wszystkich użytkowników

 #Cel:
 Kolejne zadanie na utrwalenie koncepcji programowania funkcyjnego
 Pokazanie możliwości wykorzystania małych funkcji pomocniczych w wykonaniu zadania.
 */

// >! Przygotuj model danych w TS:


// fake API z danymi:
const api = {
  users: [
    {
      name: 'Michał',
      age: 34,
      books : [
        {name: 'The Two Towers', quote: 'There is some good in this world, and it’s worth fighting for'},
        {name: 'Fight Club', quote: 'I don’t want to die without any scars.'},
        {name: 'C is fun', quote: 'memory leak..., memory leak..., memory leak...'},
      ]
    },
    {
      name: 'Wacława',
      age: 25,
      books : [
        {name: 'A Woman of No Importance', quote: 'Who, being loved, is poor?'},
        {name: 'To Kill a Mockingbird', quote: 'Most people are nice when you finally see them.'},
        {name: 'Autumn Leaves', quote: 'It is better to be hated for what you are than to be loved for what you are not.'},
        {name: 'Cookbook', quote: 'add 2 eggs to the butter and flour'},
      ]
    }
  ]
};

// Rozwiązanie:
const quotes = api.users;

console.log(quotes);

export {}

