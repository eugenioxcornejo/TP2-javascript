// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = parseFloat(0);
do{
let primernumero= parseFloat(prompt("ingrese un numero"));
console.log(primernumero);



suma=(suma + primernumero);
console.log(suma);


}

while(!isNaN(suma)&& confirm(`desea agregar otro numero`));

if(isNaN(suma))
{alert('valor ingresado incorrecto')}
else{document.write('El valor ingresado no es numerico no puede realizarce la suma')}
document.write(`El Total de la suma de los numeros ingresados es ${suma}`);  
