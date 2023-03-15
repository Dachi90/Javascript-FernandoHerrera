/**
 * 2C = Two of Clubs
 * 2C = Two of Diamonds
 * 2C = Two of Hearst
 * 2C = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

// Esta función crea una nueva baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  console.log(deck);

  return deck;
};

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay más carta en la baraja";
  }

  let carta = deck.shift();
  console.log(carta);
  console.log(deck);

  return carta;
};

//pedirCarta();
