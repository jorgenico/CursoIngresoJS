function Mostrar()
{


var sexo;
sexo = prompt("ingrese f ó m .");

while (sexo !== "f" && sexo !== "m" )
		
		{
			alert("ha ingresado un dato incorrecto, intente nuevamente");
			sexo = prompt("ingrese f ó m .");
		}
			

	document.getElementById('Sexo').value = sexo;


}


// habia ingresado prompt("ingrese f ó m ."); sin sexo = prompt.-
// y se me colgaba la maquina.-
// borre un alert por debajo de while.-
// getElementById () devuelve el elemento que tiene el atributo ID con el valor especificado.-
//document.getElementById('Sexo').value = sexo; (ubicacion en pantalla de lo escrito).-