
/**
  #Zadanie:
  Pozamieniaj na 3 strumienie danych i zasubskrybuj, wyniki pokaż na konsoli

  #Cel:
  Utrwalenie i zrozumienie, że koncepcja "Observables" odnosi się do strumieni danych.
  Strumienie te mogą być kreowane na podstawie różnych obiektów emitujących dane.
*/

// Rozwiązanie:

  // #1 ----------
  document.addEventListener('click', (ev) => {
    console.log('Hello click !', ev);
  });

  // #2 ----------
  let no = 0;
  const inter = setInterval(() => {
    console.log(no++)
  }, 1000);

  setTimeout(() => {
    clearInterval(inter);
  }, 4000);

  // #3 ----------
  const observableWannabeArray = ['this', 'also', 'can', 'be', 'Observable'];

export {}
