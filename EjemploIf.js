/*var hour=17;
var saludo="";

if(hour<12){
   saludo="Buenos días";

}
else if(hour<20){
   saludo="Buenas tardes";

}
else{

    saludo="Buenas noches";
}
*/

 var corredores= ["maria","juan", "lucia"];
var text="";
for(var i=0; i<corredores.length; i++){
   text += corredores[i]+"\n";
}
console.log(text);


/*var index=0;
var booleano= false;
while(index< corredores.length && !booleano){
   booleano= (corredores[index] == "lucia"); // solo para una condicion de parada porque devuelve un valor true o false
  index++;
}
 */

 //Funcion
 function cubo(numero){
    return numero*numero*numero;
 }

 console.log(cubo(5));
 //console.log(saludo); 
