let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};
console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);
console.log("Coors", personaje.coords);
console.log("Latitud", personaje.coords.lat);
console.log("No. Trajes de Ironman", personaje.trajes.length);
console.log("Último traje", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

console.log("Última película", personaje["ultima-pelicula"]);

//Más detelle

personaje.edad = null;
console.log(personaje.edad);
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 100000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades });
console.log({ valores });
