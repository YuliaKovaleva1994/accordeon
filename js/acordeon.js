$(document).ready(function(){

	accordion();
	
	$(".active").next(".content").slideDown();  // со старта первый активный контент развёрнут

});


function accordion(){
	
$(".header").on("click", function(){	// на клик по заголовку
	
	if ($(this).hasClass("active")) {   // если выбраный заголовок имеет клас "active"
		$(this).removeClass("active");	// убираем клас "active"
		$(".header").next(".content").slideUp();	// сворачиваем содержимое
	} 
	else {
		$(".header").removeClass("active");	// если выбраный заголовок не имеет клас "active"
		$(this).addClass("active");	// добавляем ему клас "active"
		$(".header").next(".content").slideUp();	// сворачиваем все остальные блоки
		$(this).next(".content").slideDown();	// выбранному заголовку раскрываем содержимое
	}

}); 













	/*
	var data = $(".accordion").attr("data-accordion");
	
	$(".header").on("click", function(){
		if (data === "close") {
			$(".content").slideUp();
			if ($(this).hasClass("active")) {
				$(this).toggleClass("active");
			} 
			else {
				$(".header").removeClass("active");
				$(this).toggleClass("active");
			}
		}
		else {
			$(this).toggleClass("active");

		}
		$(this).next(".content").not(":animated").slideToggle();
	});  */

}



/*

var accordion = function () {
	var data = $(".accordion").attr("data-accordion");
	

	$(".accordion-header").on("click", function(){
		if (data === "close") {
			$(".accordion-body").slideUp();
			if ($(this).hasClass("active")) {
				$(this).toggleClass("active");
			} 
			else {
				$(".accordion-header").removeClass("active");
				$(this).toggleClass("active");
			}
		}
		else {
			$(this).toggleClass("active");

		}
		$(this).next(".accordion-body").not(":animated").slideToggle();
	});
}




*/


/*$(document).ready(function(){
	accordion();

});


function accordion(){
	
$(".header").on("click", function(){

var up ="accordeon_img/accordion_UP.png";
var down ="accordeon_img/accordion_DOWN.png";
	
	

	if ($(this).hasClass("active")) {
		$(".picture").css('background', 'url('+ up +') no-repeat center center');
		$(".header").next(".content").slideUp();
		$(".header").removeClass(".active");
	} 
	else {
		$(this).addClass(".active");
		$(".picture").css('background', 'url('+ down +') no-repeat center center');
		$(".header").next(".content").slideUp();
		$(this).next(".content").slideDown();
		//$(this).addClass(".active");
	}




}); */