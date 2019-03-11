function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var confirmar=true;
    var contador=0;
    var temperaturapar=0;
    var pesomax=0;
    var marcamax;
    var menoscero=0;
    var promedio=0;
    var pesomin=100;
        pesomax=parseInt(pesomax);
        pesomin=parseInt(pesomin);
        promedio=parseInt(promedio);
        while(confirmar!=false){
            marca=prompt("Favor de ingresar la marca del producto");
            peso=prompt("Favor de ingresar el preso del producto");
            peso=parseInt(peso);
                while(peso<1||peso>100){
                    alert("El peso ingresado no es correcto, vuelva a ingresar");
                    peso=prompt("Favor de ingresar el preso del producto");
                    peso=parseInt(peso);
            }
            promedio=promedio+peso;
            temperatura=prompt("Favor de ingresar la temperatura de almacenamiento");
            temperatura=parseInt(temperatura);
                while(temperatura<-30||temperatura>30){
                    alert("La temperatura ingresada no es correcta, vuelva a ingresar");
                    temperatura=prompt("Favor de ingresar la temperatura de almacenamiento");
                    temperatura=parseInt(temperatura);
                }
                if (temperatura%2==0) {
                    temperaturapar++;
                }
                if (peso>pesomax) {
                    pesomax=peso;
                    marcamax=marca;
                }
                if (peso<pesomin) {
                    pesomin=peso;
                }
                if (temperatura<0) {
                    menoscero++;
                }
                contador++;
                confirmar=confirm("Desea ingresar un nuevo producto?");
        }
                    document.write("<br/>La cantidad de temperaturas pares son: "+temperaturapar);
                    document.write("<br/>La marca del producto más pesado es: "+marcamax);
                    document.write("<br/>La cantidad de productos que se conservan a menos de 0 grados son: "+menoscero);
                    document.write("<br/>El promedio del peso de todos los productos son: "+promedio/contador);
                    document.write("<br/>El peso máximo es: "+pesomax+" y el mínimo es: "+pesomin);
}
