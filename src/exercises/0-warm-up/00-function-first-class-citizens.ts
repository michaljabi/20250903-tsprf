// Przypomnienie sobie, z jakim środowiskiem mamy do czynienia:

// Wyrażenie funkcji:
const myHelloWorldJob = function() {
	console.log('Hello World');
}

// Definicja funkcji:
function executor(jobFunction: () => void) {

	setTimeout(() => {
		jobFunction()
	}, 2000)
}

// Zobacz sposoby wywołania executor'a:
// - Tak jest, funkcja przyjmuje funkcję !

// #1
executor(myHelloWorldJob);

// #2
executor(() => {
	console.log('Goodbye World !')
})


