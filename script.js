$(function(){
	'use strict';
	
	
	var okno = $(window);
	var menu = $('.navbar-default');
	
	if(okno.scrollTop() >=100 ) {
			menu.addClass('scroll');
//			console.log('scroll');
	}
	
	okno.scroll(function() {
		
		if(okno.scrollTop() >=100 ) {
			menu.addClass('scroll');
//			console.log('scrollTop');
			
		}
		else {
			menu.removeClass('scroll');
		}
		
		//console.log('Scroll');
		//addClass('scroll');
	});
		
	
	/* Smooth scroll */
	
	$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
	var menuHeight = $('#main-nav').height();	
		
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - menuHeight
    }, 500);
});

	
	/*$('a').click(function(){
		okno.animate({scrollTop: $('#about')},500);
		
		console.log('click');
	});*/
	$(document).on('click', 'button[name^="#"]', function(event){
    event.preventDefault();
	var submitHeight = $('#submit-header').height();	
		
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'name') ).offset().top - submitHeight
    }, 500);
});
	
});		

/* Formularz - pola wymagane - START */



//Stworzenie funkcji sprawdzającej czy pole zostało wypełnione i nadanie warningu jeśli jest puste:
function warning(event) {
	event.preventDefault();
	
	//Określenie elementu na którym pokazuje się warning
	var textInputs = document.querySelectorAll('input[type=email]');
	
	//Pętla tworząca warning:
	for (var i=0; i<textInputs.length; i++) {
		//warunek warningu - '' puste pole:
		if(textInputs[i].value == '') {
			if( textInputs[i].style.border != "4px solid red") {	
			
			//Nadanie wyglądu warningowi:
			textInputs[i].style.border = "4px solid red";
			textInputs[i].style.padding = "11px";
			textInputs[i].placeholder = "Podanie adresu e-mail jest wymagane!";	
		}
			
			//else if dla odznaczanie warninga kiedy pole się wypełni:
		} else if (textInputs[i].value != '' && textInputs[i].style.border == "4px solid red") { 
			textInputs[i].style.border = "none";
			textInputs[i].style.padding = "15px";
		}
	}
}

//Wywołanie funkcji warning na elemencie (na przycisku wysyłania zapytania): 
document.getElementById('send').onclick = warning;

/* Formularz - pola wymagane - END */