
//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.

function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta == 'si')
		
		{
			var numero;
			numero=prompt("ingrese numero" , "0");
			numero=parseInt(numero);


			while(numero>0)
				{
					positivo = positivo + numero;
					break;
				}

				while(numero<0)
					{
						negativo = negativo * numero;
						break;
					}

					respuesta = prompt("desea continuar con la operacion? : " , "si - no");

					contador++;


		}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

//ingreso el primer numero (con la operacion general de siempre).-
// luego veo la operacion que corresponde segun el Nro que se ingresa.-
// averiguar lo del ultimo contador ++;
//me falto el Prompt en respuesta (por eso no aparecia pregunta).- 

