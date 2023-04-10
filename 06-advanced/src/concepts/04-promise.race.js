/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
	element.innerHTML = 'Loading...';
	const rednerValue = (value) => {
		element.innerHTML = value;
	};
	//! Promise.race([]) recive un array de promesas y devuelve el resultado de la que se resuelva más rápido
	Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(rednerValue);
};

const slowPromise = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('Slow Promise');
		}, 2000);
	});

const mediumPromise = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('Medium Promise');
		}, 1500);
	});

const fastPromise = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('Fast Promise');
		}, 1000);
	});
