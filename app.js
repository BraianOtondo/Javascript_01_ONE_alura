let numeroSecreto=4;
let numeroUsuario=-1;
let contador=0;
let cantidadVeces="vez";
let numeroIntentos=3;
while(numeroSecreto!=numeroUsuario){
    numeroUsuario=prompt("Indicame un número del 1 al 10");
    contador++;
    if(numeroSecreto==numeroUsuario ){
        // ${}estoe es un template string
        alert(`Has acertado!!!  el número secreto es ${numeroSecreto} es igual y lo hiciste ${contador} ${cantidadVeces} `)//contatenacion
    }else if(numeroUsuario<numeroSecreto) {

        alert(`Es incorrecto!!!  el número secreto era ${numeroSecreto} es mayor que ${numeroUsuario}`);
    }else{
        alert(`Es incorrecto!!!  el número secreto era ${numeroSecreto} es menor que ${numeroUsuario}`);

    }
    cantidadVeces="veces";
    if(contador>=numeroIntentos){// llega 
        alert("Superaste el numero de intentos!!");
        break;
    }
}