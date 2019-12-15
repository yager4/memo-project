"use strict";
var gCanvas
var gImg
var gCtx
var gIndex
var gIsMouseDown = false
var gOffsetY = 60
var gNotRemove = 1
var gIsNextLine = true
var gMemo = {
    selectedImgId: 0,
    selectedTxtIdx: 0,
    txts: []
}

function createText(font = 'Impact', line = '', align = 'left', color = 'white', size = 40, x = 0, y = gOffsetY) {
    return {
        font,
        line,
        align,
        color,
        size,
        x,
        y
    }
}

function createTexts() {

    gMemo.txts.push(createText())
    gIsNextLine = false

}
function nextLine() {
    debugger
    if (gMemo.txts.length === gMemo.selectedTxtIdx) {
        gMemo.selectedTxtIdx - 1
        return
    }
    let inputs = document.querySelectorAll('.add-text')
    inputs.forEach(input => {
        input.value = ''
    });
    gIsNextLine = true
    gOffsetY += 30
    gMemo.selectedTxtIdx = gMemo.txts.length
}


function createCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
    let sizeImg = getSizeImg()
    gCtx.canvas.width = sizeImg.width
    gCtx.canvas.height = sizeImg.height
}
function getCanvas() {
    return gCanvas
}
function getCtx() {
    return gCtx
}
function setTextLine(text) {
    debugger
    gMemo.txts[gMemo.selectedTxtIdx].line = text
}
function setSizeFont(elsizeFont) {

    gMemo.txts[gMemo.selectedTxtIdx].size = elsizeFont

}
function getSizeFont() {
    return gMemo.txts[gMemo.selectedTxtIdx].size
}
function getTheOffset() {

    return [gMemo.txts[gMemo.selectedTxtIdx].x, gMemo.txts[gMemo.selectedTxtIdx].y]
}

function setIndexToSelectedTxtIdx(idx) {
    gMemo.selectedTxtIdx = idx
}
function getLineTxt() {
    let index = gMemo.selectedTxtIdx
    return gMemo.txts[index].line
}
function getTxts() {

    return gMemo.txts
}

function getSelectedTxtIdx() {
    return gMemo.selectedTxtIdx
}
function setColor(color) {
    console.log(color)
    gMemo.txts[gMemo.selectedTxtIdx].color = color
}

function isInTextArea(ev) {
    let clickedTxtIdx = gMemo.txts.findIndex(txt => {

        return (
            ev.offsetX > txt.x &&
            ev.offsetX < txt.x + txt.width &&
            ev.offsetY < txt.y &&
            ev.offsetY > txt.y - txt.height)
    })
    if (clickedTxtIdx != -1) {
        gMemo.selectedTxtIdx = clickedTxtIdx
        return true
    } else return false

}
function onMouseDown(event) {
    if (isInTextArea(event)) { gIsMouseDown = true }
}
function onMouseUp(event) {
    gIsMouseDown = false
}



function onDrawOnCanvas(event) {

    if (gIsMouseDown) {

        gMemo.txts[gMemo.selectedTxtIdx].x = event.offsetX
        gMemo.txts[gMemo.selectedTxtIdx].y = event.offsetY
        drawImg()
        drawTexts()
    }

}
function setFont(font) {
    gMemo.txts[gMemo.selectedTxtIdx].font = font
}
function getFont() {

    return gMemo.txts[gMemo.selectedTxtIdx].font

}
function removeTxt() {
    gMemo.txts.splice(gMemo.selectedTxtIdx, 1)
    gMemo.selectedTxtIdx = gMemo.txts.length - 1
}
function removeModel() {
debugger
    gOffsetY = 60
    gMemo.txts.splice(0, gMemo.txts.length)
    gMemo.selectedTxtIdx = 0
    let inputs = document.querySelector('.add-text')
    inputs.value = ''
    gIsNextLine = true


}






















