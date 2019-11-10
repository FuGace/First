'use strikt'

let slideIndexCrazy = 1;
showSlidesCrazy(slideIndexCrazy);

function plusSlidesCrazy(n) {
    showSlidesCrazy(slideIndexCrazy += n);
}

function currentSlideCrazy(n) {
    showSlidesCrazy(slideIndexCrazy = n);
}

function showSlidesCrazy(n) {
    let i;
    let slidesCrazy = document.getElementsByClassName("container__inner__slider_crazy");
    let dotsCrazy = document.getElementsByClassName("container__dot");

    if (n >slidesCrazy.length) {
        slideIndexCrazy = 1
    }
    if (n < 1){
        slideIndexCrazy = slidesCrazy.length
    }
    for (i = 0; i <slidesCrazy.length ; i++){
        slidesCrazy[i].style.display= "none"
    }
    for (i = 0; i < dotsCrazy.length; i++){
        dotsCrazy[i].className= dotsCrazy[i].className.replace("active","")
    }
    slidesCrazy[slideIndexCrazy-1].style.display = "block";
    dotsCrazy[slideIndexCrazy-1].className+= " active"
}


let slideIndexGoods = 1;
showSlidesGoods(slideIndexGoods);

function plusSlidesGoods(n) {
    showSlidesGoods(slideIndexGoods += n);
}

function currentSlideGoods(n) {
    showSlidesGoods(slideIndexGoods = n);
}

function showSlidesGoods(n) {
    let i;
    let slidesGoods = document.getElementsByClassName("goods__container__inside_slider");
    let tabGoods = document.getElementsByClassName("container__inner__menu-designers__links-text");

    if (n > slidesGoods.length) {
        slideIndexGoods = 1
    }
    if (n < 1){
        slideIndexGoods = slidesGoods.length
    }
    for (i = 0; i < slidesGoods.length ; i++){
        slidesGoods[i].style.display = "none"
    }
    for (i = 0; i < tabGoods.length; i++){
        tabGoods[i].className = tabGoods[i].className.replace("active_goods","")
    }
    slidesGoods[slideIndexGoods-1].style.display = "flex";
    tabGoods[slideIndexGoods-1].className+= " active_goods"
}
