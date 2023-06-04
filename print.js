/*
1)esta funcion es la función madre de este archivo, recibe por parametro la matrix cargada de objetos
2)llama a la funcion  printRows("periodicTable") y pasa por parametro el ID de la table, se imprimen las filas en HTML
3) se usan dos ciclos for anidados para recorrer toda la matrix y empezar a imprimir los elementos en html
si el elemento de la matrix es null llama a la funcion printEmptyColumn(`row-${row + 1}`), pasando por parametro el ID "row-${row + 1}"";
4) si el elemento es no null llama a la funcion  printElementColumn(`row-${row + 1}`,element), pasando por parametros el ID y el objeto"row-${row + 1}`,element"
 */

function printPeriodicTable(matrix) {
    printRows("periodicTable");
    for (let row = 0; row <= 8; row++) {
        for (let column = 0; column <= 17; column++) {
            const element = matrix[row][column];
            if (element === null) {
                printEmptyColumn(`row-${row + 1}`);
            }else{
                printElementColumn(`row-${row + 1}`,element)
            }

        }
    }
}
/*
esta función recibe por parámetro el ID de la fila y el objeto element
y se encarga de imprimir en HTML el código <td></td> de cada elemento no null de la tabla periodica
*/
function printElementColumn(rowID, element) {
    const rowElement = document.getElementById(rowID);    
    rowElement.innerHTML += `<td title="${element.name}" class="${element.groupBlock}">${element.symbol}</td>`;   
}
/*
esta función recibe por parametro el id de cada fila o etiqueta <tr></tr> y se encargará de imprimir los <td>  vacios que contendrán los elementos
nulos de la tabla periodica, esto de acuerdo al formato diseñado de la tbla periodica */
function printEmptyColumn(rowID) {
    const rowElement = document.getElementById(rowID);
    rowElement.innerHTML += `<td style="border: 0" class="null"></td>`;
}
/*
esta función se encarga de imprimir las filas o etiquetas <tr> de la tabla en HTML recibe por parametro el string ID de la tabla
la función querySelector se usa para selecionar una etiqueta especifica como en este caso es tbody el simbolo "#", indica que querySelector 
seleccionará la siguiente etiqueta que aparesca despues de la etiqueta que tiene por identificado el tableID, es decir tendrá acceso a la estructura
interna de tbody

posteriormente se uso un loop for para cargar el codigo html de cada fila "<tr></tr>"con su respectivo id "row-${i}"
 */
function printRows(tableID) {
    const table = document.querySelector(`#${tableID} tbody`);


    for (let i = 1; i <= 9; i++) {
        table.innerHTML += `<tr id="row-${i}"></tr>`;
    }

}



export { printPeriodicTable }