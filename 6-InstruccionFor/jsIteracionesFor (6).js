function mostrar()
{
    var contarpares=0;
    var num2;
        num2=prompt("Favor ingresar un numero");

    for(var num=1;num<=num2;num++){
        if (num%2==0) {
            contarpares++;
            document.write(num + " - ");
        }
        }
alert("Se encontraron " + contarpares + " numeros pares.");
}//FIN DE LA FUNCIÓN