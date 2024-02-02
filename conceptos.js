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

