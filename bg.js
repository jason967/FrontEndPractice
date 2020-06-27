const body = document.querySelector("body");
const IMG_NUMBER = 7;

function genRandom()
{
    const number = Math.floor(Math.random()*IMG_NUMBER );
    return number;
}

function paintImg(imgNumber)
{
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

}
function init()
{
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();