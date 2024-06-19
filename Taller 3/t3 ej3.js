"use strict"
/*3) En un juego de preguntas a las que se responde “Si” o “No” gana quien responda 
correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta 
la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de México fue en el año 1810?
3. The Doors fue un grupo de rock Americano?
*/

let p1="";
let p2="";
let p3="";

alert(" ingrese la respuesta entre SI o NO")

//primera question
p1=prompt(" Colon descubrió América?").toUpperCase()
if (p1=="SI") {
    alert("estas piola pa, ahora la otra")
}
// segunda question
p2=prompt("La independencia de México fue en el año 1810?").toUpperCase()
if (p2=="SI") {
    alert("estas piola pa, ahora la otra")
}
// tercera question
p3=prompt("The Doors fue un grupo de rock Americano?").toUpperCase()
if (p3=="SI") {
    alert("bien pa si sabes de cultura")
}
// qustion 3 mal
 else if (p3!=="SI") {
    alert("jajajaja no le sabes pa")
} 
// question 2 mal
 else if (p2!=="SI") {
    alert("nonono pa la casa")
 } 
//  question 3 mal
 else if (p1!=="SI") {
    alert("nuuu estudie mejor")
 } 
