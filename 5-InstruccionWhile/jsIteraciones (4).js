function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>=0&&numero<11))
		
		{
			alert("ha ingresado un numero incorrecto, por favor ingrese nuevamente un numero");
			numero = prompt("ingrese un número entre 0 y 10.");
		}

			alert("ingreso el dato numerico correctamente");

}//FIN DE LA FUNCIÓN

