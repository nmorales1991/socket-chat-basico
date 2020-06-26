const {io} = require('../index')

io.on('connection',client=>{//con ON connection, veo quien se conectó
    console.log("Usuario conectado")
    //console.log(client)

    /*client.emit('enviarMensaje',{//emito información al cliente, va con el nombre "enviarMensaje"
        usuario:'Administrador',
        mensaje:'Bienvenido a la aplicación'
    })*/

    client.on('disconnect',()=>{//reviso si el usuario se desconectó
        console.log("Usuario desconectado")
    })

    //escucho los emit del cliente que vienen con nombre "enviarMensaje"
    client.on('enviarMensaje',(data,callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje',data)
        /*if(mensaje.usuario){
            callback({//ejecuto el callback enviandole una respuesta al cliente
                resp:'TODO SALIÓ BIEN'
            })
        }else{
            callback({
                resp:'TODO SALIÓ MAL'
            })
        }*/
        
    })
})