// ¿Qué es el DOM?
// Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

// En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

// EL OBJETO DOCUMENT
// En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos.

// console.log(document);
// escribir document en la consola

// SELECCIONAR ELEMENTOS

// *metodo tradicional
// 1.getElementById()
// busca un elemento HTML con el id especificado en id por parámetro
const elementoId = document.getElementById("miTitulo");
console.log(elementoId)

// *usados actualmente
// 1.querySelector()
// devuelve el primer elemento que encuentra que encaja con el selector CSS suministrado.

const tituloPrincipal = document.querySelector(".principal")
console.log(tituloPrincipal)

// 2.querySelectorAll()
// Obtiene todos los elementos con la clase especificada


const titulosPrincipales = document.querySelectorAll(".principal");
console.log(titulosPrincipales);
titulosPrincipales.forEach((elemento,index)=>{
    console.log(`Elemento: ${index + 1} : ${elemento.innerHTML}`)
})
// MODIFICAR ELEMENTOS
// Selecciona el elemento que deseas modificar:
var parrafo = document.querySelector("p");
parrafo.innerHTML = "Nuevo contenido de párrafo";

// CREAR ELEMENTOS
// necesitamos el metodo document.createElement()

const nuevoElemento = document.createElement("p");
// modificar contenido
nuevoElemento.innerHTML = "Este es un nuevo contenido dinámico.";

// Agrega el elemento al DOM:
var contenedor = document.querySelector(".contenido"); // Selecciona el contenedor existente
//contenedor.appendChild(nuevoElemento); // Agrega el nuevo elemento como hijo del contenedor



