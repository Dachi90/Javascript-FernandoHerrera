import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
	const renderHero = (hero) => {
		element.innerHTML = hero.name;
	};

	const renderError = (error) => {
		element.innerHTML = ` <h3>${error}</h3>`;
	};

	const id1 = '5d86371f25a058e5b1c8a65ea';
	// findHero(id1)
	// 	.then((superHero) => {
	// 		renderHero(superHero);
	// 	})
	// 	.catch((error) => renderError(error));

	// Si en el then llamamos a otra función a la que le vamos a pasar exactamente los mismos parámetros podemos abreviarlo de esta manera.
	findHero(id1).then(renderHero).catch(renderError);
};

/**
 *
 * @param {String} id ID del heroe que queremos buscar
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		const hero = heroes.find((hero) => hero.id === id);
		if (hero) {
			resolve(hero);
			return;
		}
		reject(`Hero with id ${id} not found.`);
	});
};
