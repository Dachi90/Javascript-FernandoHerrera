const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es domingo, ni lunes, ni martes");
}

//Sin usar if else o Swtch, únicmanete objetos
dia = 30;
const semana = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

console.log(semana[dia] || "Día no definido");
