'use strict'
var gStars = [
  {
    name: 'Static',
    color: '#7D7',
    rate: 9
  },
  {
    name: 'Benel',
    color: '#E77',
    rate: 6
  },
  {
    name: 'NoaKilla',
    color: '#77D',
    rate: 10
  }
];

var gBarWidth = 40;
var gHeightFactor = 20;
var gCanvas;
var gCtx;


function init() {
  gCanvas = document.querySelector('#canvas');
  gCtx = gCanvas.getContext('2d');

  gCtx.fillStyle = 'pink'
  gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
  drawCharts()
}

function drawCharts() {
  // TODO: draw a chart for each star
  gStars.forEach((star, idx) => {
    gCtx.fillStyle = star.color

    star.x = (idx) * (gBarWidth + 40) + 20;

    let starHeight = star.rate * gHeightFactor

    star.y = gCanvas.height - starHeight

    gCtx.fillRect(star.x, star.y, gBarWidth, starHeight)
  })
}

function canvasClicked(ev) {
  // TODO: find out if clicked inside of star chart
  let clickedStar = gStars.find(star => {
    return (
      ev.offsetX > star.x &&
      ev.offsetX < star.x + gBarWidth &&
      ev.offsetY > star.y &&
      ev.offsetY < star.y + star.rate * gHeightFactor
    )
  })

  // TODO: open the modal on the clicked coordinates if found a click on a star,
  //       close the modal otherwise
  if (clickedStar) openModal(clickedStar.name, clickedStar.rate, ev.clientX, ev.clientY)
  else closeModal()
}

function openModal(name, rate, x, y) {
  // TODO: open the modal with the given text in the given coordinates
  let elModal = document.querySelector('.modal')
  elModal.style.display = 'block'
  elModal.innerText = `${name} is ${rate*10}% awesome`
  elModal.style.top = y + 'px'
  elModal.style.left = x + 'px'
}

function closeModal() {
  //TODO: close the modal
  let elModal = document.querySelector('.modal')
  elModal.style.display = 'none'
}