//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).


function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;

if(edad>=18)

{
	alert("la persona es mayor de edad");
}

else
	
	if(edad>13&&edad<17)
	
	{
		alert("la persona es adolescente");
	}


	else (edad<=12)

	{	
		alert("la persona es menor de edad");
	}




}//FIN DE LA FUNCIÓN