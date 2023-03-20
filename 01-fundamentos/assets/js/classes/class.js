class Persona {
  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    //console.log('Hola!');
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  quiensoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quiensoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);

//spiderman.quiensoy();
//ironman.quiensoy();

spiderman.miFrase();
ironman.miFrase();
