import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { $ } from "./dom/selector.ts";
import { liElementFactory } from "./dom/li-element.factory.ts";

// LIST OF WORDS + INPUT COMPONENT:
// (input):
const newWordInput: HTMLInputElement = $('#new-word')
newWordInput.value = 'hi'

// (list):
const allWordsUl: HTMLUListElement = $('#all-words')
allWordsUl.appendChild(liElementFactory('przykład'))
allWordsUl.appendChild(liElementFactory('Ala'))

// "A" - WORDS CARD COMPONENT:
const wordsStartWithAUl: HTMLUListElement = $('#words-start-with-a')
wordsStartWithAUl.appendChild(liElementFactory('Ala'))


// ALL WORDS COUNTER CARD COMPONENT:
const allWordsCounter: HTMLDivElement = $('#all-words-counter')
allWordsCounter.textContent = String(2);


// LONGEST WORD CARD COMPONENT:
const longestWordLength: HTMLDivElement = $('#longest-word-length')
longestWordLength.textContent = `${8} liter`
