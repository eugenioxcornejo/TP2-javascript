let edad= parseInt (prompt(`ingrese su edad`));
if (edad>=18){
    document.write(`<h1> Puede conducir <h1>`)
} else if(edad<18){
    document.write(`No tiene permitido conducir`)
}else if (edad!=18){
    document.write(`ingrese un numero valido`)
} if (edad>=100){
    document.write(`pero con todo respeto, usted es un peligro`)
}
