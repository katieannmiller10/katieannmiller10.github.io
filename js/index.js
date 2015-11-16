$(document).ready(function(){
	console.log("linked correctly");

// the problem: I wanted to use a carousel but didn't 
// want to make it myself because who does?
// the soluction: I used Ken Wheeler's slick carousel and just one 
// line of code here to make the magic happen
	$('.my-slick-slider').slick();
	
	function Download(){
		window.open('Katie_Job_Resume.pdf');
	}

// the problem: I needed to expand a full page menu on the click of my hamburger icon
// the solution: I used the slideToggle() jquery method on click of the button

	$("#menu-btn").click(function(){
	  $("#menu").slideToggle();
	});

// the problem: I needed to auto-scroll the user to 
// the section of the page from the menu item that was clicked
// the solution: I got the stack overflow solution to animate the page to a section's id
// and implimented it here for the element that was selected usuing event.target.textContent.toLowerCase()

	$("#menu").click(function(){
		var elementSelected = event.target.textContent.toLowerCase();
		$("#menu").slideToggle();
		$('html, body').animate({
		    scrollTop: $("." + elementSelected).offset().top
		}, 1000);
	});

// the problem: I needed to auto-scroll the user to 
// the first section, the profile section, when they click the arrow
// the solution: same as above, ony this one was just animating to the
// profile section and then showing the menu button after the animation was complete
// using the setTimeout function with the same delay duration as the animation

	$(".start-arrow").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".profile").offset().top
	    }, 1000);
	    setTimeout(function(){
	    	$("#menu-btn").show();
	    }, 1000);
	});

// the problem: I needed to keep track of where the user was on the page
// the solution: I got the jQuery scroll function and used the $.scrollTop() method to
// give me a numeric value so I could then conditionally show and hide my menu

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		console.log(scroll);
		if (scroll > 620) {
    		$("#menu-btn").show();
    	} else {
    		$("#menu-btn").hide();
    	}
    });

});


	
