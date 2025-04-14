//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = parseInt(prompt("Ingresa un numero"));

if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    document.writeln(numero + " es divisilble por uno de estos numeros: 2, 3, 5 o 7")
} else {
    document.writeln(numero + " no es divisilble por uno de estos numeros: 2, 3, 5 o 7")
}