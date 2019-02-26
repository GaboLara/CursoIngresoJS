function mostrar()
{
    var divisores=0;
    var num2;
        num2=prompt("Favor ingresar un numero");

    for(var num=1;num<=num2;num++){
        if (num%2===0) {
            divisores++;
            document.write(num + " - ");
        }
        else {
            if (num%3===0) {
                divisores++;
                document.write(num + " - ");
            }
            else {
                if (num%4===0) {
                    divisores++;
                    document.write(num + " - ");                    
                }
                else {
                    if (num%5===0) {
                        divisores++;
                        document.write(num + " - ");
                    }
                    else {
                        if (num%6===0) {
                            divisores++;
                            document.write(num + " - ");
                        }
                        else{
                            if (num%7===0) {
                                divisores++;
                                document.write(num + " - ");
                            }
                            else {
                                if (num%8===0) {
                                    divisores++;
                                    document.write(num + " - ");
                                }
                                else {
                                    if (num%9===0) {
                                        divisores++;
                                        document.write(num + " - ");
                                    }
                                    else {
                                        if (num%10===0) {
                                            divisores++;
                                            document.write(num + " - ");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
alert("Se encontraron " + divisores + " numeros Divisores.");



}//FIN DE LA FUNCIÓN