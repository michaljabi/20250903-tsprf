
/**
  #Zadanie:
  Po prostu odbierz wartości od promise i zauważ różnicę między nimi.
  Pokaż wartości na konsoli

  #Cel:
  Utrwalenie - pokazanie, że z dowolnych - nawet synchronicznych wartości można utworzyć Promise
*/


const myPromise = new Promise<number>( (resolve) => {
  resolve(1234);
});

const myAsyncPromise = new Promise<number>( (resolve) => {
  setTimeout(() => {
    resolve(4321);
  }, 2000);
});


export {};
