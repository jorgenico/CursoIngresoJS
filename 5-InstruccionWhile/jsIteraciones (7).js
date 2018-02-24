
function Mostrar()

{
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si'; // respuesta de control del while.-
	
	// condicion de seguir subiendo numeros?
	while(respuesta == 'si') // quiero seguir subiendo numeros?
		{
			var numero;

			numero = prompt("Ingrese un numero","0");

			numero = parseInt(numero);
		
			acumulador = acumulador + numero;

			contador++;
				

			respuesta = prompt("¿Desea continuar la suma?:","si/no");

		}
		
	
	
	document.getElementById('suma').value = acumulador; // numeros sumados
	document.getElementById('promedio').value = acumulador/contador; // la division de los nros sumados (x la cantidad de numeros q se ingresaron)
}//FIN DE LA FUNCIÓN
