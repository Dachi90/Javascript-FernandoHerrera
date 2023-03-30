import html from './app.html?raw';
/**
 *
 * @param {String} elementId Elemento donde vamos a renderizar la aplicacion
 */
export const App = (elementId) => {
  // Cuando la funciñon App() se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
