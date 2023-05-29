import { fetchTable } from "./fetch.js"
import { getPeriodicTable } from "./table.js";
import { printPeriodicTable } from "./print.js";
/*
este archivo script será el centro de vinculacion con mis demás archivos js
se importa el fetchTable de fetch.js el cual retorna un objeto
*la función importada fetchTable de "fetch.js retorna una promesa, por entende es necesario hacer uso del método then()
para acceder al objeto que retorna esta, posteriormente este objeto es enviado como parametro a la función "getPeriodicTable()"
la cual fue importada del archivo "table.js", esta función retorna una matrix cargada con todos los elementos de la tabla periodica, es decir
retorna un array que contiene arrays y a su vez estos arrays objetos, cada objeto contiene la información del elemento respectivo.
* por ultimo la función importada printPeriodicTable se encarga de imprimir la estructura HTML que contendrá la estructura de una tabla.
*/ 


fetchTable().then(obj => {

    const matrix = getPeriodicTable(obj);
    return printPeriodicTable(matrix)
});




