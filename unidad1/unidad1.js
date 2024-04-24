// variables
var variable1;
let variable2;
const constante = 1;

// ***** Tipos de datos **********
// explicacion de typeoff
// typeof es un operador en JavaScript que se utiliza para verificar el tipo de datos de una variable o una expresión.

// Número (Number):
let edad = 30;
let precio = 19.99;

// Cadena de texto (String):
let nombre = "Juan";
let mensaje = 'Hola, ¿cómo estás?';
//***los objetos String son una instancia de la clase String
var miCadena = "Hola mundo";
// contienen métodos predefinidos que se pueden utilizar para realizar operaciones comunes en cadenas.
// charAt(): Para obtener el carácter en una posición específica de la cadena.
// substring(): Para extraer una porción de la cadena.
// toUpperCase(): Para convertir todos los caracteres de la cadena a mayúsculas.
// toLowerCase(): Para convertir todos los caracteres de la cadena a minúsculas.
// split(): Para dividir la cadena en un arreglo de subcadenas según un delimitador.
var miCadena = "JavaScript es genial";
var enMayusculas = miCadena.toUpperCase(); // Convierte a mayúsculas
var enMinusculas = miCadena.toLowerCase(); // Convierte a minúsculas
console.log(enMayusculas); // Muestra "JAVASCRIPT ES GENIAL"
console.log(enMinusculas); // Muestra "javascript es genial"

// Booleano (Boolean):
let encendido = true;
let esMayorDeEdad = false;

// Arreglo (Array):
let colores = ["rojo", "verde", "azul"];
let numeros = [1, 2, 3, 4, 5];

// Objeto (Object):
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

// Función (Function):
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

// Undefined:
let variableNoDefinida;
console.log(typeof variableNoDefinida)




// parseo parseInt/parsefloat

let numero1 = "5";
console.log(numero1 + 6);
console.log(typeof numero1);
console.log(typeof parseInt(numero1));

var decimal = "56.7";
console.log(parseFloat(decimal))

// conversion con string
var edad1 = 25;
console.log(typeof String(edad).length);

// ***El objeto Math:
//  es un objeto incorporado que proporciona una serie de métodos y propiedades para realizar operaciones matemáticas comunes. No es necesario crear una instancia de este objeto, ya que está disponible globalmente en el entorno de ejecución de JavaScript.

const radio = 5;
const circunferencia = 2 * Math.PI * radio; // Calcula la circunferencia de un círculo
const raizCuadrada = Math.sqrt(16); // Calcula la raíz cuadrada de 16
const numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1

// ***** Interaccion con el usuario *****
// enunciado:
// mostramos un mensaje
// almacenamos su respuesta
// mostramos lo almacenado

var mensaje1 = "hola usuario! ¿como te llamas?";
var nombreUsuario = prompt(mensaje1);
alert("¡Bienvenido " + nombreUsuario + " !")


