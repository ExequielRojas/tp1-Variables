//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = parseInt(prompt("Ingrese un numero")), numero2 = parseInt(prompt("Ingrese un segundo numero"))

if (numero1 > numero2){
    document.writeln( numero1 + " es mayor que " + numero2)
}else if(numero1 < numero2){
    document.writeln( numero1 + " es menor que " + numero2)
}