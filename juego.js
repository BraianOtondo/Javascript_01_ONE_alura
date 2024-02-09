//function()
function intentoUsuario(){
    alert("Haz hecho click.");
}
// a diferencia de otros lenguajes, en js las variables no tienen tipo de dato
function asignarTextoAElemento(elemento,texto){
    let seleccion=document.querySelector(elemento);
    seleccion.innerHTML=texto;
}
asignarTextoAElemento('h1',"Juego de adivinar el número");
asignarTextoAElemento("p","Indique un número del 1 al 100");