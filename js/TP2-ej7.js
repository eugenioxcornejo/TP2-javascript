
let numero=parseInt(prompt("ingrese un numero entre 1 y 50"));
if(numero>50){
    document.write('numero mayor a 50 por favor indique un numero entre 1 y 50');
    }

    let numero2=50

for (numero2; numero2>=numero; numero2--){
    
    for(let columna=50; columna>=numero2; columna--){
        document.write(`${numero2}  `); 
    }
    
    document.write(`<p></p>`);
}



