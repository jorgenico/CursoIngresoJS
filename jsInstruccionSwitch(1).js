function Mostrar()
{
//tomo la edad  

var mesDelAño;

mesDelAño = document.getElementById('mes').value;

 switch(mesDelAño)  	//se hace switch de la variable correspondiente 
{
	case  "Enero" :
	{
		alert("que comiences bien el año!!!.");
		break;
	}

	
	case  "Marzo" :
	{
	alert("a clases!!!.");
	break;
	}

	
	case  "Julio" :
	{
	alert("se vienen las vacaciones!!!.");
	break;
	}

	
	case  "Diciembre" :
	{
	alert("Felices fiesta!!!.");
	break;
	}
}

// 1ro se usa alert (y no text) para ver los mensajes segun el mes (primer error)
// 2do tengo que separar cada case con {} si posee informacion (2do error)
// siempre revisar bien si estan todas las lleves con su correpondiente cierre (tercer error) 

}//FIN DE LA FUNCIÓN