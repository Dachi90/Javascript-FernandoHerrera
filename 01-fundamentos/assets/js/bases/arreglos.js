// Esto crea una array con 10 posiciones pero todos vacíos
const arr = new Array(10);
console.log(arr);

// Esto crea una array vacio
const arrVacio = [];
console.log(arrVacio);

let videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log({ videoJuegos });
console.log(videoJuegos[0]);

let arrayCosas = [true, 123, "Fernando", 1 + 2, function () {}, () => {}, { a: 1 }, ["X", "Megaman", "Dr. Light", ["Dr. Willy", "Woodman"]]];
console.log(arrayCosas[0]);
console.log(arrayCosas[2]);
console.log(arrayCosas[7][2]);
console.log(arrayCosas[7][3][1]);
