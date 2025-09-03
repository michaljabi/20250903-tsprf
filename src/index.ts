import { $ } from './dom-api/selector'
import { exerciseService } from './exercises/exercise-service'

const examplesSelectDOM = $('#examples') as HTMLSelectElement;
const $root = $('#root') as HTMLElement;

function simpleOptionElement(innerText: string, value = '', disabled = false) {
	const element = document.createElement('option');
	element.innerText = innerText;
	element.value = value;
	element.disabled = disabled;
	element.setAttribute('title', value);
	if(disabled) {
		element.style.fontWeight = 'bold';
	}
	return element;
}

const exercises = exerciseService.getAll();
examplesSelectDOM.appendChild(simpleOptionElement('-- Wybierz przykład / zadanie --'));
for( let x=0; x < exercises.length; x++){
	const ex = exercises[x];
	examplesSelectDOM.appendChild(simpleOptionElement(ex.title, ex.value, ex.disabled))
}

examplesSelectDOM.addEventListener('change', ( ev: Event ) => {
	const { value } = ev.target as HTMLSelectElement;
	console.clear();
	location.hash = value;
	loadExercise(value);
})

function loadExercise(name: string) {
	if(!name || name === '-') {
		return;
	}
	const exercise = exerciseService.getOne(name);
	if(!exercise) {
		return console.error('Nie posiadam zadania z identyfikatorem:', name)
	}
	if(!exercise.run && exercise.path) {
		location.href = exercise.path
	} else if(exercise.run) {
		$root.innerHTML = `<h6>${exercise.title}</h6>Przykład dostępny w konsoli. (Ctrl + Shift + i / F12)<div>Sprawdź również kod: <b>${name}</b></div>`;
		console.log('Zadanie: ', exercise.title, 'START!');
		console.log('-----------------------------------');
		exercise.run()
			.then(() => {})
			.catch(console.error)
	}
}

if(location.hash) {
	const value = location.hash.substring(1);
	examplesSelectDOM.value = value;
	loadExercise(value);
}
