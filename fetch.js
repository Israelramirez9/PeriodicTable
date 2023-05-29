const API_ENDPOINT = "https://neelpatel05.pythonanywhere.com/";

/*
el fetch actua como promesa por parametro tiene la url de una pagina u API .json
fetch("URL").then(response=>response.json()).then(obj=>console.log(obj))

fetch es un método que al pasar por parametro el string de la url de la pagina realiza una peticion, posteriormente al hacer uso de then este permite acceder al contenido sin embargo se debe usar .json() para convertir el string en un objeto y por ultimo, el ultimo then permite obtener todo el objeto;
otra forma:

fetch("URL").then(response=>response.text()).then(srt=>console.log(str))

misma explicacion que el ejemplo anterior a excepcion de que .text devuelve el texto de la pagina y .json() devuelve el texto de la pagina en un objeto

siempre el metodo .then() o .catch() devuelven una promesa
 */
async function fetchTable() {   // toda funcion async devuelve una promesa
    const response = await fetch(API_ENDPOINT);
    /**
     * La mejor manera seria con "await response.json();" porque ya lo transforma en un objeto
     */
    const responseText = await response.text();
    const table = JSON.parse(responseText);
    return table

}

export { fetchTable };