
/**
 Pola (prawdziwie) prywatne w klasach JavaScript
 @see: https://github.com/tc39/proposal-class-fields#private-fields

 #Cel:
 Zauważenie, że JavaScript się rozwija - wraz z nim - TypeScript.
 @see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#ecmascript-private-fields

 Podobnie w TypeScript jest np. z @dekoratorami - jest to bardziej ekstremalny przykład.
 Ponieważ TS zdecydował się na ich użycie zgodnie z własną a częściowo z proponowaną specyfikacją,
 która aktualnie jest dopiero w fazie 3:
 @see: https://github.com/tc39/proposal-decorators


 */
class Narnia {
    #theLion = 'Aslan'
    #theWitch = 'Jadis'

    throughTheWardrobe(nickName: string) {
        this.#theWitch = nickName;
    }

    askMaugrim() {
        return `The witch name is ${this.#theWitch}!`;
    }
}

const mySecretPlace = new Narnia();

// sorry, hard privacy :)
console.log(mySecretPlace)

mySecretPlace.askMaugrim() //?
// mySecretPlace.#theWitch //?
// mySecretPlace.theWitch //?

mySecretPlace.throughTheWardrobe('White Witch')
mySecretPlace.askMaugrim()


export {};
