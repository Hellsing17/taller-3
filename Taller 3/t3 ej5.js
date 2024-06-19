"use strict"
/*5) Una frutería ofrece las manzanas con descuento según la siguiente tabla:
NUM. DE KILOS COMPRADOS % DESCUENTO
 0 - 2                      0%
 2.01 - 5                   10%
 5.01 - 10                  15%
10.01 en adelante          20%
Determinar cuanto pagara una persona que compre manzanas en esa frutería.
*/

let kilos=0;
let descuento1=0.1;
let descuento2=0.15;
let descuento3=0.2;
let calcular=0; 
let preciokilo=0;

kilos=parseInt(prompt("ingrese cuantos kilos de manzana va comprar"));
precio=parseInt(prompt("cuantos kilos desea comprar"));

if (kilos>2 && kilos<5) {calcular=kilos*precio-(kilos*precio*descuento1)
    alert("su descuento si compra los kilos de manzana es ")
} else {
    
}