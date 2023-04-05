import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderPending, renderTodos } from './use-cases';

const ElementIDs = {
	ButtonClearCompleted: '.clear-completed',
	TodoList: '.todo-list',
	NewTodoInput: '#new-todo-input',
	TodoFilter: '.filtro',
	PendingCountLabel: '#pending-count',
};

/**
 *
 * @param {String} elementId Elemento donde vamos a renderizar la aplicacion
 */
export const App = (elementId) => {
	const displayTodos = () => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(ElementIDs.TodoList, todos);
		updatePendingCount();
	};

	const updatePendingCount = () => {
		renderPending(ElementIDs.PendingCountLabel);
	};

	// Cuando la función App() se llama
	(() => {
		const app = document.createElement('div');
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();

	//Referencias HMTL
	const NewDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
	const TodoListUL = document.querySelector(ElementIDs.TodoList);
	const ButtonClearCompleted = document.querySelector(ElementIDs.ButtonClearCompleted);
	const FiltersLi = document.querySelectorAll(ElementIDs.TodoFilter);

	//Listeners
	NewDescriptionInput.addEventListener('keyup', (event) => {
		//Con esto hacemos que solo cuando pulsamos la tecla enter, que su keyCode es 13, ejecutamos estas acciones
		if (event.keyCode != 13) return;
		//Comprobamos que el campo no este vacío. Con trim() quitamos los espacios del princpio y final
		if (event.target.value.trim().length === 0) return;

		todoStore.addTodo(event.target.value);
		displayTodos();
		event.target.value = '';
	});

	TodoListUL.addEventListener('click', (event) => {
		//closest('') Busca el elemento que le pasesmos más cercano hacia sus padres, en este caso el elemento más cercano hacia afuera que tenga el atributo data-id
		const element = event.target.closest('[data-id]');
		todoStore.toggleTodo(element.getAttribute('data-id'));
		displayTodos();
	});

	TodoListUL.addEventListener('click', (event) => {
		const isDestroyElement = event.target.className === 'destroy';
		//closest('') Busca el elemento que le pasesmos más cercano hacia sus padres, en este caso el elemento más cercano hacia afuera que tenga el atributo data-id
		const element = event.target.closest('[data-id]');

		if (!element || !isDestroyElement) return;

		todoStore.deleteTodo(element.getAttribute('data-id'));
		displayTodos();
	});

	ButtonClearCompleted.addEventListener('click', () => {
		todoStore.deleteCompleted();
		displayTodos();
	});

	FiltersLi.forEach((element) => {
		element.addEventListener('click', (element) => {
			FiltersLi.forEach((el) => {
				el.classList.remove('selected');
			});
			element.target.classList.add('selected');

			switch (element.target.text) {
				case 'Todos':
					todoStore.setFilter(Filters.All);
					break;
				case 'Pendientes':
					todoStore.setFilter(Filters.Pending);
					break;
				case 'Completados':
					todoStore.setFilter(Filters.Completed);
					break;
				default:
					todoStore.setFilter(Filters.All);
					break;
			}

			displayTodos();
		});
	});
};
