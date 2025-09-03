
/**
   Używanie funkcji jako "wywołania zwrotnego" - callback
*/

function sayHello(greetingFn: () => void) {
    console.log('Hello');
    greetingFn();
}

function welcomeMike () {
    console.log('Welcome Mike')
}

sayHello(welcomeMike)

export {};
