function Mostrar()

{
	var contador = 0;
	var acumulador = 0;

	var numero;	

	// mientras el contador sea menor a 5
	while(contador < 5)
	{
		numero = prompt("Ingrese un numero: ","0"); // ingreso de numero
		
		numero = parseInt(numero);

		while(numero<0||numero>10)  // control+alt+1 (|||) // aca estoy convalidando el numero q ingrese
		{
			numero=prompt("reingrese el numero correcto, entre",  "0 y 10");
			numero=parseInt(numero);
		}

		acumulador = acumulador + numero; // la suma de los numeros que voy subiendo
		
		contador++; // aumento de +1  del contador
	}
	
	// aplico sobre las ventanillas de pantalla los resultados   
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5; // operacion para sacar promedio (la suma de los nros ingresados / 5)

}//FIN DE LA FUNCIÓN

//contador (cuenta cosas)
// acumulador (acumula cosas osea suma cosas)