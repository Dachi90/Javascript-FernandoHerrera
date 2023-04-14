import { User } from '../models/user';
/**
 * Función para pasar el usuario recibido por el backend(host) a una instancia de nuestra clase User y así poder trabajar con el. Esto nos ayudará en el caso de que el backend cambie algo solo lo tendremos que cambiar aquí.
 * @param {Like<User>} localhostUser recibe el user del backend(host)
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
	const { avatar, balance, first_name, gender, id, isActive, last_name } = localhostUser;

	return new User({
		avatar,
		balance,
		firstName: first_name,
		gender,
		id,
		isActive,
		lastName: last_name,
	});
};
