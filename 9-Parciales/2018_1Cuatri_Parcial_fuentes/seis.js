function mostrar()
{
var hora;

hora = document.getElementById("laHora").value;
switch(hora) {
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    alert("Es de mañana");
    break;
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    alert("Es de tarde");
    break;
    case "21":
    case "22":
    case "23":
    case "24":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    alert("Es de noche");
    break;      
    }
    if (hora>=21 && hora<=24) {
        alert("A Dormir");
    }
    else {
    if (hora >= 25) {
        alert("La hora no es valida");
        }
    }
}
