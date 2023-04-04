import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const ElementIDs = {
	TodoList: '.todo-list',
	NewTodoInput: '#new-todo-input',
};

/**
 *
 * @param {String} elementId Elemento donde vamos a renderizar la aplicacion
 */
export const App = (elementId) => {
	const displayTodos = () => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(ElementIDs.TodoList, todos);
	};

	// Cuando la función App() se llama
	(() => {
		const app = document.createElement('div');
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();

	//Referencias HMTL
	const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

	//Listeners
	newDescriptionInput.addEventListener('keyup', (event) => {
		//Con esto hacemos que solo cuando pulsamos la tecla enter, que su keyCode es 13, ejecutamos estas acciones
		if (event.keyCode != 13) return;
		//Comprobamos que el campo no este vacío. Con trim() quitamos los espacios del princpio y final
		if (event.target.value.trim().length === 0) return;

		todoStore.addTodo(event.target.value);
		displayTodos();
		event.target.value = '';
	});
};
