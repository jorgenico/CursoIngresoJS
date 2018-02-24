function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero < 0 || numero > 9)
	{
		alert("Vuelva a ingresar un numero valido, Y por favor no se vuelva a equivocar, desde ya MUCHAS GRACIAS ¡¡¡ ");
			
		numero = prompt("ingrese un número entre 0 y 10.");

	}
	

			document.getElementById('Numero').value = numero;

}//FIN DE LA FUNCIÓN