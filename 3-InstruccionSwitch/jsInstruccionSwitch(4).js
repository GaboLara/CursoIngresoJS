function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño) {
        case "Febrero":
        alert("Si tiene 28 días");
        break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
        alert("Si tiene 30 días.");
        break;
        default:
        alert("Si tiene 31 días.")
        break;
    }
	
}//FIN DE LA FUNCIÓN