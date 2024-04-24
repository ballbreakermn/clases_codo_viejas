// ***** Operadores *****

// Operadores de Asignación:
let x = 10; // Asignación simple
x += 5;    // Asignación con suma (x ahora es 15)
x -= 3;    // Asignación con resta (x ahora es 12)
x *= 2;    // Asignación con multiplicación (x ahora es 24)
x /= 4;    // Asignación con división (x ahora es 6)


// Operadores Aritméticos:
let a = 10;
let b = 5;
let suma = a + b;     // Suma (suma es 15)
let resta = a - b;    // Resta (resta es 5)
let multiplicacion = a * b; // Multiplicación (multiplicación es 50)
let division = a / b; // División (division es 2)
let modulo = a % b;   // Módulo (modulo es 0)


// Operadores de Comparación:
let edad = 25;
let esAdulto = edad >= 18; // Mayor o igual (esAdulto es true)
let esMenor = edad < 18;   // Menor que (esMenor es false)
let esIgual = edad === 25; // Igual (esIgual es true)
let noEsIgual = edad !== 30; // No igual (noEsIgual es true)
console.log(esAdulto)

//Operadores logicos:
let esEstudiante = true;
let tieneTrabajo = false;

let esJoven = esEstudiante && tieneTrabajo; // AND lógico (esJoven es true)
let consultaAdulto = esEstudiante || tieneTrabajo; // OR lógico (consultaAdulto es true)
let noEsAdulto = !esAdulto;   // NOT lógico (noEsAdulto es false)

// Operador de Concatenación de Cadenas:
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido; // Concatenación de cadenas
console.log(nombreCompleto);

// Operadores de Incremento y Decremento:
let contador = 5;
contador++; // Incremento (contador es 6)
console.log(contador);
contador--; // Decremento (contador es 5 nuevamente)
console.log(contador);

// Operador ternario:
let esMayorDeEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(esMayorDeEdad);

// ***** CONDICIONALES *****
// los condicionales son estructuras de control que permiten que nuestro programa tome decisiones

// **condicional if
// El condicional if se utiliza para ejecutar un bloque de código si una condición especificada es verdadera
if (condicion) {
    // Código a ejecutar si la condición es verdadera
} else if (otraCondicion) {
    // Código a ejecutar si la otra condición es verdadera
} else {
    // Código a ejecutar si ninguna de las condiciones es verdadera
}

// ejemplo:
// Pedir al usuario que ingrese un número
// Convertir el valor ingresado a un número
// Verificar si el número es mayor que 10
const numeroIngresado = prompt("Por favor, ingrese un número:");
const numero2 = parseFloat(numeroIngresado);
if (numero2 > 10) {
    alert("El número ingresado es mayor que 10.");
} else if (numero == 10) {
    alert("el numero es 10!")
} else {
    alert("El número ingresado no es mayor que 10.");
}

// switch: El condicional switch se utiliza cuando se quiere realizar una comparación de valor múltiple
switch (expresion) {
    case valor1:
        // Código a ejecutar si la expresión coincide con valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión coincide con valor2
        break;
    default:
    // Código a ejecutar si la expresión no coincide con ningún caso
}

//   ejemplo:dias de la semana
// Pedir al usuario que ingrese un número del 1 al 7
const numeroDia = parseInt(prompt("Por favor, ingrese un número del 1 al 7:"));

// Iniciar el condicional switch
switch (numeroDia) {
    case 1:
        alert("Hoy es Lunes.");
        break;
    case 2:
        alert("Hoy es Martes.");
        break;
    case 3:
        alert("Hoy es Miércoles.");
        break;
    case 4:
        alert("Hoy es Jueves.");
        break;
    case 5:
        alert("Hoy es Viernes.");
        break;
    case 6:
        alert("Hoy es Sábado.");
        break;
    case 7:
        alert("Hoy es Domingo.");
        break;
    default:
        alert("Número no válido. Por favor, ingrese un número del 1 al 7.");
}

// ***** Bucles *****
// estructura de control que permite repetir un bloque de código mientras una condición especificada sea verdadera

// **while 
while (condicion) {
    // Código a ejecutar mientras la condición sea verdadera
}

let contador2 = 1;
while (contador <= 5) {
    console.log(contador2);
    contador++;
}

// **do-while: es igual al anterior solo que este se ejecuta por lo menos una vez
do {
    // Código a ejecutar al menos una vez
} while (condicion);

let numero;
do {
    numero = parseInt(prompt("Por favor, ingrese un número mayor o igual que 5:"));
} while (numero <= 5);

alert("¡Bien hecho! " + numero + " es mayor que 5.");

// **for:permite ejecutar un bloque de código varias veces, generalmente para realizar tareas repetitivas

for (inicialización; condición; incremento / decremento) {
    // Código a ejecutar en cada iteración
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// **break y continue

// break: se usa para salir inmediatamente de un bucle (ya sea for, while o do-while) antes de que se complete su ciclo normal. Cuando se encuentra un break, el programa sale del bucle y continúa con la ejecución del código fuera del bucle.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Salir del bucle cuando i sea igual a 5
    }
    console.log(i);
}

// continue: se utiliza para saltar una iteración específica de un bucle y pasar a la siguiente iteración sin ejecutar el código que sigue después

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      continue; // Salta las iteraciones pares
    }
    console.log(i);
  }
  

// ***** Bucles anidados *****
// tabla de multiplicar de cualquier numero

// Pedir al usuario que ingrese un número
const ingreso = prompt("Ingrese un número para ver su tabla de multiplicación:");

// Convertir el valor ingresado a un número
const numero3 = parseInt(ingreso);

// Verificar si el valor ingresado es un número válido
console.log(`Tabla de multiplicar del ${numero3}:`);

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}


// *** Funcion isNaN()
// La función isNaN() en JavaScript se utiliza
// para determinar si un valor pasado como argumento NO es un número
// Si el argumento pasado a isNaN() es NaN (que significa "Not-a-Number"), la función devuelve true

var resultado = "hola"; // Esto da como resultado NaN.
isNaN(resultado); // Devuelve true, ya que resultado es NaN.


// imprimir la tabla de multiplicación del número ingresado 

// Solicitar al usuario un número para generar su tabla de multiplicación
const numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicación:"));

// Validar que el número ingresado sea válido
if (!isNaN(numero)) {
  console.log(`Tabla de multiplicación del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}








