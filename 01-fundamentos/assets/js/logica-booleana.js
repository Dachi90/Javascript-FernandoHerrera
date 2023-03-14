const regresaTrue = () => {
  console.log("funcion regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("funcion regresa false");
  return false;
};
console.warn("Not o la negación");
console.log(true); //false
console.log(!true); //true
console.log(!false); //false

console.log(regresaFalse()); //false
console.log(!regresaFalse()); //true

console.warn("And"); // true si todos loss valores son true
console.log(true && true); //Los dos valores son true así que devuelve true
console.log(true && false); // Uno de los valores no es true así que devuelve false
console.log(true && !false); //Los dos valores son true así que devuelve true

console.log("====&&====");
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());
console.log(regresaTrue() && regresaTrue());
console.log(!regresaFalse() && regresaTrue());

console.warn("OR"); //Solo uno de los valores ha de ser true
console.log(true || false); //true
console.log(false || false); //true
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

console.warn("Asignaciones");
