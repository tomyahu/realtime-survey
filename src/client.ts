import readline from "readline";

function askQuestion(query : string) : Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }))
}


const ws = new WebSocket( "ws://localhost:8000" );


while( true ) {
  const ans : string = await askQuestion("vote: ");

  const message : any = {
    "msg": ans
  };
  ws.send( JSON.stringify(message) )
}