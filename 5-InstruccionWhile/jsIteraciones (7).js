

function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	while(respuesta == 'si')
		{
			var numero;
			numero = prompt("ingrese numero", "0");
			numero=parseInt(numero);
			acumulador=acumulador+numero;
			respuesta = prompt("desea continuar con la operacion de la suma? : ", "escriba si o no");
			contador++;

		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

// escribi solo = 'si'.-  (cuando era == 'si').-
// no puse la variable de la respuesta en while.-
// cumulador=acumulador+numero; (error, le falto la a a acumulador );
// me falto el PROMPT en respuesta (por lo cual ingresaba el Nro y no se me hacia la preguta).-


