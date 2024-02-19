let numeroSecreto=generarNumeroSecreto();
let intentos=0;
//function()
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}
function verificarIntento(){
    //document es para acceder a objetos del tipo html
    //value accede al valor del elemento encontrado por id
    intentos++;
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    //console(numeroSecreto);
    if(numeroUsuario===numeroSecreto){
        alert(`Acertaste el numero. Con un intento de ${intentos} ${(intentos==1)?"vez":"veces" }`);
        asignarTextoAElemento("p","GANASTEE!!");
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        limpiarCaja();
        //alert(`No es el numero secreto, era : ${numeroSecreto}`);
    }
}

// a diferencia de otros lenguajes, en js las variables no tienen tipo de dato por parametros
function asignarTextoAElemento(elemento,texto){
    let seleccion=document.querySelector(elemento);
    seleccion.innerHTML=texto;
}
function limpiarCaja(){
    //document.getElementById es igual a document.querySelector("#id")
   let valorCaja= document.querySelector("#valorUsuario"); //id de nuestro input 
    valorCaja.value= '';
    // una forma de simplificarlo es:
    //document.querySelector("#valorUsuario").value=' ';
}
asignarTextoAElemento('h1',"Juego de adivinar el número");
asignarTextoAElemento("p","Indique un número del 1 al 10");
console.log(numeroSecreto);