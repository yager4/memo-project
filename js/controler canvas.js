"use strict";


function startCreateCanvas() {
    drawImg()

    let canvas = document.querySelector('.canvas-container')
    let gallery = document.querySelector('.container-gallery');
    canvas.style.display = 'flex'
    gallery.style.display = 'none'

}

function drawImg() {

    let imgUrl = getImgUrl()
    createCanvas()
    // canvasSize(imgUrl)
    var ctx = getContext()
    var img = new Image()
    img.src = imgUrl
    ctx.drawImage(img, 0, 0, 600, 400)


}
function drawText(txt) {
    let ctx = getContext()
    ctx.save()
    ctx.font = `${txt.size + 'px'} Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif`;
    ctx.fillStyle = txt.color
    ctx.fillText(txt.line, txt.x, txt.y);
    ctx.strokeText(txt.line, txt.x, txt.y);
    ctx.restore()
}

function textLine(elInputTxt) {
    var ctx = getContext()
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    let canvas = getCanvas()
    let text = elInputTxt.value
    let index = +elInputTxt.getAttribute('data-id')
    setIndexToSelectedTxtIdx(index)
    setTextLine(text, index)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTexts()
}
function setSize(elsize) {
    let ctx = getContext()
    setSizeFont(elsize)
    drawImg()
    drawTexts()
}
function drawTexts() {
    let txts = getTxts()
    drawImg()
    txts.forEach(function (txt) {
        drawText(txt)
    });
}
function moveUp() {
    let txt = getTxts()
    let index = getSelectedTxtIdx()
    txt[index].y -= 1
    drawTexts()


}
function moveDown() {

    let txts = getTxts()
    let index = getSelectedTxtIdx()
    txts[index].y += 1
    drawTexts()

}
function trach() {
    let ctx = getContext()
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    let txts = getTxts()
    txts.forEach(txt => {

        txt.line = ''
    });
    let inputs = document.querySelectorAll('.add-text')

    inputs.forEach(input => {
        console.log('in')
        input.value = ''
    });
    drawImg()
}
function alignText(alignType) {

    let txts = getTxts()
    let index = getSelectedTxtIdx()
    switch (alignType) {
        case 'left':
            txts[index].x = 0
            break;
        case 'center':
            txts[index].x = 150
            break;
        case 'right':
            txts[index].x = 400
        default:
    }
    drawImg()
    drawTexts()
}
function chooseColor(colorStr) {
  
    setColor(colorStr)
    drawImg()
    drawTexts()
}






















