const slidePrev = document.querySelector('.slideshow__prev');
const slideNext = document.querySelector('.slideshow__next');
const images    = document.querySelectorAll('.slideshow__image img');
// console.log(images.length)

images.forEach((element, index) => {
    if(index != 0) element.style.display = 'none';
})

let pos = 0;
slideNext.onclick = () => {
    let imgNow  = images[pos];
    let imgNext = images[pos + 1];

    if (pos == (images.length - 1)) {
        imgNext = images[0];
        pos = 0;
    } else {
        pos++;
    }
    
    imgNow.style.display = 'none';
    imgNext.style.display = 'inline';
}