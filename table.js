// esta funcion devuelve la posicion de un elemento de la tabala periodica de acuerdo a su numero atomico

function getPositionOnPeriodicTabletByAtomicNumber(atomicNumber) {


    if (atomicNumber === 1) {
        return {
            row: 0,
            column: 0
        }
    }
    if (atomicNumber === 2) {
        return {
            row: 0,
            column: 17
        }
    }
    if (atomicNumber >= 3 && atomicNumber <= 4) {
        return {
            row: 1,
            column: atomicNumber - 3
        }
    }
    if (atomicNumber >= 5 && atomicNumber <= 10) {
        return {
            row: 1,
            column: atomicNumber + 7
        }
    }
    if (atomicNumber >= 11 && atomicNumber <= 12) {
        return {
            column: atomicNumber - 11,
            row: 2
        }
    }
    if (atomicNumber >= 13 && atomicNumber <= 18) {
        return {
            row: 2,
            column: atomicNumber - 1
        }

    }
    if (atomicNumber >= 19 && atomicNumber <= 36) {
        return {
            row: 3,
            column: (atomicNumber - 1) % 18
        }

    }
    if (atomicNumber >= 37 && atomicNumber <= 54) {
        return {
            row: 4,
            column: (atomicNumber - 1) % 18
        }
    }
    if (atomicNumber >= 55 && atomicNumber <= 57) {
        return {
            row: 5,
            column: (atomicNumber - 1) % 18
        }
    }
    if (atomicNumber >= 58 && atomicNumber <= 71) {
        return {
            row: 7,
            column: atomicNumber - 54
        }
    }
    if (atomicNumber >= 72 && atomicNumber <= 86) {
        return {
            row: 5,
            column: atomicNumber - 69
        }

    }
    if (atomicNumber >= 87 && atomicNumber <= 89) {
        return {
            row: 6,
            column: atomicNumber - 87
        }

    }
    if (atomicNumber >= 90 && atomicNumber <= 103) {
        return {
            row: 8,
            column: atomicNumber - 86
        }

    }
    if (atomicNumber >= 104 && atomicNumber <= 118) {
        return {
            row: 6,
            column: atomicNumber - 101
        }

    }

    return null
}






function getPeriodicTable(table) {

    const matrix = [];
    const rows = 9;
    const columns = 18;

    // este ciclo carga la matrix de null

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(null);
        }
    }




    for (let i = 0; i < table.length; i++) {

        const element = table[i];
        const atomicNumber = parseInt(element.atomicNumber);

        const position = getPositionOnPeriodicTabletByAtomicNumber(atomicNumber);

        // si la posicion es nula continua con el siguiente elemento y no toma en cuenta al null
        if (position === null) {
            continue;
        }

        matrix[position.row][position.column] = element;

    }
    console.log(matrix)
    return matrix
}

export { getPeriodicTable }



/*
       if (atomicNumber === 1) {
           matrix[0][0] = element;
       } else if (atomicNumber === 2) {
           matrix[0][17] = element;
       } else if (atomicNumber >= 3 && atomicNumber <= 4) {
           matrix[1][atomicNumber - 3] = element;
       } else if (atomicNumber >= 5 && atomicNumber <= 10) {
           matrix[1][atomicNumber + 7] = element;
       } else if (atomicNumber >= 11 && atomicNumber <= 12) {
           matrix[2][atomicNumber - 11] = element;
       } else if (atomicNumber >= 13 && atomicNumber <= 18) {
           matrix[2][atomicNumber - 1] = element;
       } else if (atomicNumber >= 19 && atomicNumber <= 57) {
           matrix[atomicNumber % 18 === 0 ? index++ : index][(atomicNumber - 1) % 18] = element;
       } else if (atomicNumber >= 58 && atomicNumber <= 71) {
           matrix[7][atomicNumber - 54] = element;
       } else if (atomicNumber >= 72 && atomicNumber <= 86) {
           matrix[index][atomicNumber - 69] = element;
       } else if (atomicNumber >= 87 && atomicNumber <= 89) {
           matrix[6][atomicNumber - 87] = element;
       } else if (atomicNumber >= 90 && atomicNumber <= 103) {
           matrix[8][atomicNumber - 86] = element;
       } else {
           matrix[6][atomicNumber - 101] = element;
       }



   
   console.log(matrix);
  */