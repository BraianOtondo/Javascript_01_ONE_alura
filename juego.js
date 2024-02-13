let numeroSecreto=generarNumeroSecreto();

//function()
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}
function verificarIntento(){
    //document es para acceder a objetos del tipo html
    //value accede al valor del elemento encontrado por id
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    //console(numeroSecreto);
    if(numeroUsuario===numeroSecreto){
        alert("Acertaste el numero");
    }else{
        alert(`No es el numero secreto, era : ${numeroSecreto}`);
    }
}

// a diferencia de otros lenguajes, en js las variables no tienen tipo de dato por parametros
function asignarTextoAElemento(elemento,texto){
    let seleccion=document.querySelector(elemento);
    seleccion.innerHTML=texto;
}

asignarTextoAElemento('h1',"Juego de adivinar el número");
asignarTextoAElemento("p","Indique un número del 1 al 10");
console.log(numeroSecreto);
//let numeroSecreto=generarNumeroSecreto();
//verificarIntento(numeroSecreto);