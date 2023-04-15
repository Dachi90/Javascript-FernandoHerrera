import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
	currantPage: 0,
	users: [],
};

const loadNextPage = async () => {
	const users = await loadUsersByPage(state.currantPage + 1);
	if (users.length === 0) return;
	state.currantPage += 1;
	state.users = users;
};

const loadPreviousPage = async () => {
	throw new Error('No implementado');
};

const onUserChange = () => {
	throw new Error('No implementado');
};

const reloadPage = async () => {
	throw new Error('No implementado');
};

export default {
	loadNextPage,
	loadPreviousPage,
	onUserChange,
	reloadPage,

	/**
	 *
	 * @returns {User[]}
	 */
	getUsers: () => [...state.users],

	/**
	 *
	 * @returns {Number}
	 */
	getCurrentPage: () => state.currantPage,
};
