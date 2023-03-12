const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Fernando", "Herrera");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, "Fernando");

const imprimerArgumentosFlecha = (...args) => {
  console.log(args);
};

imprimerArgumentosFlecha(10, true, false, "Flecha");
