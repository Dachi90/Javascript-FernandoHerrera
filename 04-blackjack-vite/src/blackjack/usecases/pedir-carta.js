/**
 * Seleccionar una carta del deck
 * @param {Array<String>} deck es el mazo de cartas como un arreglo de string
 * @returns {String} retorna la carta seleccionada como string
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
};
