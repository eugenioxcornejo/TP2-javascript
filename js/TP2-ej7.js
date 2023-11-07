
let numero=parseInt(prompt("ingrese un numero entre 1 y 50"));


for (numero; numero<=50; numero++){

    for(let columna=1; columna<=numero; columna++){
        document.write(`${numero}  `); 
    }
    
    document.write(`<p></p>`);
}

document.write('numero mayor a 50 por favor indique un numero entre 1 y 50');

