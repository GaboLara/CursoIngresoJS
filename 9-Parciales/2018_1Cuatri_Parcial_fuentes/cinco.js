function mostrar()
{
    var planeta;
    planeta = prompt("Favor ingresar el Planeta.");
    switch(planeta){
        case "Tierra":
        alert("Acá vivimos");
        break;
        case "Mercurio":
        case "Venus":
        alert("acá hace más calor");
        break;
        case "Marte":
        case "Jupiter":
        case "Saturno":
        case "Urano":
        case "Neptuno":
        alert("Acá hace mas frio.");
    }
}
