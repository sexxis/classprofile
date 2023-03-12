// Creds to cagrimmett: https://gist.github.com/cagrimmett/07f8c8daea00946b9e704e3efcbd5739 
// & KJ Schmidt https://medium.com/@kj_schmidt/show-data-on-mouse-over-with-d3-js-3bf598ff8fc2

import * as d3 from 'd3';

var margin = {
    top: 0,
    right: 25,
    bottom: 15,
    left: 200
};

function renderColorGrid(elem, data, rows, columns, options) {
    var gridData = new Array();
    var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = 1;

    var width = (options.width - margin.left - margin.right) / rows; // options.width / row;
    var height = width;

    // iterate for rows	
    for (var row = 0; row < rows; row++) {
        gridData.push(new Array());

        // iterate for cells/columns inside rows
        for (var column = 0; column < columns; column++) {
            gridData[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                color: data[row * rows + column]
            })
            // increment the x position. I.e. move it over by 50 (width variable)
            xpos += width;
        }
        // reset the x position after a row is complete
        xpos = 1;
        // increment the y position for the next row. Move it down 50 (height variable)
        ypos += height;
    }

    var hoverDiv = d3.select("body").append("div")
        .attr("class", "tooltip-colour-grid")
        .style("opacity", 0);

    var grid = elem
        .append("svg")
        .attr("width", width * columns)
        .attr("height", height * rows);

    var row = grid.selectAll(".row")
        .data(gridData)
        .enter().append("g")
        .attr("class", "row");

    var column = row.selectAll(".square")
        .data(function (d) { return d; })
        .enter().append("rect")
        .attr("class", "square")
        .attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; })
        .attr("width", function (d) { return d.width; })
        .attr("height", function (d) { return d.height; })
        .style("fill", function (d) {
            console.log("#" + d.color)
            return "#" + d.color
        })
        .on('mouseover', function (d) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.85');

            hoverDiv.transition()
                .duration(50)
                .style("opacity", 1);


            let hex = "#" + (d.color).toString();

            hoverDiv.html(hex)
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");

        })
        .on('mouseout', function (d) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1');

            hoverDiv.transition()
                .duration('50')
                .style("opacity", 0);
        });
}

export { renderColorGrid };