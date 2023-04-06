import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbackComponents = (element) => {
	const id = '5d86371fd55e2e2a30fe1ccb1';
	findHero(id, (error, hero) => {
		//element.innerHTML = hero?.name || 'No hay heroes';

		if (error) {
			element.innerHTML = error;
			return;
		}

		element.innerHTML = hero.name;
	});
};

/**
 *
 * @param {String} id
 * @param {(error: String|Null,hero: Object) => void} callback
 */
const findHero = (id, callback) => {
	const hero = heroes.find((hero) => hero.id == id);

	if (!hero) {
		callback(`Hero with id ${id} not found`);
		return;
	}
	callback(null, hero);
};
