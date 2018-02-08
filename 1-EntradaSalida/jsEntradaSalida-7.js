/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	

	var numeroUno;
	var numeroDos;
	var suma;
	

	numeroUno=document.getElementById('numeroUno').value; // ingreso dato a pantalla y reconoc del dato que yo ingreso
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno); //conversion a numero entero
	numeroDos=parseInt(numeroDos); //parseInt solo se usa en la suma

	suma=numeroUno+numeroDos;

	alert ("el resultado de la suma es: " + suma);

}

function restar()

{
	

	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	resta=numeroUno-numeroDos;

	alert ("el resultado de la resta es: " + resta);


}

function multiplicar()

{ 
	
	var numeroUno;
	var numeroDos;
	var Multiplicar;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	Multiplicar=numeroUno*numeroDos;

	alert ("el resultado de la multiplicacion es: " + Multiplicar);

}

function dividir()

{

	
	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	dividir=numeroUno/numeroDos;

	alert ("el resultado de la division es: " + dividir);

}

