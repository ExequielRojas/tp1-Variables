//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y 
//determinar si es par o impar. Mostrar el resultado.

const num = parseInt(prompt("Ingrese un numero entero:"))

if( num % 2 === 0 ){
    alert("El numero ingresado es par")
} else {
    alert("El numero ingresado es impar")
}