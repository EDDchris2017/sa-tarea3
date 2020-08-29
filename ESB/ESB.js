// =========================== SERVICIO DEL ESB ===========================

const express = require("express")
, bodyParser = require('body-parser');
const app = express();
const axios = require('axios').default

var fs = require('fs'); var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/repartidor.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};


/**
 *  Puerto del ESB : 3004
 */
app.listen(3002, () => {
    console.log("Servicio ESB: 3004");
});