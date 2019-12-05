'use strikt'

let slideIndexCrazy = 1;

showSlidesCrazy(slideIndexCrazy);

function plusSlidesCrazy(n) {
    showSlidesCrazy(slideIndexCrazy += n);
};

function currentSlideCrazy(n) {
    showSlidesCrazy(slideIndexCrazy = n);
};

function showSlidesCrazy(n) {
    let i;
    let slidesCrazy = document.querySelectorAll('.container__inner__slider_crazy');
    let dotsCrazy = document.querySelectorAll('.container__dot');

    if (n > slidesCrazy.length) {
        slideIndexCrazy = 1;
    };
    if (n < 1){
        slideIndexCrazy = slidesCrazy.length
    };
    for (i = 0; i <slidesCrazy.length ; i++) {
        slidesCrazy[i].style.display= "none"
    };
    for (i = 0; i < dotsCrazy.length; i++) {
        dotsCrazy[i].className= dotsCrazy[i].className.replace("active","")
    };
    slidesCrazy[slideIndexCrazy-1].style.display = "block";
    dotsCrazy[slideIndexCrazy-1].className+= " active";
};

let slideIndexGoods = 1;
showSlidesGoods(slideIndexGoods);

function plusSlidesGoods(n) {
    showSlidesGoods(slideIndexGoods += n);
};

function currentSlideGoods(n) {
    showSlidesGoods(slideIndexGoods = n);
};

function showSlidesGoods(n) {
    let i;
    let slidesGoods = document.querySelectorAll('.goods__container__inside_slider');
    let tabGoods = document.querySelectorAll('.container__inner__menu-designers__links-text');

    if (n > slidesGoods.length) {
        slideIndexGoods = 1;
    }
    if (n < 1){
        slideIndexGoods = slidesGoods.length;
    }
    for (i = 0; i < slidesGoods.length ; i++) {
        slidesGoods[i].style.display = "none";
    };
    for (i = 0; i < tabGoods.length; i++) {
        tabGoods[i].className = tabGoods[i].className.replace("active_goods","")
    }
    slidesGoods[slideIndexGoods-1].style.display = "flex";
    tabGoods[slideIndexGoods-1].className+= " active_goods";
};

let menuIcon = document.querySelector('.menu-optionally__icon');
let menuClearfix = document.querySelector('.menu-optionally__clearfix');

menuIcon.classList.remove('menu-optionally__icon-active');
menuIcon.classList.remove('menu-optionally__clearfix-active');

document.querySelector('.menu-optionally__icon-wrapper').onclick = function() {    
    menuIcon.classList.toggle('menu-optionally__icon-active');
    menuClearfix.classList.toggle('menu-optionally__clearfix-active');

    // document.addEventListener('keydown', function (evt) {
    //     if (evt.keyCode === 27) {
    //         menuIcon.classList.remove('menu-optionally__icon-active');
    //         document.querySelector('.menu-optionally__clearfix').classList.remove('menu-optionally__clearfix-active');            
    //     }
    //   });  
};

let form = document.querySelector('.container__inner__stay__email');
let email = document.querySelector('.container__inner__stay-updated__email_text');

form.onsubmit = function(evt) {  
    evt.preventDefault();
    alert('Адрес ' + email.value + ' добавлен в список получателей рассылки.');
};

let assortmentData = [
    {
      inSale: false,      
    },
    {
      inSale: true,
    },
    {
      inSale: false,
    },
    {
      inSale: true,
    },
    {
      inSale: false,      
    },
    {
      inSale: false,
    },
    {
      inSale: true,
    },
    {
      inSale: false,
    },
    {
      inSale: false,      
    },
    {
      inSale: true,
    },
    {
      inSale: false,
    },
    {
      inSale: true,
    },
    {
      inSale: false,      
    },
    {
      inSale: true,
    },
    {
      inSale: false,
    },
    {
      inSale: true,
    },
    {
      inSale: false,      
    },
    {
      inSale: true,
    },
    {
      inSale: true,
    },
    {
      inSale: false,
    },     
  ];

let updateCardsSale = function (products) {
    let elements = document.querySelectorAll('.goods');
    for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let product = products[i];
        
    let inSale;
        
    if(product.inSale) {
        inSale = 'goods--sale';
    }
        
    element.classList.add(inSale);
        
    
    }
};
    
 updateCardsSale(assortmentData);  
    