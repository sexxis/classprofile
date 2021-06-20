import * as d3 from 'd3';

function getMax(data) {
  let max = 0;
  for (var i in data) {
    if (data[i].value > max) {
      max = data[i].value;
    }
  }
  return max;
}

function renderPieChart(elem, data, width, height, showValues = true) {
  let max = getMax(data);
  var svg = elem.append("svg")
    .attr("width", width)
    .attr("height", height)

  var width = svg.attr("width") - 100,
      height = svg.attr("height") - 100,
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + (width / 2 + 50) + "," + (height / 2 + 50) + ")");

  // Setup a color scale for filling each box
  var color = d3.scaleOrdinal(d3.schemeSet2);

  var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

  var path = d3.arc()
      .outerRadius(function(d) {
        return radius - 10;
      })
      .innerRadius(0);

  var label = d3.arc()
      .outerRadius(radius + 20)
      .innerRadius(radius + 20);

  var innerLabel = d3.arc()
      .outerRadius(radius - 50)
      .innerRadius(radius - 50);

  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.name); });

  let prev_y = null;
  arc.append("text")
      .attr("transform", function(d) {
        var temp = label.centroid(d);
        // changes the x location so the text is centered
        temp[0] -= d.data.name.length / 2 * 9;
        // check the previous label does not everlap with the next one
        if (prev_y && (
          prev_y < temp[1] & prev_y + 15 > temp[1] ||
          temp[1] < prev_y & temp[1] + 15 > prev_y)) {
          if (prev_y + 7 < temp[1]) {
            temp[1] = prev_y;
          } else {
            temp[1] = prev_y - 15;
          }
        }
        prev_y = temp[1];
        return "translate(" + temp  + ")";
      })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.name; });
  
  if(showValues) {
    arc.append("text")
    .attr("transform", function(d) {
      var temp = innerLabel.centroid(d);
        // changes the x location so the text is centered
        temp[0] -= d.data.value.toString().length / 2 * 9;
      return "translate(" + temp + ")";
    })
    .attr("dy", "0.35em")
    .text(function(d) { return d.data.value; });
  }

}

export {
  renderPieChart
}
