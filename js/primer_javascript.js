//alert("primerjavascript pero en el .js")

var nombre="pepito perez";
var edad=15;
var peso= 74.5;
var masculino=true;
var materias;

/*alert("nombre"+nombre);
alert("peso"+peso);
alert("mateiras"+materias);*/
/*
var numero1= prompt("ingrese numero 1");
var numero2= prompt("ingrese numero 2");
var resultado = parseInt (numero1) + parseInt(numero2);
alert("El resultado de la suma es: " +resultado)

// mandar codigo a html

document.write("<p class= 'fs_1'> el resultado de la suma es:"+resultado+ "</p>");
*/

document.write("<center>");
document.write("<h1>Esto es un arreglo</h1>");
document.write("</br>");
var materias=["ingles", "matematicas", 77458,false];
document.write(materias.join("</br>"));
document.write(materias.short);
document.write("</br>");

materias[materias.length]= "fisica";

document.write("la materia en la posicion 6 es" + materias[5])
document.write("</br>");
materias.pop();
document.write("</br>");
document.write("la materia en la posicion 6 es" + materias[5])
document.write("<h1> Ciclo </h1>");


for(i=1;i<=10; i+=3)
{
    document.write(" </br> la i va en el valor "+i);
}

document.write("<h1> while </h1>");
var j=4;
while(j<10)
{
    document.write(" </br> la j va en el valor" +j);
    j++;
}

document.write("<h1> do while </h1>");
var k=4;

do{
    document.write(" </br> la k va en el valor" +k);
    k++;

    
}while(k<10);

function sumar(){
    alert("ingreso a la función");
    var numero_1_formulario= document.getElementById("numero1").value;
    var numero_2_formulario= document.getElementById("numero2").value;
    var sumatoria= parseInt(numero_1_formulario)+ parseInt(numero_2_formulario);
    alert("sumatoria "+sumatoria);
}

function suma(numero_1,numero_2){
    var sumatoria= numero_1 + numero_2;
    return sumatoria;
}

var sumatoria_global = suma(98, 54);
alert("sumatoria_global "+ sumatoria_global);