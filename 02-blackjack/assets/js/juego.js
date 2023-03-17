/**
 * 2C = Two of Clubs
 * 2C = Two of Diamonds
 * 2C = Two of Hearst
 * 2C = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del HTML
const btnNuevo = document.querySelector("#btnNuevo");
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const marcadores = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

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
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor);
};

//Turno de la computadora
const turnoComputaora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    //console.log(carta);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    //console.log(puntosComputadora);
    marcadores[1].innerText = puntosComputadora;

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("La computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Ganaste");
    } else {
      alert("Computadora gana");
    }
  }, 100);
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  //console.log(carta);

  puntosJugador = puntosJugador + valorCarta(carta);
  //console.log(puntosJugador);
  marcadores[0].innerText = puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputaora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn("21 Genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputaora(puntosJugador);
  }
});

btnDetener.addEventListener("click", () => {
  btnDetener.disabled = true;
  btnPedir.disabled = true;
  turnoComputaora(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
  deck = [];
  deck = crearDeck();
  puntosJugador = 0;
  puntosComputadora = 0;
  marcadores[0].innerText = 0;
  marcadores[1].innerText = 0;
  divCartasJugador.innerHTML = "";
  divCartasComputadora.innerHTML = "";
  btnDetener.disabled = false;
  btnPedir.disabled = false;
});
