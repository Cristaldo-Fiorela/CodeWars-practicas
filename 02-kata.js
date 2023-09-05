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

    // si son menores a 1 o iguales no pueden ser primos.
    if(num <= 1 ) return false;

    // si es divisible por el indice 2, no es primo porque este solo se puede dividir por 1 y por si mismo
    for(let i = 2; i < num; i++) {
        if( num % i === 0) return false;
    }

    // si pasa la comprobacion anterior, es primo.
    return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));

/* 
! En la kata el codigo funcionaba pero al mandar el test lo ponia como no  optimo. El siguiente codigo es optimizado: 

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

? Algunas katas mejoradas:

function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1
}

function isPrime(num) {
    if (num < 2) return false;
    
    const limit = Math.sqrt(num);

    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}
*/