//Escribe un programa que pida un número y diga si es divisible por 2

let numero1 = parseInt(prompt("Ingrese un numero"));

const resultado = numero1 % 2

if(numero1 % 2 == 0){
    document.writeln("El " + numero1 + " es divisible por 2")
} else {
    document.writeln("El " + numero1 + " no es divisible por 2")
}