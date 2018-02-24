function Mostrar()
{

var sexo;

sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m")
{
	alert("reingrese un valor valido");
	sexo = prompt("ingrese f ó m .");
}
	
	if(sexo=='f')
	{ 
		document.getElementById('Sexo').value="femenino";
	}
	
	else
	{
		document.getElementById('Sexo').value="masculino";
	}

//document.getElementById('Sexo').value = sexo;
// ver en casa

}//FIN DE LA FUNCIÓN