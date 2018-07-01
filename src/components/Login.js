import React from 'react';
import '../css/style.css'

export default class Login extends React.Component {
  state = {
    points: []
  }

  image
  imageCanvas
  imageCanvasContext
  lineCanvas
  lineCanvasContext 
  pointLifetime = 1000;

  componentDidMount = () => {
    this.image = document.querySelector('img');
    this.imageCanvas = document.getElementById('imageCanvas');
    this.imageCanvasContext = this.imageCanvas.getContext('2d');
    this.lineCanvas = document.getElementById('lineCanvas');
    this.lineCanvasContext = this.lineCanvas.getContext('2d');
    document.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.resizeCanvases);
    document.body.appendChild(this.imageCanvas);
    this.resizeCanvases();
    this.tick();
  }

  onMouseMove = (event) => {
    this.setState(({ points }) => {
      points.push({
        time: Date.now(),
        x: event.clientX,
        y: event.clientY
      });
      return { points }
    })
  }

  resizeCanvases = () => {
    this.imageCanvas.width = this.lineCanvas.width = window.innerWidth;
    this.imageCanvas.height = this.lineCanvas.height = window.innerHeight;
  }

  tick = () => {
    const pointLifetime = this.pointLifetime
    // Remove old points 
    this.setState(({ points }) => ({
      points: points.filter(function (point) {
        var age = Date.now() - point.time;
        return age < pointLifetime;
      })
    })
    )

    this.drawLineCanvas();
    this.drawImageCanvas();
    requestAnimationFrame(this.tick);
  }

  drawLineCanvas = () => {
    var minimumLineWidth = 25;
    var maximumLineWidth = 100;
    var lineWidthRange = maximumLineWidth - minimumLineWidth;
    var maximumSpeed = 50;

    this.lineCanvasContext.clearRect(0, 0, this.lineCanvas.width, this.lineCanvas.height);
    this.lineCanvasContext.lineCap = 'round';
    this.lineCanvasContext.shadowBlur = 30;
    this.lineCanvasContext.shadowColor = '#000';

    const { points } = this.state

    for (var i = 1; i < points.length; i++) {
      var point = points[i];
      var previousPoint = points[i - 1];

      // Change line width based on speed
      var distance = this.getDistanceBetween(point, previousPoint);
      var speed = Math.max(0, Math.min(maximumSpeed, distance));
      var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
      this.lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

      // Fade points as they age
      var age = Date.now() - point.time;
      var opacity = (this.pointLifetime - age) / this.pointLifetime;
      this.lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';

      this.lineCanvasContext.beginPath();
      this.lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
      this.lineCanvasContext.lineTo(point.x, point.y);
      this.lineCanvasContext.stroke();
    }
  }

  getDistanceBetween = (a, b) => {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  drawImageCanvas = () => {
    var width = this.imageCanvas.width;
    var height = this.imageCanvas.width / this.image.naturalWidth * this.image.naturalHeight;

    if (height < this.imageCanvas.height) {
      width = this.imageCanvas.height / this.image.naturalHeight * this.image.naturalWidth;
      height = this.imageCanvas.height;
    }

    this.imageCanvasContext.clearRect(0, 0, this.imageCanvas.width, this.imageCanvas.height);
    this.imageCanvasContext.globalCompositeOperation = 'source-over';
    this.imageCanvasContext.drawImage(this.image, 0, 0, width, height);
    this.imageCanvasContext.globalCompositeOperation = 'destination-in';
    this.imageCanvasContext.drawImage(this.lineCanvas, 0, 0);
  }

  render() {
    console.log(this.state.points)
    return (
      <div >
        <div className='body' > 
          <canvas id='imageCanvas' ref={this.imageCanvas} />
          <canvas id='lineCanvas' ref={this.lineCanvas} />

          <img src={require('../download.jpg')} />
          <button onClick={() => { this.props.history.push('/main') }}> Let Go !! </button>
        </div>
      </div>
    )
  }
}
