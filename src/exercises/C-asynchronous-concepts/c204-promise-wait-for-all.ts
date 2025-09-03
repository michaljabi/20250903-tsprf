
/**
  #1 Zadanie:
  Pobierz dane na temat pogody aby mieć do nich wszystkich dostęp w jednym miejscu.
  Celem dalszego obliczenia pogody

  #Cel:
  Poznanie / przypomnienie API pozwalające na wykonanie obliczeń dopiero jak wszystkie
  asynchroniczne dane zostaną nam dostarczone
*/

// >! Utwórz nowy interface dla weatherStation w TS

const weatherStation = {

  fetchWindSpeed: () => Promise.resolve( 13 ),
  fetchWindDirection: () => Promise.resolve( 'NW' ),
  fetchHumidity: () => Promise.resolve( 61 ),
  fetchPressure: () => Promise.resolve( 1020 ),
  fetchCloudCover: async () => 88 ,
};

(function canMyKiteFlyToday() {
  // Rozwiązanie:
  // piszemy tylko tutaj!
  weatherStation.fetchCloudCover().then((num: number) => {
    console.log(num)
  })
})();



export {};
