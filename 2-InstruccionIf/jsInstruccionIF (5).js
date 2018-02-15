//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

if(edad<13||edad>17)

	{

			alert("la persona no es adolescente");

	}

}//FIN DE LA FUNCIÓN