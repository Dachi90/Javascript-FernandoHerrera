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
  //console.log(deck);

  return deck;
};

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay más carta en la baraja";
  }

  let carta = deck.shift();
  //console.log(carta);
  return carta;
};

//pedirCarta();
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  //let puntos = 0;
  //console.log({ valor });

  // isNaN() es una funcion de js que evalua si el parámetro que le pasamos no es un número y si es asñi devuelve un true, si es un númeor devuelve un false
  /*  if (isNaN(valor)) {
    console.log("No es un número");
    puntos = valor === "A" ? 11 : 10;
  } else {
    console.log("Es un número");
    puntos = parseInt(valor);
  } 
  console.log(puntos);*/

  // Reducimos el if anterior
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor);
};

const valor = valorCarta(pedirCarta());
console.log(valor);
