/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

 var sueldo;
 var sueldoConAumento;

 
 sueldo=document.getElementById('sueldo').value; 
 sueldo=parseInt(sueldo);
 
 sueldoConAumento=parseInt(sueldoConAumento);
 //habia puesto sueldo con aumento ' ' y no figura eso en html.-
 sueldoConAumento=sueldo*10/100;//*1.1; // o puedo ponerlo bien --> sueldo*10/100.-
 //resultado=parseInt(resultado);


//resultado=(sueldo*10)/100;

 // (esto no va) --> alert("el aumento de sueldo es del monto del 10%, por lo tanto cobrara:  " + resultado + ""pesos");
  document.getElementById('resultado').value=sueldoConAumento+sueldo; // va mas sueldo, asi en el resultado se suma sueldo + aumento (y me sale el total);
// resultado va por que figura en html
  //no me sale la resolucion en pantalla.-

}