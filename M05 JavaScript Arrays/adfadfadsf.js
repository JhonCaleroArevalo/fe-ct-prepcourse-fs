// function mesesDelAño(array) {

//     var mes1 = "Enero";
//     var mes2 = "Marzo";
//     var mes3 = "Noviembre";

//     var meses = [mes1, mes2, mes3];



//     var nuevoArreglito = meses.filter(mes => array.includes(mes));

//     if (nuevoArreglito.length === meses.length) {
//         return nuevoArreglito;
//     }
//     else {
//         return "No se encontraron los meses pedidos";
//     }
// }
function mesesDelAño(array) {
    var mes1 = "Enero";
    var mes2 = "Marzo";
    var mes3 = "Noviembre";

    var meses = [mes1, mes2, mes3];

    var nuevoArreglito = meses.filter(mes => array.includes(mes));

    if (nuevoArreglito.length === meses.length) {
        return nuevoArreglito;
    } else {
        return "No se encontraron los meses pedidos";
    }
}

console.log(mesesDelAño());