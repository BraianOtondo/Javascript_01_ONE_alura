let numeroSecreto=4;
let numeroUsuario=-1;
while(numeroSecreto!=numeroUsuario){
    numeroUsuario=prompt("Indicame un número del 1 al 10");
    if(numeroSecreto==numeroUsuario ){
        alert(`Has acertado!!!  el número secreto es ${numeroSecreto} es igual`)//contatenacion
    }else if(numeroUsuario<numeroSecreto) {

        alert(`Es incorrecto!!!  el número secreto era ${numeroSecreto} es mayor que ${numeroUsuario}`);
    }else{
        alert(`Es incorrecto!!!  el número secreto era ${numeroSecreto} es menor que ${numeroUsuario}`);

    }


}