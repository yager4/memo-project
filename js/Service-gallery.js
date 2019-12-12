var gImgsMemes = [
    { id: 1, url: '../css-file/003.jpg', keywords: ['Furious'] },
    { id: 2, url: '../css-file/004.jpg', keywords: ['Furious'] },
    { id: 3, url: '../css-file/005.jpg', keywords: ['Furious'] },
    { id: 4, url: '../css-file/5.jpg', keywords: ['Furious'] },
    { id: 5, url: '../css-file/006.jpg', keywords: ['Furious'] },
    { id: 6, url: '../css-file/8.jpg', keywords: ['Furious'] },
    { id: 7, url: '../css-file/9.jpg', keywords: ['Furious'] },
    { id: 8, url: '../css-file/12.jpg', keywords: ['Furious'] },
    { id: 9, url: '../css-file/Ancient-Aliens.jpg', keywords: ['Furious'] },
    { id: 10, url: '../css-file/img5.jpg', keywords: ['Furious'] },
    { id: 11, url: '../css-file/img11.jpg', keywords: ['Furious'] },
    { id: 12, url: '../css-file/img12.jpg', keywords: ['Furious'] },
    { id: 13, url: '../css-file/leo.jpg', keywords: ['Furious'] },
    { id: 14, url: '../css-file/meme1.jpg', keywords: ['Furious'] },
    { id: 15, url: '../css-file/One-Does-Not-Simply.jpg', keywords: ['Furious'] },
    { id: 16, url: '../css-file/patrick.jpg', keywords: ['Furious'] },
    { id: 17, url: '../css-file/putin.jpg', keywords: ['Furious'] },
    { id: 18, url: '../css-file/X-Everywhere.jpg', keywords: ['Furious'] }

];


function getImgeMeme() {
    return gImgsMemes
}
function getImgUrl() {
    const img = gImgsMemes.find(imgMeme =>
        imgMeme.id === gMemo.selectedImgId

    )
    return img.url
}


        