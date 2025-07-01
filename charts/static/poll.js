const ws = new WebSocket("ws://localhost:8000");

function vote( option ) {
  var message = {
    msg: option.toString()
  };

  ws.send( JSON.stringify( message ) );
  document.getElementById( "poll" ).style.display = "None";
  document.getElementById( "message-container" ).style.display = "flex";
}