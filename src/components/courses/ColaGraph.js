const { nodes, links } = require("./Data-v2");

function performGraph() {
  force = d3.layout
    .force()
    .charge(-1000)
    .theta(1)
    .linkDistance(170)
    .size([width, height])
    .on("tick", tick);
  drag = force
    .drag()
    .on("dragstart", dragstart)
    .on("dragend", dragend);
  svg = d3
    .select("body")
    .append("svg")
    .attr("id", "thissvg")
    .attr("width", width)
    .attr("height", height);
  link = svg.selectAll(".link");
  node = svg.selectAll(".node");
  force.nodes(nodes).links(links);
  force.start();
  for (var i = n; i > 0; --i) {
    force.tick();
  }
  force.stop();
  link = link
    .data(links)
    .enter()
    .append("g")
    .attr("class", "glink")
    .append("line")
    .style("stroke-width", "3")
    .attr("class", "link")
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    })
    .attr("stroke", function(d) {
      return d.linkcolor;
    });
  node = node
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("nodeid", function(d) {
      return d.nodeid;
    })
    .attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  node
    .append("circle")
    .attr("r", "15")
    .attr("fill", function(d) {
      return d.nodecolor;
    })
    //.attr("fill", "#888888")
    .attr("fill-opacity", "1")
    .attr("cx", "0")
    .attr("cy", "0");
  node
    .append("text")
    .attr("x", 12)
    .attr("dx", "0.5em")
    .attr("dy", "0.5em")
    .attr("class", "nodecaption")
    .attr("display", "inline")
    .text(function(d) {
      return d.name;
    });
  node.call(drag);
}

function tick() {
  link
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });
  node.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
}

function dragstart(d) {
  force.stop();
}

function dragend(d) {
  force.stop();
}

performGraph();
