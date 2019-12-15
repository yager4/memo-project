"use strict";


function startCreateCanvas() {
    let canvas = document.querySelector('.canvas-container')
    let gallery = document.querySelector('.container-gallery');
    canvas.style.display = 'flex'
    gallery.style.display = 'none'

}
function drawImg(elImg) {
    if (elImg) { setSizeImg(elImg.naturalWidth, elImg.naturalHeight) }
    createCanvas()
    let imgUrl = getImgUrl()
    // canvasSize(imgUrl)
    var ctx = getCtx()
    var img = new Image()
    img.src = imgUrl
    let sizeImg = getSizeImg()
    ctx.drawImage(img, 0, 0, sizeImg.width, sizeImg.height)
}
function drawText(txt) {


    let ctx = getCtx()

    ctx.save()
    ctx.font = `${txt.size + 'px'} ${txt.font}`;
    ctx.fillStyle = txt.color
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fillText(txt.line, txt.x, txt.y);
    ctx.strokeText(txt.line, txt.x, txt.y);
    let measure = ctx.measureText(txt.line)
    txt.height = measure.actualBoundingBoxAscent
    txt.width = measure.width
    ctx.restore()

}

function textLine(elInputTxt) {
debugger
    if (gIsNextLine) { createTexts() }
    var ctx = getCtx()
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    let canvas = getCanvas()
    let text = elInputTxt.value
    setTextLine(text)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTexts()
}
function setSize(elsize) {
    let ctx = getCtx()
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
    removeTxt()
    let inputs = document.querySelectorAll('.add-text')

    // inputs.forEach(input => {
    //     input.value = ''
    // });
    drawImg()
    drawTexts()
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
function chooseColor(elColor, colorStr) {
    elColor.style.backgroundColor = '#CFCFCF'
    setColor(colorStr)
    drawImg()
    drawTexts()
    setTimeout(() => {
        elColor.style.backgroundColor = colorStr
    }, 100);
}
function selectFont() {
    let font = document.querySelector('.select-font').value
    setFont(font)
    drawImg()
    drawTexts()
}

























