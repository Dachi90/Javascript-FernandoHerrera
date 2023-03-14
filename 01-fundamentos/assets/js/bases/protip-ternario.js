const elMayor = (a, b) => (a > b ? a : b);

const tienesMembresia = (miembro) => (miembro ? "2 Dólares" : "10 Dólares");

console.log(elMayor(20, 15));
console.log(tienesMembresia(false));

const amigo = false;
const amigoArr = ["Peter", "Tony", "Dr. Strange", amigo ? "Thor" : "Loki"];
console.log(amigoArr);

const nota = 95; // A+, A, B+

const grado = nota >= 95 ? "A+" : nota >= 90 ? "A" : nota >= 85 ? "B+" : nota >= 80 ? "B" : nota >= 75 ? "C+" : nota >= 70 ? "C" : "F";
console.log({ nota, grado });
