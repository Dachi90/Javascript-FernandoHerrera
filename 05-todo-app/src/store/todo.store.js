import { Todo } from '../todos/models/todo.models';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [new Todo('Piedra del alma'), new Todo('Piedra del infinito'), new Todo('Piedra del tiempo')],
  filter: Filters.All,
};

const initStore = () => {
  console.log('InitStore');
  console.log(state);
};

export default {
  initStore,
};
