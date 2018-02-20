/*al presionar el botón mostrar 10 repeticiones con números DESCENDENTES, desde el 10 al 1.*/

function Mostrar()

{

var contador;
contador = 10;

while(contador > 0)
	{
		document.write("<br>" + contador);
		contador--; 
	}

}
//FIN DE LA FUNCIÓN

//(contador --)que tambien seria contador = contador - 1
// me equivoque - puse document.write("<br>" - contador); - cuando va - document.write("<br>" + contador); - 
// no me saltaba la operacion por q a ....while(contado > 0) ...le faltaba la r ...
