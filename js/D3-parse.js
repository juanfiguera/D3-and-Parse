// Extracting data from Parse.com
Parse.initialize("[replace with parse key]", "[replace with parse key]");
var LA = Parse.Object.extend("LA_year_avg");
var query = new Parse.Query(LA);

var dataTest;
var dataPoint;
var dataArray = [];

// Creating dataArray with Parse's data 
query.find({
  success: function(results) {
    for (var i = 0; i <= 10; i++) {
      dataDate = results[i].attributes.Year; 
      dataPoint = parseFloat(results[i].attributes.coPpm);
      dataArray[i] = new Array(dataDate, dataPoint);
    };
    plotData(dataArray);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

// Using D3.js to plot dataArray
function plotData(dataArray){
  console.log(dataArray, "plotData2");
  var svg = d3.select("body").append("svg")
  .attr("width", 1000)
  .attr("height", 500)
  .append("g")
  .attr("transform","translate(40,10)");

  var chart = LineChart(
  {
    "parent": svg,
    "labels": [ "Year", "CO (ppm)"],
    "data": dataArray
  });
  chart();
}

