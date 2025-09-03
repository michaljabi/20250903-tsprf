const myCanvas = document.getElementById("main_canvas") ;

if(myCanvas) {
    myCanvas.textContent = '';
}

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

// Powiedzenie TS "zaufaj mi to na pewno HTMLAnchorElement"
const myAnchor = document.querySelector("a") as HTMLAnchorElement;

myAnchor.textContent = '';

