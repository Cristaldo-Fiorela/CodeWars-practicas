// KATA URL: https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

/*
TODO:
- Asumir que va a ser un numero entero pero no siempre va a ser positivo
=> If que compruebe que sea positivo
=> de lo contrario que devuelva un mensaje

- Como se si un numero es primo? 
=> si se divide solo x 1 y el mismo

- Como puedo comprobar si se divide mas a alla de el mismo?
=> modulo? % 
    - esto siempre va a dar el restante de la division pero no siempre va a dividir por el numero de parametro
*/


function isPrime(num) {
    //TODO

    if(num > 0) {
        console.log("valor positivo");
    } else {
        console.error("Solo se aceptan valores positivos")
    }
}
