
$(document).ready(function() {

	$("#headline").hide().fadeIn(1500);
	 $("img").hide().delay(1500 ).fadeIn(2000);

});


$(window).on("scroll", function() {

	if($(window).scrollTop()) {
		$('#nav-bar').addClass('purple');
	}
	else {
		$('#nav-bar').removeClass('purple');
	}
});

