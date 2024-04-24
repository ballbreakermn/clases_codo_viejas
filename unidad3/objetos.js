// OBJETOS LITERALES
// ¿Qué son los objetos? una coleccion de datos
// tenemos la posibilidad de organizar múltiples variables de la misma temática en el interior de un objeto

// En muchos lenguajes de programación, para crear un objeto se utiliza la palabra clave new. En Javascript también se puede hacer:
// const objeto = new Object();
// console.log(objeto);
// Evitar esta sintaxis en Javascript (no se suele usar)

// DIFERENCIAS arrays/objetos

// arrays => indice/valor
const persona1 = [
    "Jose",
    "Martinez",
    30
]
// objetos => clave/valor
const persona2 = {
    nombre: "juan",
    apellido: "lopez",
    edad: 30
}
// Estas variables dentro de los objetos se suelen denominar propiedades

// Accedemos a las propiedades del objeto utilizando la notacion de puntos
console.log(persona2.nombre);

// agregar o actualizar propiedades
// actualizar
persona2.nombre = "Jose";
// agregar
persona2.numeroDni = 334838493;

console.log(persona2.nombre);
console.log(persona2);

// Objetos anidados
persona2.notas = {
    primerCuatrimestre: 8,
    segundoCuatrmestre: 9,
    tercerCuatrimestre: 7
}
console.log(persona2);
console.log(persona2.notas.primerCuatrimestre);


// Metodos de la clase Object
// Object.keys() => devuelve un array con los nombres de las propiedades
// Object.values() => devuelve un array con los valores de las propiedades

// recorrer objetos
let clave = Object.keys(persona2);
let valor = Object.values(persona2);

console.log(clave);
console.log(valor);

clave.forEach((clave) => {
    console.log(`${clave}: ${persona2[clave]}`);
})

// Arrays de objetos
// Supongamos que tienes un array de objetos llamado personas, y quieres encontrar todas las personas que tengan una cierta edad

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Ana", edad: 35 },
];

// Utilizamos filter para encontrar personas con edad igual a 30
const personasDe30 = personas.filter(persona => persona.edad === 30);

console.log("Personas de 30 años:");
console.log(personasDe30);


console.log(`Cantidad de personas de 30 años: ${personasDe30.length}`);
const nombresDePersonasDe30 = personasDe30.map(persona => persona.nombre);
console.log("Nombres de personas de 30 años:");
nombresDePersonasDe30.forEach(nombre => console.log(nombre))

