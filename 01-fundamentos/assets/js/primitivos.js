// Tipo de dato string
let nombre = "Peter Parker";
console.log(nombre);

nombre = "Ben Parker";
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;
console.log("La variable nombre es de tipo ", typeof nombre);

// En Js se puede asignar un valor de tipo distinto a una variable, esto es porque Js es un lenguaje debilmente tipado
nombre = 123;
console.log("La variable nombre es de tipo ", typeof nombre);

// Tipo de dato boolean
let esMarvel = true;
console.log("La variable esMarvel es de tipo ", typeof esMarvel);

//Tipo de dato number
let edad = 33;
edad = 33.0001;
console.log("La variable edad es de tipo ", typeof edad);

// Si no le asignas ningún valor per está inicializada Js lo considera undefined
let superPoder;
console.log(typeof superPoder);

//Js considera Null como un objeto
let soyNull = null;
console.log(typeof null);

// El principal uso de un symbol es identificar propiedades de manera ÚNICA
let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1);
console.log(symbol1 === symbol2);
