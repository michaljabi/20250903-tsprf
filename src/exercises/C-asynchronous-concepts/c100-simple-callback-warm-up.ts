
/**
   Używanie funkcji jako "wywołania zwrotnego" - callback
*/

// PROVIDER:
function sayHello(greetingFn: (w: string) => void) {
    // console.log();
    greetingFn('Hello');
    setTimeout(() => {
        greetingFn('Goodbye')
    }, 3000)
}

// CONSUMER:
function welcomeMike (word: string) {
    console.log(word, 'Welcome Mike')
}

sayHello(welcomeMike)

export {};
