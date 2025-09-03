import { li } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'

/**
 #Zadanie:
 Po kliknięciu w przycisk załaduj listę zadań ze źródła on-line.
 Znajdź zadanie z tytułem: "deleniti ea temporibus enim" (id: 56)
 Pobierz dane jego autora za pomocą : https://jsonplaceholder.typicode.com/users/(:userId)

 link do API z listą zadań: https://jsonplaceholder.typicode.com/todos

 #Cel:
 Utrwalenie użycia "switchMap".
 Zadanie jest podobne do tego z "promise - then".
 Pokusa rozwiązania zadania zagnieżdżeniem subskrypcji grozi wynikiem podobnym do "callback hell"
 */
interface ToDo {
    title: string;
}

// Pomocnicze selektory DOM:
const loadTodosBtn = $('button#loadTodo');
const myToDoUl = $('ul#todoList');

const mapTodoToLi = (todo: ToDo) => li(`${todo.title}`);

// Rozwiązanie:




export {};
