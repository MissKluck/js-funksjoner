// Variabler - en måte vi kan ta vare på data i små pakker osm vi lager selv
//Operators - matematiske operasjoner, comparison operators - sammen ligne to verdier
//conditionals --> if/else, termary(påstand? dette, hvis ikke dette)
//Functions - en kode som kjører når vi har lyst/når vi trenger. VI trenger også kode som kn repeteres, kjøres så mange ganger vi trenger akkurat når vi trenger.
// En funksjon vil ikke bli kjørt med mindre du kaller på den, så om du kjørere javascript så vil den bare hoppe over med mindre du kaller på den.

// Function keyword --> version 1
// Arrow function --> version 2, nyere

//Function keyword (keywords er ord som javascript kjenner igjen, da vet js at den skal gjøre noe)

function myFunction() {
  console.log("function has run");
}

//myFunction();

//Arrow function

const myArrowFunction = () => {
  console.log("Hellofrom the arrow function");
};

//myArrowFunction();

// Return statement
let lives = 3;

function myReturnFunction() {
  const myText = "Dette er min tekst.";
  if (lives === 3) {
    return;
  }
  console.log("Hello!");
}

// Scope --> scope refererer til det at koden som er inne i en funksjon er avgrenset fra resten av koden din, så selv om du definerer en variabel inne i en funksjon, så kan du ikke consol.logge den utenfor funksjonen fordi den ikke er definert der, bare innad i funksjonen. Kan tenke på det som at funksjonen har satt opp skillevegger som gjør at man kna ikke se utenifra hva som er inne i funksjonen.
// Så har du behov for variabelen til en funksjon på utsiden av funksjonen så må du returne den på utsiden av funksjonen, da kan du bruke den.
// Samtidig så har man blanke ark innad i hver funksjon, noe som betyr at man kan bruke hvilke navn som helt inni, inkludert bruke samme navn i hver funksjon, og den vil ikke komme i konflikt hverken med koden i andre funksjoner eller i resten av koden. Dette gjelder bare innad i funksjonen. Samtidig kan du innad i funksjonen referere til variabler utenfor funksjonen.

// Når du returner en funksjon så slutter funksjonen å kjøre, så om du skriver kode etter return statementenen i en funksjon, så vil ikke noe av den teksten kjøre, derfor viktig at man har return statmenten på slutten av funksjonen.
// Vi kan bruke return både for å returnere verdier fra en funksjon og for å avbryte en funksjon

//const myVariable = myReturnFunction();

//console.log(myVariable);

// Parameters -> (), det blir også kalt arguments eller args
// En parameter en en måte for oss å lage funksjoner som kan ta imot data, som gjør at vi kan sende data til disse funksjonene
// Når man sender og mottar parametere er rekkefølgen viktig, det første som sendes blir det første som vises, så nummer 2 etc. viktig at det er consistent over hele. På denne måten kan man sende flere parametere til en funksjon.

const userName = "Killer981";
const userKills = 87;

const greeter = (name, kills) => {
  return `Velkommen ${name}, du har ${kills} kills, bra jobba!`;
};

const greeting = greeter(userName, userKills); //Kunne gjort: "Velkommen " + userName + ", ha en fin dag!"

//console.log(greeting);

const adder = (num1, num2) => {
  return num1 + num2;
};

console.log(adder(2, 3));

//Arguments er de du sender(2, 3 i eksemplet over), mens parameters er de du tar imot(num 1, num2 i eksemplet over). Dessverre bruker folk de litt om hverandre så vær obs.
