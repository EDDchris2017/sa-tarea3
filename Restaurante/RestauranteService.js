// =========================== SERVICIO DEL RESTAURANTE ===========================
const express = require("express")
, bodyParser = require('body-parser');
const app = express();

var fs = require('fs'); var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/restaurante.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
 log_file.write(util.format(d) + '\n');
 log_stdout.write(util.format(d) + '\n');
};


/**
 *  Puerto del Repartidos : 3003
 */
app.listen(3003, () => {
    console.log(" Servicio Restaurante: 3003");
});

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Restaurante activo');
    res.status(200)
});

app.post('/recibirpedido', function (request, res){
    console.log("---> Se recibio un pedido !!!")
    res.send(recibirPedido(request.body.cliente,request.body.pedido))
});

function recibirPedido(cliente, pedido)
{
    let respuesta = "";
    if ( !cliente || !pedido)
    {
        console.error("---> Error al recibir datos de un cliente")
        respuesta = "Error al procesa pedido"
    }else
    {
        console.log("---> El Cliente " + cliente + " pidio " + pedido)
        respuesta = {
            res : "Que tal " + cliente + " tu pedido se esta procesando ..."
        }
    }
    return respuesta
}

function informarEstado()
{

}

function avisarRepartidor()
{

}