let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("juegos tiene ", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

// Añade un elemnto al final de un array y devuelve la nueva longitud
let nuevaLongitud = juegos.push(`F-Zero`);
console.log(nuevaLongitud, juegos);

// Añade un elemento al principio de un array y devuelve la nueva longitud
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log(nuevaLongitud);
console.log(juegos);

// Elimina el último elemento de un array y lo devuelve
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

// Elimina a partir de la cantidad que se le pase en el primer párametro y elimina tantos elementos como se le indique en el segundo parámetro
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados, juegos);

// indexOf busca el elemento que le pasamos y devuelve el índice que tiene ese elemento en el array, si devuelve -1 es que no lo encuentra en el array
let metroidIndex = juegos.indexOf("Metroid");
console.log(metroidIndex);
