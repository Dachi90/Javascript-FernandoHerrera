class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }
  static mensaje() {
    console.log(this.nombre); //undefined
    console.log('Hola a todos, soy un método estático');
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavortia(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
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
//console.log(ironman);

//spiderman.quiensoy();
//ironman.quiensoy();

spiderman.miFrase();
//ironman.miFrase();

spiderman.setComidaFavortia = 'El pie de cereza de la tía May';

//console.log(spiderman.getComidaFavorita);
//console.log(spiderman);

//Persona._conteo = 2;

console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);
