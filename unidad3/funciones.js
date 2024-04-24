
//*** FUNCIONES */
// Las funciones nos permiten agrupar líneas de código en tareas con un nombre,
//  para que podamos hacer referencia a ese nombre y realizar todo lo que se agrupe en dicha tarea.
//  Para usar funciones hay que hacer 2 cosas:

// 1-DECLARACION
function saludar() {
  console.log("hola,soy una funcion");
}
// 2-EJECUCION
saludar();
saludar();
saludar();

// --PARAMETROS
// son variables que existiran solo dentro de la function,con el valor pasado desde la ejecucion

function saludarPersonalizado(persona) {
  console.log("!Bienvenido " + persona + "!");
}

// let nombre = prompt("cual es tu nombre?");
// saludarPersonalizado(nombre);

// --parametros multiples

function tablaMultiplicar(tabla, hasta = 10) {
  for (let i = 0; i <= hasta; i++) {
    console.log(tabla + " X " + i + " = " + (tabla * i));
  }
}

tablaMultiplicar(3, 10);
tablaMultiplicar(5, 20);
// --parametros por defecto
tablaMultiplicar(8);

// --devolucion de valores (return)
// generalmente buscamos realizar una tarea y que la funcion nos devuelva informacion
// se coloca al final de la funcion.Ésta termina la ejecucion de la funcion

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 10);
console.log(resultado);

// funciones anonimas
// funciones que solamente vamos a declarar la estructura y la ejecutamos automaticamente
// solo declaramos los pasos
// esto nos permite pasar funciones como argumentos a otras funciones

const imprimirConsola = function (mensaje) {
  console.log(mensaje);
}//funcion anonima

const imprimirAlert = mensaje => alert(mensaje); //funcion flecha

function saludar2(nombre, mostrar/*funcion*/) {
  const mensaje = `¡hola ${nombre}!`;
  mostrar(mensaje);
}

saludar2("miguel", imprimirConsola);
saludar2("otro", imprimirAlert);

// --completamos ejercicio

const capturar = () => prompt("ingresa tu nombre");
const eleccion = () => parseInt(prompt("donde saludar? 1-consola 2-alert"));
let seguir = () => prompt("desea seguir?").toLowerCase();

do {
  let nombre = capturar();
  let elegido = eleccion();

  if (!isNaN(elegido)) {
    switch (elegido) {
      case 1:
        saludar2(nombre, imprimirConsola)
        break
      case 2:
        saludar2(nombre, imprimirAlert)
        break
    }
  }
  else {
    console.log("INCORRECTO!!!")
  }
} while (seguir() === "si");












