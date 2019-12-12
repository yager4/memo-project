"use strict";
var gCanvas
var gImg
var gCtx
var gIndex
var gIsMouseDown


var gMemo = {
    selectedImgId: 5,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            align: 'left',
            color: 'red',
            size: 25,
            x: 0,
            y: 80,


        },
        {
            line: '',
            align: 'left',
            color: 'red',
            size: 25,
            x: 0,
            y: 300

        }


    ]
}
function createCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
}
function getContext() {
    return gCtx
}


function setTextLine(text, index) {
    gMemo.txts[index].line = text
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
function inputId(elInputId) {
    gMemo.selectedTxtIdx = elInputId
}
function getSelectedTxtIdx(){
    return gMemo.selectedTxtIdx
}






















// function createInput() {
//
//     var canvas = document.querySelector('.my-canvas')
//     var input = document.createElement('input')
//     input.setAttribute('class','add-text')
//     input.setAttribute('type',"text")
//     input.setAttribute('placeholder','add text')
//     input.setAttribute('onkeyup','textLine()')
//     canvas.appendChild(input);


// }

