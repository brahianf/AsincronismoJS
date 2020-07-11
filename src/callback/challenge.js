let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    // True para acivar asincronismo dentro de xmlhttprequest
    xhttp.open('GET', url_api, true)
    // Escuchar cambios
    xhttp.onreadystatechange = function (event) {
        // validar estado y conexion,
        // triple igual para validar valor y tipo
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else {
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}