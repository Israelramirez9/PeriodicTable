const API_ENDPOINT = "https://neelpatel05.pythonanywhere.com/";
import { elements } from "./data.js";
/*
el fetch actua como promesa por parametro tiene la url de una pagina u API .json
fetch("URL").then(response=>response.json()).then(obj=>console.log(obj))

fetch es un método que al pasar por parametro el string de la url de la pagina realiza una peticion, posteriormente al hacer uso de then este permite acceder al contenido sin embargo se debe usar .json() para convertir el string en un objeto y por ultimo, el ultimo then permite obtener todo el objeto;
otra forma:

fetch("URL").then(response=>response.text()).then(srt=>console.log(str))

misma explicacion que el ejemplo anterior a excepcion de que .text devuelve el texto de la pagina y .json() devuelve el texto de la pagina en un objeto

siempre el metodo .then() o .catch() devuelven una promesa
 */

/* la función asincrona fetchTable devuelve una promesa (todas las funciones asincronas devuelven una promesa )
ej: function getMessage(){return "hola"} --------> devuelve un string
    async function getMessage(){return "hola"} -----> devuelve una promesa que la resuelve con un string  
     */
async function fetchTable() {   // toda funcion async devuelve una promesa
    return elements;
    // const response = await fetch(API_ENDPOINT);
    /**
     * La mejor manera seria con "await response.json();" porque ya lo transforma en un objeto
     */
    // const responseText = await response.text();
    // const table = JSON.parse(responseText);
    // return table

}
/*
en general, el uso de fetch(API_ENDPOINT) retorna una promesa,
se hace uso de dos await, el primero es para obtener la data de la promesa y el segundo para procesarla , haciendo uso del método text()
lo convierte en un string y posteriormente este string en formato json es transformado en un array de objetos con el metodo JSON.parse()
finalmente la función retorna un array de objetos pero al tratarse de una función asíncrona retorna una promesa */


export { fetchTable };