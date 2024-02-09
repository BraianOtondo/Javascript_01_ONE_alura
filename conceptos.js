/* 
alert();
se utiliza para proporcionar retroalimentación inmediata o
informar sobre ciertos eventos en una página web.
Las alertas detienen el seguimiento web hasta que se de aceptar o cancelar.
es una función sincronica, quiere decir que primero se ejecuta esta y luego va lo demás
*/
alert("Hola Mundo");
/*
prompt();
Se utiliza para obtener una entrada del usuario,
 y funciona de manera similar a un campo de entrada (<input>)
 en un formulario HTML. Hay algunas diferencias clave.
 *Crea un cuadro de diálogo modal que detiene la ejecución del script hasta
 que el usuario interactúa con él, ingresando datos y haciendo clic en "Aceptar" o "Cancelar".
 *Utiliza en un contexto más interactivo, donde el usuario puede ingresar datos en
  la página web sin interrumpir la ejecución del código de manera síncrona. 
*/
prompt("Indique un número por favor:");
//console.log();
/**
 * es una función en JavaScript que se utiliza para imprimir mensajes en la consola del navegador o en entornos que admiten la API de consola. Es una herramienta de depuración
 * útil para mostrar información mientras desarrollas y depuras tu código.
 * Con F12 podes verlo
 */
//VARIABLES
/*
let
 Se pueden reasignar
 Guarda variables que pueden ser utilizadas en funciones o afuera.
*/
let mensaje = "Hola";
console.log(mensaje); // Hola
/*
const
No se puede reasignar, solo si es array o objeto puede variar.
Guarda variables que pueden ser utilizadas en funciones o afuera.
*/ 
const mensaje2="Todo bien?";
console.log(mensaje2);

//OPERADORES TERNARIOS
/**
 * Su sintaxis es la siguiente:
 * (condicion) ? expresionSiTrue : expresionSiFalse;
 * : significa sino
 * Se suele guardar la expresion en una variable creada
 */
let numero=0;
let resultado = (numero > 0) ? 'Positivo' : (numero < 0) ? 'Negativo' : 'Cero';
alert(resultado);

//NÚMEROS ALEATORIOS
/**Math.random()
 *  genera un número decimal pseudoaleatorio en el rango [0, 1).
 *  Es decir, el número puede ser igual o mayor que 0, pero siempre menor que 1.
 */
let numeroRandom=Math.random();
alert(`Numero aleatorio: ${numeroRandom}`);
/*
Si queremos ponerle un rango mayor tenemos que cambiar eso matematicamente
Math.floor()
Se utiliza para redondear hacia abajo un número decimal al entero más cercano igual o menor que el número proporcionado.
 En otras palabras, elimina la parte decimal de un número, dejando solo la parte entera.
*/
//TYPEOF()
/*
Podemos saber el tipo de dato poniendo la variable en Typeof(variable);
*/ 
//DOM
/**
 *  DOM representa la estructura jerárquica de un documento web como un conjunto de objetos,
 *  permitiendo a los programadores acceder, manipular y modificar dinámicamente el contenido,
 *  la estructura y el estilo de una página web mediante lenguajes de programación como JavaScript.
 * 
 */
// document.querySelector
/**
 * document.querySelector es un método en JavaScript
 *  que permite seleccionar y
 *  devolver el primer elemento que coincide con un selector CSS especificado.
 *  Este método es parte del DOM (Modelo de Objetos del Documento)
 *  y facilita la manipulación de elementos HTML en una página web.
 */