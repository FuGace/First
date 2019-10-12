var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");

    if (n >slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i = 0; i <slides.length ; i++){
        slides[i].style.display= "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active"
}


// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("goods_container_inside");
//     var dots = document.getElementsByClassName("designers-featured-latest");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "flex";
//     dots[slideIndex - 1].className += " active";
// }

$(function(){
	
	$('.hamburger_icon').on('click', function(){
		
		$('.menu_clearfix').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
		
	});
	
 });
	
});