import express from "express";
import { WebSocketServer } from "ws";
import { guid } from "./lib";

const port = 8000;
const wsServer = new WebSocketServer( { noServer: true } );
const app = express();

let socketData : any = {};

wsServer.on('connection', (socket : any, request) => {
  console.log("new user connected");
  socket.id = guid();
  socketData[socket.id] = {};

  socket.on( 'error', console.error );

  socket.on( 'message', ( event : any ) => {
    let event_data = event.toString();
    let data = {
      id: socket.id,
      text: JSON.parse(event_data).text
    };
    console.log(data);
    let data_str = JSON.stringify(data);
    wsServer.clients.forEach( client => {
      client.send(data_str);
    })
  } )
});

const server = app.listen(port);
server.on('upgrade', (request, socket, head) => {
	wsServer.handleUpgrade(request, socket, head, socket => {
		wsServer.emit('connection', socket, request);
	});
});

