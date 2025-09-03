/**
  #Zadanie:
  Po prostu odbierz wartości od promise i zauważ różnicę między nimi.
  Pokaż wartości na konsoli

  #Cel:
  Utrwalenie - pokazanie, że z dowolnych - nawet synchronicznych wartości można utworzyć Promise
*/

// PROVIDER:
const myPromise = new Promise<number>((resolve, reject) => {
  reject(new Error("Oh no...."));
  resolve(987);
  // resolve(1234);
});

// CONSUMER:
myPromise
  .then((v) => {
    console.log(v);
    return 8;
  })
  .catch((err) => {
    console.log(err.message);
  });

// CONSUMER 2:
myPromise
  .then((v) => {
    console.log(v);
    return 8;
  })
  .catch((err) => {
    console.log(err.message);
  });

const myAsyncPromise = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(4321);
  }, 2000);
});

export {};
