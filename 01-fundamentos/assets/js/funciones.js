function saludar(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
  return 1;
}

const retornoDeSaludar = saludar("Fernando");
console.log({ retornoDeSaludar });

saludar("Fernando");
saludar("Pepe");
saludar("Luis");

const saludar2 = function (nombre) {
  console.log("Hola " + nombre + " desde saludar2");
};

saludar2("Jose");

const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre + " desde saludar felcha");
};

saludarFlecha("Ramón");

const getRandom = () => Math.random();
console.log(getRandom());
