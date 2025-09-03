import { Observable } from 'rxjs'

// PROVIDER:
const number$ = new Observable<number>((subscriber) => {
	subscriber.next(1);
	//subscriber.next(2);
	//subscriber.next(3);
})


// CONSUMER 1:
number$.subscribe((num) => {
	console.log('I got:', num);
})

// CONSUMER 2:
number$.subscribe({
	next(v) {
		console.log(v)
	},
	error(e) {
		console.log(e);
	},
	complete() {
		console.log('!')
	}
})
