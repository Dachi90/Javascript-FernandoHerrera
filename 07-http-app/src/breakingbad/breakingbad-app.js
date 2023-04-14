/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = (element) => {
	document.querySelector('#app-title').innerHTML = 'Rick and Mory App';
	element.innerHTML = 'Loading...';
	//const data = fetchCharacter();
	const characterImage = document.createElement('img');
	const characterName = document.createElement('h2');
	const nextCharacterButton = document.createElement('button');
	nextCharacterButton.innerHTML = 'Next character';
	nextCharacterButton.classList.add('button');
	element.replaceChildren(nextCharacterButton);

	/**
	 *
	 * @param {Object} data Object with character information
	 */
	const renderCharacter = (data) => {
		characterImage.setAttribute('src', `${data.image}`);
		characterName.innerHTML = data.name;
		element.replaceChildren(characterImage, characterName, nextCharacterButton);
	};

	nextCharacterButton.addEventListener('click', async () => {
		element.innerHTML = 'Loading...';
		const character = await fetchCharacter();
		renderCharacter(character);
	});
};
/**
 *
 * @returns {Object} Object with character information
 */
const fetchCharacter = async () => {
	let randomNum = Math.floor(Math.random() * 826 + 1);
	//console.log(randomNum);
	const url = 'https://rickandmortyapi.com/api/character/';
	const response = await fetch(`${url}${randomNum}`);
	//console.log(response);
	const data = await response.json();
	console.log(data);
	return data;
};
