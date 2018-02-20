//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
		
		{
			numero = prompt ("ingrese un numero");
			numero =  parseInt(numero);
			acumulador = acumulador + numero;
			contador ++;
		}	






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

// la variable Nro no estaba.-
// contador --> se incrementa en una unidad.-
//acumulador --> almacena cantidades de valores (aqui las sumas que se van realizando).-
// agregue contador ++ (va sumando automaticamente de a uno las veces de las operaciones).-

//document.getElementById('suma').value=acumulador;
// sale en la parte de pantalla que dice "la suma acumulada", es lo que se acumulo de suma de nros aca.- 

/*document.getElementById('promedio').value=acumulador/5;
esto es el espacio donde sale el dato en pantalla(en promedio) y donde ase va a guardar la informacion  
delacumulador.-*/

// 