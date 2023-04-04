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
};

//Referencias HMTL
const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

//Listeners
newDescriptionInput.addEventListener('keyup', (event) => {
	console.log(event);
});
