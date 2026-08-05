const prompt = require('prompt-sync')();

function numeroFactorial(){
    let entrada=prompt("Ingresa un numero positivo:  ")
    let numero = Number(entrada)

    // usamos un while para valorar excepciones

    while (isNaN(numero) || !Number.isInteger(numero) || numero < 0 || entrada === null || entrada.trim() === "") {
    console.log("Error: Por favor ingresa un número entero válido.");;
    entrada = prompt("Ingresa un número entero positivo:");
    numero = Number(entrada);
  }

  // en caso de recibir un 0

  let factorial = 1;

  // recibimos el numero y multiplicamos por todos aquellos que sean menores a dicho numero 

  for (let i =1; i<=numero; i++){
    factorial*=i;
  }

  console.log(`El factorial de ${numero} (${numero}!) es: ${factorial}`);
}


numeroFactorial();