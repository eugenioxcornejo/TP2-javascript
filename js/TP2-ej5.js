do{
    let dni=prompt('ingrese su DNI sin puntos ni espacios');
document.write(`D.N.I ${dni}     `);
let div=parseInt(dni%23);


console.log(div);

switch(div){
    case 0:
        document.write('corresponde la letra T');
        break;
    case 1:
        document.write('corresponde la letra R');
        break;
    case 2:
        document.write('corresponde la letra W');
        break;
    case 3:
        document.write('corresponde la letra A');
        break;
    case 4:
        document.write('corresponde la letra G');
        break;
    case 5:
        document.write('corresponde la letra M');
        break;
    case 6:
        document.write('corresponde la letra Y');
        break
    case 7:
        document.write('corresponde la letra F');
        break;
    case 8:
        document.write('corresponde la letra P');
        break
    case 9:
        document.write('corresponde la letra D');
        break;
    case 10:
        document.write('corresponde la letra X');
        break;
    case 11:
        document.write('corresponde la letra B');
        break;
    case 12:
        document.write('corresponde la letra N');
        break;
    case 13:
        document.write('corresponde la letra J');
        break;
    case 14:
        document.write('corresponde la letra Z');
        break;
    case 15:
        document.write('corresponde la letra S');
        break;
    case 16:
        document.write('corresponde la letra Q');
        break;
    case 17:
        document.write('corresponde la letra V');
        break;
    case 18:
        document.write('corresponde la letra H');
        break;
    case 19:
        document.write(`<p>corresponde la letra L</p>`);
        console.log(`letra L`)
        break;
    case 20:
        document.write('corresponde la letra C');
        break;
    case 21:
        document.write('corresponde la letra K');
        break;
    case 22:
        document.write('corresponde la letra E');
        break;

   default:
    console.log('switch no se ejecuto');
   
}} while(confirm('desea ingresar otro D.N.I?'));
