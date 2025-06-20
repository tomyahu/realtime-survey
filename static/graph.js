const ctx = document.getElementById('chart');
var chart_data = [0,0,0,0,0,0];

var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      label: '# of Votes',
      data: chart_data,
      borderWidth: 1
    }]
  }
});

const ws = new WebSocket("ws://localhost:8000");
var voters = new Set();

ws.addEventListener( "message", (event) => {
  var vote = JSON.parse( event.data );

  if( voters.has( vote.id ) )
    return;

  voters.add( vote.id );

  const vote_value = Number.parseInt( vote.msg );
  if( vote_value >= 0 && vote_value < chart_data.length ) {
    chart_data[ vote_value ]++;
    chart.update();
  }
})