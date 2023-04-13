/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
	const genId = IdGenerator();
	// console.log(genId.next());

	const button = document.createElement('button');
	button.innerText = 'Click me';
	element.append(button);

	const renderButton = () => {
		const { value } = genId.next();
		button.innerText = `Click me ${value}`;
	};

	button.addEventListener('click', () => renderButton());
};

function* IdGenerator() {
	let currentId = 0;
	while (true) {
		yield ++currentId;
	}
}

function* myFirstGeneratorFunction() {
	yield 'Primer valor';
	yield 'segundo valor';
	yield 'Tercer valor';
	yield 'Cuarto valor';

	return 'Ya no hay valores';
	yield 'Ya no se puede hacer nada';
}
