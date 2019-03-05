function mostrar()
{
    var nota=0;
    var sexo;
    var alumnos=1;
    var promedio=0;
    var notamenor=10;
    var contarvarones=0;
    var sexonotamenor;
    var cantvaronesmayor6=0;
        while (alumnos<=5){
        nota = prompt("Favor de ingresar la nota del Alumno.");
        if (nota>10||nota<0) {
            alert("La nota no es correcta");
            continue;
        }
        sexo = prompt("Favor de ingresar el Sexo del Alumno 'm' o 'f'.");
        if (sexo=="m"||sexo=="f") {
            if (sexo == "m") {
                contarvarones++;            
            }
            if (notamenor>nota) {
                notamenor = nota;
                sexonotamenor=sexo;
            }
            if (nota>=6 && sexo=="m") {
                cantvaronesmayor6++;
            }
            promedio=parseInt(promedio)+parseInt(nota);
            alumnos++;
        }
        else {
        alert("La letra ingresada no es correcta.");
        continue;
        }
        }
        alert("El promedio de las notas totales son " + promedio / 5);
        alert("La nota más baja " + notamenor + " y el sexo de esa persona es: " + sexonotamenor);
        alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + cantvaronesmayor6);
}
