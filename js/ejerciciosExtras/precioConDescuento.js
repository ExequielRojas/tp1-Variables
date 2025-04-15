//Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto 
//y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

const precioSinDescuento = parseInt(prompt("Ingrese el precio del producto:"))

const precioFinal = precioSinDescuento * 0.85

if(precioSinDescuento > 1000){
    document.writeln("El precio con descuento es: $" + precioFinal)
} else{
    document.writeln("El precio final es: $" + precioSinDescuento)
}