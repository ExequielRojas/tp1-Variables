//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const numero1 = parseInt(prompt("Ingrese un numero")), numero2 = parseInt(prompt("Ingrese un segundo numero"));
const resultado = numero1 + numero2;

document.writeln("<br> La suma de los dos numeros ingresados es " + resultado);