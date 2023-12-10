const slides = document.querySelectorAll(".list");
//console.log(slides);
let count = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
let flag = false;
const goPrev = () => {
    if (count != 0) {
        count--;
        slidelist()
    }
}

const goNext = () => {
    if (count != slides.length - 1) {
        count++;
        slidelist()
    }


}
const slidelist = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
