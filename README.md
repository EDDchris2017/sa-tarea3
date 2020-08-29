# Practicas Laboratorio Software Avanzado
## Segundo Semestre 2020
## Christopher Lopez 201504100

### TAREA 3
---------------------------------------
#### LINK VIDEO
https://youtu.be/fmmOFqyFDcY

#### Descripcion del Proyecto
Se cuenta con 3 servicios que simulan un negocio de pedidos
de comida a domicilio crowdsourcing.
- Servicio Cliente
- Servicio Restaurante
- Servicio Repartidos

El Cliente inicia un pedido con el servicio de Restaurante, luego este procesa
y al finalizar le pasa informacion del pedido al Repartidor, cuando finalice el cliente confirme
que recibio su pedido y el servicio de repartidor responde al servicio de restaurante de orden entregada.

#### ¿Como ejecutar ?
- Tener instalado node js y npm en un sistema operativo linux o windows
- clonar el Repositorio de la branch "master"
- Comando "npm install" para instalar las dependencias
- ejecutar con "node archivo.js" el servicio dentro de cada carpeta por aparte
- Levantar primero los servicios de Repartidor y Restaurante
  - Servicio Repartidor , PUERTO : 3003
  - Servicio Restaurante, PUERTO : 3002
  - Servicio Cliente

#### Formato de Envio entre servicios
Los servicios se comunican por Web Services tipo REST, intercambiando informacion
en formato JSON.
- JSON de cliente y pedido entre Cliente y Servidor
```yaml
{
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
```
- Informar estado de los pedidos
```yaml
{
  res : "Aun voy en camino con su pedido, no se preocupe" ,
  estado : 1
}
```
#### Salida de los servicios
Cada carpeta cuenta con un archivo .log donde muestra el resultado 
sacado en consola al ejecutar los servicios.
``` yaml
 Servicio Restaurante: 3003
---> Se recibio un pedido !!!
---> El Cliente Christopher pidio Hamburguesa Extra Queso con papas y Agua en Lata
--->Christopher solicito saber el estado de su pedido
--->Christopher solicito saber el estado de su pedido
--->Christopher solicito saber el estado de su pedido
---> El pedido esta Listo !! 
---> Avisando repartidor entrega ...
---> Repartidor :::  Ya cuento con pedido, voy en camino !!
--->Christopher solicito saber el estado de su pedido
--->Christopher solicito saber el estado de su pedido
==== El repartidor dice que ya entrego el pedido , muy bien !!! ===
```
![alt text](https://github.com/EDDchris2017/sa-tarea3/blob/master/servicio_img.png)
