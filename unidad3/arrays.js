// *** ARRAYS */
// Es una estructura de datos que te permite almacenar una colección ordenada de elementos.
//pueden ser de cualquier tipo de datos

// *** Creación de Arrays

// 1-Usando corchetes [] y especificando elementos:
const frutas = ["manzana", "plátano", "naranja"];

// 2-Usando el constructor Array():
const colores = new Array("rojo", "verde", "azul");

// *** Acceso a Elementos en un Array
// Puedes acceder a elementos individuales en un array utilizando su índice, donde el primer elemento tiene un índice de 0:

console.log(frutas[0]); // Imprime "manzana"
console.log(frutas[1]); // Imprime "plátano"
console.log(frutas[2]); // Imprime "naranja"

// *** Modificación de Elementos en un Array
// Puedes modificar elementos en un array asignando nuevos valores a sus índices:
frutas[1] = "pera"; // Modifica el segundo elemento
console.log(frutas); // ["manzana", "pera", "naranja"]

// *** Propiedad length
// La propiedad length de un array te da el número de elementos en el array:
console.log(frutas.length); // Imprime 3

// *** Recorrer arrays
// 1-Bucle for clásico:
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// --metodos: son funciones incorporadas que permiten realizar diversas operaciones
// push(): Agrega uno o más elementos al final del array.
frutas.push("plátano", "mango");
console.log(frutas);

// pop(): Remueve el último elemento del array y lo retorna.
let ultimaFruta = frutas.pop();
console.log(frutas);
console.log(ultimaFruta);

// shift(): Remueve el primer elemento del array y lo retorna.
let primeraFruta = frutas.shift();
console.log(primeraFruta);
console.log(frutas);

// unshift(): Agrega uno o más elementos al principio del array.
frutas.unshift("plátano", "mango");
console.log(frutas);

// Bucle for...of:
// El bucle for...of es una forma más moderna y legible de recorrer un array.
for (const fruta of frutas) {
  console.log(fruta);
}

// Método forEach():
// El método forEach() se llama en el array y ejecuta una función proporcionada para cada elemento del array.

const numeros = [1, 2, 2, 4, 5, 5, 7, 8, 9, 9];
let sumaPares = 0;

numeros.forEach(function (numero) {
  if (numero % 2 === 0) {
    sumaPares += numero;
  }
});

console.log(`La suma de los números pares es: ${sumaPares}`);

// Método map():
// crea un nuevo array con los resultados de aplicar una función a cada elemento del array original
const duplicados = numeros.map(function (numero) {
  return numero * 2;
});
console.log(duplicados); // [2, 4, 6]

// El método filter()
// crea un nuevo array con todos los elementos que cumplan una condición proporcionada en una función.
const impares = numeros.filter(function (numero) {
  return numero % 2 !== 0;
});
console.log(impares); // [1, 3, 5]

// Metodo includes()
// se utiliza para verificar si un array contiene un elemento específico
// Devuelve true si el elemento está presente en el array
console.log(numeros.includes(3));
console.log(numeros.includes(9));

// -------------evitar-----------------
// 5-Método reduce():
// se utiliza para acumular los valores de un array en un solo valor.
const suma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0); // 0 es el valor inicial del acumulador
console.log(suma); // 15
// -----------------------------------------

// Ejercicios
// ingresar nombres por prompt y mostrarlos por consola.validar que sean nombres
let nombres = [];

while (true) {
  let nombre = prompt('Ingresa un nombre:');

  // Si el usuario presiona "Cancelar" o no ingresa nada, sale del bucle
  if (!nombre) {
    break;
  }

  // Validar si el valor ingresado no es un número (es una cadena de texto)
  if (isNaN(nombre)) {
    nombres.push(nombre);
  } else {
    alert('Por favor, ingresa un nombre válido (cadena de texto).');
  }
}

// Mostrar los nombres en la consola
console.log('Nombres ingresados:');
nombres.forEach(nombre => console.log(nombre));



// Ejercicio: "numeros repetidos"

// const numeros = [1, 2, 2, 4, 5, 5, 7, 8, 9, 9];
const elementosRepetidos = [];

for (let i = 0; i < numeros.length; i++) {
  const elementoActual = numeros[i];

  for (let j = i + 1; j < numeros.length; j++) {
    if (elementoActual === numeros[j]) {
      if (!elementosRepetidos.includes(elementoActual)) {
        elementosRepetidos.push(elementoActual);
      }
      break;
    }
  }
}

console.log(elementosRepetidos); // Mostrará [2, 5, 9]
