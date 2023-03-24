import _ from 'underscore';

// Esta función crea un nuevo deck
export const crearDeck = (deck, tiposDeCarta, tipoEspeciales) => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tipoEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};
