
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostar: "EXCELENTE" para notas igual a 9 o 10, "APROBÓ" 
para notas mayores a 4, "Vamos, la proxima se puede" para notas menores a 4*/


function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var resultado;

	resultado=Math.floor(Math.random() * 10) + 1; //devuelve un entero random entre 1 y 10 
	
	alert(resultado);

	if(resultado>=8)
		{
			alert("EXCELENTE");
		}
		else
		{
			if(resultado>=4)
			{
				alert("APROBÓ");
			}
			else
			{
				alert("Vamos, la proxima se puede");
			}
		}

}//FIN DE LA FUNCIÓN