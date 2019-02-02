google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'RIB', 'CO', 'CU', 'EE', 'TP', 'CT', 'DO'],
    ['Jan',  51, 8, 3, 15, 1, 1, 20],
    ['Feb', 1, 1, 1, 1, 1, 1, 1],
    ['Mar', 1, 1, 1, 1, 1, 1, 1],
    ['Apr', 1, 1, 1, 1, 1, 1, 1],
    ['May', 1, 1, 1, 1, 1, 1, 1],
    ['Jun', 1, 1, 1, 1, 1, 1, 1],
    ['Jul', 1, 1, 1, 1, 1, 1, 1],
    ['Aug', 1, 1, 1, 1, 1, 1, 1],
    ['Sep', 1, 1, 1, 1, 1, 1, 1],
    ['Oct', 1, 1, 1, 1, 1, 1, 1],
    ['Nov', 1, 1, 1, 1, 1, 1, 1],
    ['Dec', 1, 1, 1, 1, 1, 1, 1]]);

  var options = {
    title: 'Design Performance',
    hAxis: {title: '2019 Year', titleTextStyle: {color: 'red'}},
	vAxis: {title: 'Hours', titleTextStyle: {color: 'red'} } };

var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
  chart.draw(data, options);
}
