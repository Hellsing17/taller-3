"use strict"
/* 1) En una fabrica de computadoras se planea ofrecer a los clientes un descuento que 
dependerá del numero de computadoras que compre. Si las computadoras son menos de 
cinco se les dará un 10% de descuento sobre el total de la compra; si el numero de 
computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de 
descuento; y si son 10 o mas se les da un 40% de descuento. El precio de cada computadora 
es de $11,000
*/
let computadoras=0;
let precio=11000;
let descuento1=0.1;
let descuento2=0.2;
let descuento3=0.4;
let calcular=0;

computadoras=parseInt(prompt("Cuantas computadoras desea comprar"));


// Descuento si son menos de 5 computadoras
if (computadoras<5) {calcular=precio*computadoras-(computadoras*precio*descuento1)
    alert("El precio total a pagar con el descuento es " + calcular)
// Descuento si son mayor o igual a 5 pero menor que 10
} else if (computadoras>=5 && computadoras<10) {calcular=precio*computadoras-(computadoras*precio*descuento2)
    alert("El precio  total a pagar con el descuento es " + calcular)    
//Descuento si son mas de 10
} else if (computadoras>10) {calcular=precio*computadoras-(computadoras*precio*descuento3)
    alert("El total a pagar con el descuento es " + calcular)
}{
    
}{

}