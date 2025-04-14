//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if(numero1 > numero2 && numero1 > numero3){
    document.writeln(numero1 + " es mayor que " + numero2 + " y " + numero3)
}else if(numero2 > numero1 && numero2 > numero3){
    document.writeln(numero2 + " es mayor que " + numero1 + " y " + numero3)
}else if(numero3 > numero1 && numero3 > numero2){
    document.writeln(numero3 + " es mayor que " + numero1 + " y " + numero2)
} else {
    document.writeln("Hay dos o más números iguales que son los mayores");
}