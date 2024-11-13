google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = google.visualization.arrayToDataTable([
    ['段位', '獎金'],
    ['棋聖',     4500],
    ['十段',      700],
    ['本因坊',  2800],
    ['碁聖', 800],
    ['名人',    3000]
]);

var options = {
    title: '日本五大棋戰獎金分布圖'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}