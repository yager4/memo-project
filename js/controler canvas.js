"use strict";


function startCreateCanvas() {
    createCanvas()
    drawImg()
    let canvas = document.querySelector('.canvas-container')
    let gallery = document.querySelector('.container-gallery');
    canvas.style.display = 'flex'
    gallery.style.display = 'none'

}

function drawImg() {

    let imgUrl = getImgUrl()
    var ctx = getContext()
    if (img)
        ctx.drawImage(img, 0, 0, 600, 400)
    else {
        var img = new Image()
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 600, 400)
            drawTexts()
        };
        img.src = imgUrl
    }

}
function drawText(txt) {

    let ctx = getContext()
    ctx.save()
    ctx.font = `${txt.size + 'px'} Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif`;
    ctx.fillText(txt.line, txt.x, txt.y);
    ctx.strokeText(txt.line, txt.x, txt.y);
    ctx.restore()
}

function textLine(elInputTxt) {
    var ctx = getContext()
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);

    let text = elInputTxt.value
    let index = +elInputTxt.getAttribute('data-id')
    setIndexToSelectedTxtIdx(index)
    setTextLine(text, index)
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}
function setSize(elsize) {
    let ctx = getContext()
    setSizeFont(elsize)
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
}






















// function onMouseDown(ev) {
//     clickTxt(ev)
//     gIsMouseDown = true

// }

// function onMouseUp() {
//     gIsMouseDown = false

// }

// function onDrawOnCanvas(ev) {

//     if (gIsMouseDown) {
//         setOffsetXY(ev.offsetX, ev.offsetY)
//     } else return
// }


// }
// function clickTxt(ev) {
//     // let txts = getContext()

//     // return (ev.offsetX > txt.x &&
//     //     ev.offsetX < txt.x + gBarWidth &&
//     //     ev.offsetY > txt.y &&
//     //     ev.offsetY < txt.y + txt.height)



// }



