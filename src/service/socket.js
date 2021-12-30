import socketClient from 'socket.io-client'


// Server Url
const SERVER = 'http://127.0.0.1:8080'


export const socket = socketClient(SERVER)
  socket.on('connection', () => {
    console.log('test')
  })