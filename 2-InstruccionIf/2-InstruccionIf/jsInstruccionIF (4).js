//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

if(edad<=12)

	{
		alert("usted es menor de edad");	
	}

if (edad>=13&&edad<=17)

	{
		alert("usted es adolescente");
	}

if (edad>=18)

	{
		alert("usted es mayor de edad");
	}

	

}//FIN DE LA FUNCIÓN