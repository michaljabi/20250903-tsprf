// Działanie extension JS REPL
// wjaśnienia: TS Server, wnioskowanie typów, Type narrowing

// typy proste vs typy obiektowe
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive


// typy proste - przekazwyane przez wartości
// typy złożone (podobnie jak Java / C#) - przekazywane przez referencje

// Literały: Obiektowy {}, Tablicowy [], RegExpowy /\/
// to tak naprawdę lukier składniowy na: new Object(), new Array(), new RegExp() !!!

// Uwaga na BUG w JS:
// typeof null -> zwróci 'object'
// (nie trzeba sie tym potencjalnie przejmować w TS, jeśli używasz poprawnie typów - to TS Ci o tym powie):
// https://www.typescriptlang.org/play/?#code/PTAEAEFMCdoe2gZwFygEwFYDMBGUOAOABgBYB2AKADMBXAOwGMAXASzjtAAdoW6mBBADaCAFIiZJU4nnQDmoAD6hpvWQG0AuotB0awgJSgA3hVCgWVUCKYBPTpDiXpiUAF53oAERwARgCtIZk9DEzMzKgQrBnZxZVBHZQlEENMws2i6RDhBSAA6QThZMX0AblSzAF9UitBIQURIc0trOwcnJLcPTxU5YONy0AysnPzCsSTS6tr6xtCwkFAAEzgdOCYAC1VqigqgA
// DOC: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards

console.log("!" + 2 + 90);

let x = 1n;

let z = 1;
const y = 20;

try {
  y = 10;
} catch (e: unknown) {

  // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
  console.log(e instanceof Error);
  console.log(e instanceof TypeError);

  if (e instanceof TypeError) {
    console.log(e.constructor.name);
    console.log(e.message);
  } else if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.warn("unknow type of error", e);
  }
}

// HTMLFormControlsCollection;

console.log("!");