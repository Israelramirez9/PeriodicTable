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

function printElementColumn(rowID, element) {
    const rowElement = document.getElementById(rowID);
    rowElement.innerHTML += `<td style="margin: 0 auto; border: solid black 1px;" >${element.symbol}</td>`;
}

function printEmptyColumn(rowID) {
    const rowElement = document.getElementById(rowID);
    rowElement.innerHTML += `<td style="border: 0"></td>`;
}

function printRows(tableID) {
    const table = document.querySelector(`#${tableID} tbody`);


    for (let i = 1; i <= 9; i++) {
        table.innerHTML += `<tr id="row-${i}"></tr>`;
    }

}



export { printPeriodicTable }