function init() {
    renderGallery()
}

function renderGallery() {

    var memeImgs = getImgeMeme()
    
    // < img class="up" onclick = "moveUp()" src = "../css-file/arrow-up-icon-png-17.jpg" alt = "" >
    var elTGallery = document.querySelector('.container-gallery');

    var gallery = memeImgs.map(function (img) {
        return `<div class="containter-img flex-wrap">  <img class = "img-meme" src = ${img.url} " onclick="onImdClicked(${img.id})"/>              
                </div>`
    })
    elTGallery.innerHTML = gallery.join('');

}  

function onImdClicked(id){

    gMemo.selectedImgId = id
    startCreateCanvas() 

}
function returnToGallery(){
    let canvas = document.querySelector('.canvas-container')
    let gallery = document.querySelector('.container-gallery');
    canvas.style.display = 'none'
    gallery.style.display = 'flex'
}
