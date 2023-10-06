const  Socket  = require('socket.io')
const express=require('express')
const path=require('path')
const PORT = process.env.PORT || 3000;

const app=express()

app.use(express.static(path.join(__dirname,'public')))

const server=app.listen(PORT,()=>{
console.log(`Servidor escuchando en el puerto ${PORT}`)})



const io=Socket(server)

io.on('connection',(socket)=>{
console.log('new connection',socket.id)

socket.on('chat:message',(data)=>{
    io.sockets.emit('chat:message',data)
    
    })

    socket.on('chat:typing',(data)=>{
        socket.broadcast.emit('chat:typing',data)
        
        })


})





