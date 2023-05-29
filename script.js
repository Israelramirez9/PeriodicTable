import { fetchTable } from "./fetch.js"
import { getPeriodicTable } from "./table.js";
import { printPeriodicTable } from "./print.js";

fetchTable().then(obj => {

    const matrix = getPeriodicTable(obj);
    return printPeriodicTable(matrix)
});




