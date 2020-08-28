// =========================== SERVICIO DEL CLIENTE ===========================
const axios = require('axios').default

var fs = require('fs'); var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/cliente.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
 log_file.write(util.format(d) + '\n');
 log_stdout.write(util.format(d) + '\n');
};


solicitarPedido()


// ========================== ACCIONES DEL CLIENTE ============================

function solicitarPedido()
{
    console.log("---> Quiero una Hamburguesa Extra Queso con papas y Agua en Lata , Christopher Lopez ")
    console.log("---> Realizando Pedido ...")
    // Solicitar Pedido
    let parametros = {
        method: 'post',
        url: 'http://localhost:3003/recibirpedido',
        data: {
            cliente: "Christopher",
            pedido: "Hamburguesa Extra Queso con papas y Agua en Lata"
        },
        headers: {
            'Content-Type': 'application/json'
        }   
    }
    axios(parametros)
        .then( function (response) {
            console.log("---> Restaurante ::: "+ response.data.res)
        })
        .catch( function (error) {
            console.error(error)
        });
}

function verificarEstado()
{

}

function verificarPedido()
{

}