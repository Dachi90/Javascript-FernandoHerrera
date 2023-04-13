/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
	const myGenerator = myFirstGeneratorFunction();

	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
	console.log(myGenerator.next());
};

function* myFirstGeneratorFunction() {
	yield 'Primer valor';
	yield 'segundo valor';
	yield 'Tercer valor';
	yield 'Cuarto valor';

	return 'Ya no hay valores';
	yield 'Ya no se puede hacer nada';
}
