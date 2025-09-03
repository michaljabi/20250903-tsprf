
/**
  #Zadanie:
  1. Zamień konstrukcję callback na promise.
  2. Zauważ jak obsługuje błędy callback-api, zaproponuj obsługę błędów w Promise

  #Cel:
  Przypomnienie sobie całości konstrukcji promise w zadaniu
*/
type LawyerCallback = (error: Error | null, lawyerAnswer: string) => void;

function incomingCallFromYourLawyer(answerTheCall: LawyerCallback): void {

  const IDLE_CONNECTION = 2000; // 2 sekundy na połączenie
  const lawyerMessage = `Hello Client, 
  that's unfortunate, but I can not help you. 
  
  That advice will cost you - $100 
  `;

  // Callback:
  setTimeout(() => answerTheCall(null, lawyerMessage), IDLE_CONNECTION)
}

// Rozwiązanie:
incomingCallFromYourLawyer((error: Error | null, lawyerAnswer: string) => {
    if(error) {
        console.log('Your phone call failed:');
        console.error(error);
    } else {
        console.log('Your lawyer said:');
        console.log(lawyerAnswer);
    }
});



export {};
