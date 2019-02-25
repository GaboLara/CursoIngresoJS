function mostrar()
{
    var divisores=0;
    var num2;
        num2=prompt("Favor ingresar un numero");

    for(var num=1;num<=num2;num++){
        if (num%num2==0) {
            divisores+=num;
            document.write(num + " - ");
        }
        }
alert("Se encontraron " + divisores + " numeros Divisores.");



}//FIN DE LA FUNCIÓN