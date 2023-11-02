// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

do{let primernumero= parseFloat(prompt("ingrese un numero"));
console.log(primernumero);
let numero2=parseFloat(prompt("ingrese un numero2"));

    do{
    let suma=(primernumero+numero2);
console.log(suma)}
    while (confirm("desea agregar otro numero?"))
    
     
} while(primernumero && numero2 !== null){
    alert("ingrese un numero")}