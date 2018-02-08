/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

 var sueldo;
 var resultado;

 sueldo=document.getElementById('sueldo').value; 

 sueldo=parseInt(sueldo);
 //resultado=parseInt(resultado);

resultado=(sueldo*10)/100;

 // (esto no va) --> alert("el aumento de sueldo es del monto del 10%, por lo tanto cobrara:  " + resultado + ""pesos");
  getElementById('resultado').value=resultado;

  //no me sale la resolucion en pantalla.-