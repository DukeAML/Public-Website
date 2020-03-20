import React from "react";

import { Container } from "react-bootstrap";

////////////// DEFINE CLASSES /////////////////////////////

const mainGrey = "#2f3e4e";
const darkGrey = "#1e2c3a";
const lightGrey = "#617489";
const mainWhite = "#f2f4f5";
function Circle(x, y, dx, dy, radius, borderColor, fillColor, ctx) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.borderColor = borderColor;
  this.fillColor = fillColor;

  this.draw = function(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.lineWidth = 2;
    c.fillStyle = this.fillColor;
    c.fill();
  };
}

// This class models a "signal" which will be animated moving in between neurons
function Signal(startX, startY, endX, endY) {
  // Construct the singal object from parameters
  this.startX = startX;
  this.startY = startY;
  this.endX = endX;
  this.endY = endY;

  // Current x
  this.currentX = startX;
  this.currentY = startY;

  // Draw the signal node
  this.draw = function(c) {
    c.beginPath();
    c.arc(this.currentX, this.currentY, 10, 0, Math.PI * 2, false);
    c.fillStyle = "#617489";
    c.fill();
  };

  // Move the signal along the desired path until it reaches the end
  this.update = function(c) {
    var slope = (this.endY - this.startY) / (this.endX - this.startX);

    // If we've reached the end, then reset the position to 0
    if (this.currentX > endX) {
      this.currentX = this.startX;
      this.currentY = this.startY;
      return false;
    }

    this.currentX += 0.7;
    this.currentY += 0.7 * slope;

    this.draw(c);
  };
}

let widthResponse;
let heightResponse;
if (window.innerWidth < 770) {
  widthResponse = 0;
  heightResponse = 0;
} else {
  widthResponse = window.innerWidth;
  heightResponse = window.innerHeight;
}
/////////////////////////////////////////////////////////////

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      allSignals: [[], [], []],
      frameCounter: 0,
      stageCounter: 0,
      width: 0,
      height: 0
    };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  updateAnimationState() {
    if (
      this.state.frameCounter >=
      ((10 / 7) * this.state.width) / 5.0 / 2.0 - 0.5
    ) {
      this.setState({ frameCounter: 0 });
      console.log(this.state.stageCounter);
      if (this.state.stageCounter >= 2) {
        console.log(this.state.allSignals[this.state.stageCounter]);
        this.setState({ stageCounter: 0 });
      } else {
        this.setState(prevState => ({
          stageCounter: prevState.stageCounter + 1
        }));
      }
    }
    this.setState(prevState => ({ frameCounter: prevState.frameCounter + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    this.setState({ width: width, height: height });

    // Parameters for first layer
    const firstLayerXPos = width / 5;
    const yPos = height / 2;
    const firstVerticalSpacing = 70;

    // Parameters for second layer
    const secondLayerXPos = (2 * width) / 5;
    const secondVerticalSpacing = 65;

    // Parameters for third layer
    const thirdLayerXPos = (3 * width) / 5;
    const thirdVerticalSpacing = 65;

    // Parameters for the fourth layer
    const ouputLayerXPos = (4 * width) / 5;
    const outputLayerVerticalSpacing = 40;

    var layerOnePaths = [];
    var layerTwoPaths = [];
    var layerThreePaths = [];

    var allPaths = [layerOnePaths, layerTwoPaths, layerThreePaths];
    /// INTIALIZE ALL PATHS:
    // Traverse each of the three input Nodes
    for (var i = -1; i < 2; i++) {
      var startXPosition = firstLayerXPos;
      var startYPosition = yPos + i * firstVerticalSpacing;
      for (var j = -2; j < 3; j++) {
        var endXPosition = secondLayerXPos;
        var endYPosition = yPos + j * secondVerticalSpacing;

        var path = {
          startXPosition: startXPosition,
          startYPosition: startYPosition,
          endXPosition: endXPosition,
          endYPosition: endYPosition
        };

        layerOnePaths.push(path);
      }
    }

    /// DRAW THE ARROWS BETWEEN THE SECOND AND THIRD LAYERS:

    // Traverse each of the three input Nodes
    for (var i = -2; i < 3; i++) {
      var startXPosition = secondLayerXPos;
      var startYPosition = yPos + i * secondVerticalSpacing;
      for (var j = -2; j < 3; j++) {
        var endXPosition = thirdLayerXPos;
        var endYPosition = yPos + j * thirdVerticalSpacing;

        var path = {
          startXPosition: startXPosition,
          startYPosition: startYPosition,
          endXPosition: endXPosition,
          endYPosition: endYPosition
        };

        layerTwoPaths.push(path);
      }
    }

    // DRAW ARROWS BETWEEN THIRD AND OUTPUT LAYER:
    for (var i = -2; i < 3; i++) {
      var startXPosition = thirdLayerXPos;
      var startYPosition = yPos + i * thirdVerticalSpacing;
      for (var j = -1; j < 2; j += 2) {
        var endXPosition = ouputLayerXPos;
        var endYPosition = yPos + j * outputLayerVerticalSpacing;
        var path = {
          startXPosition: startXPosition,
          startYPosition: startYPosition,
          endXPosition: endXPosition,
          endYPosition: endYPosition
        };
        layerThreePaths.push(path);
      }
    }

    var allSignals = [[], [], []];
    for (var i = 0; i < allPaths.length; i++) {
      for (var j = 0; j < allPaths[i].length; j++) {
        var path = allPaths[i][j];
        var currentSignal = new Signal(
          path.startXPosition,
          path.startYPosition,
          path.endXPosition,
          path.endYPosition
        );
        allSignals[i].push(currentSignal);
      }
    }

    this.setState({ allSignals: allSignals });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  drawNeuralPath(c, width, height) {
    // Parameters for first layer
    const firstLayerXPos = width / 5;
    const yPos = height / 2;
    const firstVerticalSpacing = 70;

    // Parameters for second layer
    const secondLayerXPos = (2 * width) / 5;
    const secondVerticalSpacing = 65;

    // Parameters for third layer
    const thirdLayerXPos = (3 * width) / 5;
    const thirdVerticalSpacing = 65;

    // Parameters for the fourth layer
    const ouputLayerXPos = (4 * width) / 5;
    const outputLayerVerticalSpacing = 40;

    var layerOnePaths = [];
    var layerTwoPaths = [];
    var layerThreePaths = [];

    var allPaths = [layerOnePaths, layerTwoPaths, layerThreePaths];
    /// INTIALIZE ALL PATHS:
    // Traverse each of the three input Nodes
    for (var i = -1; i < 2; i++) {
      var startXPosition = firstLayerXPos;
      var startYPosition = yPos + i * firstVerticalSpacing;
      for (var j = -2; j < 3; j++) {
        var endXPosition = secondLayerXPos;
        var endYPosition = yPos + j * secondVerticalSpacing;

        var path = {
          startXPosition: startXPosition,
          startYPosition: startYPosition,
          endXPosition: endXPosition,
          endYPosition: endYPosition
        };

        layerOnePaths.push(path);
      }
    }

    /// DRAW THE ARROWS BETWEEN THE SECOND AND THIRD LAYERS:

    // Traverse each of the three input Nodes
    for (var i = -2; i < 3; i++) {
      var startXPosition = secondLayerXPos;
      var startYPosition = yPos + i * secondVerticalSpacing;
      for (var j = -2; j < 3; j++) {
        var endXPosition = thirdLayerXPos;
        var endYPosition = yPos + j * thirdVerticalSpacing;

        var path = {
          startXPosition: startXPosition,
          startYPosition: startYPosition,
          endXPosition: endXPosition,
          endYPosition: endYPosition
        };

        layerTwoPaths.push(path);
      }
    }

    // DRAW ARROWS BETWEEN THIRD AND OUTPUT LAYER:
    for (var i = -2; i < 3; i++) {
      var startXPosition = thirdLayerXPos;
      var startYPosition = yPos + i * thirdVerticalSpacing;
      for (var j = -1; j < 2; j += 2) {
        var endXPosition = ouputLayerXPos;
        var endYPosition = yPos + j * outputLayerVerticalSpacing;

        var path = {
          startXPosition: startXPosition,
          startYPosition: startYPosition,
          endXPosition: endXPosition,
          endYPosition: endYPosition
        };

        layerThreePaths.push(path);
      }
    }

    c.lineWidth = 2;
    // Traverse each of the three input Nodes
    for (var i = 0; i < layerOnePaths.length; i++) {
      var path = layerOnePaths[i];
      startXPosition = path.startXPosition;
      startYPosition = path.startYPosition;
      endXPosition = path.endXPosition;
      endYPosition = path.endYPosition;
      c.beginPath();
      c.moveTo(startXPosition, startYPosition);
      c.lineTo(endXPosition, endYPosition);
      c.strokeStyle = "#1e2c3a";
      c.stroke();
    }

    for (var i = 0; i < layerTwoPaths.length; i++) {
      startXPosition = layerTwoPaths[i].startXPosition;
      startYPosition = layerTwoPaths[i].startYPosition;
      endXPosition = layerTwoPaths[i].endXPosition;
      endYPosition = layerTwoPaths[i].endYPosition;
      c.beginPath();
      c.moveTo(startXPosition, startYPosition);
      c.lineTo(endXPosition, endYPosition);
      c.strokeStyle = "#1e2c3a";
      c.stroke();
    }

    for (var i = 0; i < layerThreePaths.length; i++) {
      startXPosition = layerThreePaths[i].startXPosition;
      startYPosition = layerThreePaths[i].startYPosition;
      endXPosition = layerThreePaths[i].endXPosition;
      endYPosition = layerThreePaths[i].endYPosition;
      c.beginPath();
      c.moveTo(startXPosition, startYPosition);
      c.lineTo(endXPosition, endYPosition);
      c.strokeStyle = "#1e2c3a";
      c.stroke();
    }
  }

  drawNeurons(c, width, height) {
    // Parameters for first layer
    const firstLayerXPos = width / 5;
    const yPos = height / 2;
    const firstVerticalSpacing = 70;

    // Parameters for second layer
    const secondLayerXPos = (2 * width) / 5;
    const secondVerticalSpacing = 65;

    // Parameters for third layer
    const thirdLayerXPos = (3 * width) / 5;
    const thirdVerticalSpacing = 65;

    // Parameters for the fourth layer
    const ouputLayerXPos = (4 * width) / 5;
    const outputLayerVerticalSpacing = 40;

    var inputTop = new Circle(
      firstLayerXPos,
      yPos - firstVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var inputMiddle = new Circle(
      firstLayerXPos,
      yPos,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var inputBottom = new Circle(
      firstLayerXPos,
      yPos + firstVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    inputTop.draw(c);
    inputMiddle.draw(c);
    inputBottom.draw(c);

    var l2Top = new Circle(
      secondLayerXPos,
      yPos - 2 * secondVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l2North = new Circle(
      secondLayerXPos,
      yPos - secondVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l2Middle = new Circle(
      secondLayerXPos,
      yPos,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l2South = new Circle(
      secondLayerXPos,
      yPos + secondVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l2Bottom = new Circle(
      secondLayerXPos,
      yPos + 2 * secondVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    l2Top.draw(c);
    l2North.draw(c);
    l2Middle.draw(c);
    l2South.draw(c);
    l2Bottom.draw(c);

    var l3Top = new Circle(
      thirdLayerXPos,
      yPos - 2 * thirdVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l3North = new Circle(
      thirdLayerXPos,
      yPos - thirdVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l3Middle = new Circle(
      thirdLayerXPos,
      yPos,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l3South = new Circle(
      thirdLayerXPos,
      yPos + thirdVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var l3Bottom = new Circle(
      thirdLayerXPos,
      yPos + 2 * thirdVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    l3Top.draw(c);
    l3North.draw(c);
    l3Middle.draw(c);
    l3South.draw(c);
    l3Bottom.draw(c);

    var outputTop = new Circle(
      ouputLayerXPos,
      yPos - outputLayerVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    var outputBottom = new Circle(
      ouputLayerXPos,
      yPos + outputLayerVerticalSpacing,
      0,
      0,
      10,
      "dark",
      "#1e2c3a"
    );
    outputTop.draw(c);
    outputBottom.draw(c);
  }

  componentDidUpdate() {
    const { angle } = this.props;
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    this.drawNeuralPath(ctx, width, height);
    for (
      var j = 0;
      j < this.state.allSignals[this.state.stageCounter].length;
      j++
    ) {
      this.state.allSignals[this.state.stageCounter][j].update(ctx);
    }
    this.drawNeurons(ctx, width, height);
    ctx.restore();
  }

  render() {
    return <canvas width={500} height={350} ref={this.canvasRef} />;
  }
}

export default Canvas;
