/**
 *Obtener el valor de la carta
 * @param {String} carta Es la carta que le ha tocado al jugador/computadora
 * @returns {Number} Es el valor de la carta que le ha tocado al jugador/computadora
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
