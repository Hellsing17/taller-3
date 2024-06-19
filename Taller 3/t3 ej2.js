"use strict"
/* 2) En una llantera se ha establecido una promoción de las llantas marca “Ponchadas”, dicha 
promoción consiste en lo siguiente:
Si se compran menos de cinco llantas el precio es de $300 cada una, de $250 si se 
compran de cinco a 10 y de $200 si se compran mas de 10.
Obtener la cantidad de dinero que una persona tiene que pagar por cada una de las 
llantas que compra y la que tiene que pagar por el total de la compra.
*/

let precio1=300;
let precio2=250;
let precio3=200;
let calcular=0;
let llantas=0;

llantas=parseInt(prompt("Ingrese la cantidad de llantas qu desea comprar"));

//Si se comran menos de 5
if (llantas<5) {calcular=precio1*llantas
    alert("El precio a pagar es " + calcular)

    //Si se compran mas de 5 y menos de 10
} else if (llantas>=5 && llantas<10) {calcular=precio2*llantas
    alert("El precio a pagar es " + calcular)

    //Si se compran mas de 10
} else if (llantas>10) {calcular=precio3*llantas
    alert("El precio a pagar es " + calcular)
}{
    
}
