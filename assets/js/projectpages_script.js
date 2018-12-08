
$(document).ready(function() {

	$("#headline").hide().fadeIn(1500);
	 $("#about-section").hide().delay(1000 ).fadeIn(1500);
});


$(window).on("scroll", function() {

	if($(window).scrollTop()) {
		$('#nav-bar').addClass('purple');
	}
	else {
		$('#nav-bar').removeClass('purple');
	}
});

