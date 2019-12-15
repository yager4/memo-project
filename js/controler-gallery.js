function init() {
    renderGallery()
}

function renderGallery() {

    var memeImgs = getImgeMeme()
    
    var elTGallery = document.querySelector('.container-gallery');

    var gallery = memeImgs.map(function (img) {
        return `<div class="containter-img flex-wrap">  <img class = "img-meme" src = "${img.url}" onclick="onImdClicked(this,${img.id})"/>              
                </div>`
    })
    elTGallery.innerHTML = gallery.join('');

}  

function onImdClicked(elImg,id){

    gMemo.selectedImgId = id
    startCreateCanvas()
    drawImg(elImg)


}
function returnToGallery(){
    let canvas = document.querySelector('.canvas-container')
    let gallery = document.querySelector('.container-gallery');
    canvas.style.display = 'none'
    gallery.style.display = 'flex'
    removeModel()
    init()
}
