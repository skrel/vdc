google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'RIB', 'CO', 'CU', 'EE', 'TP', 'CT'],
    ['Jan',  100, 50, 50, 50, 1, 1],
  ['Feb', 1, 1, 1, 1, 1, 1]]);

  var options = {
    title: 'Design Performance',
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
 };

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart1();
  drawChart2();
});
