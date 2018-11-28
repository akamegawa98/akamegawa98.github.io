
$(document).ready(function() {

	$("#headline").hide().fadeIn(1500);
	$("#icon").hide().delay().fadeIn(2000);
	$("#resume-content").hide().delay().fadeIn(2500);

	$(".work-button").click(function(){
    	$(".work-content").toggle("slow");
	});

	$(".skill-button").click(function(){
    	$(".skill-content").toggle("slow");
	});

	$(".education-button").click(function(){
    	$(".education-content").toggle("slow");
	});

});


$(window).on("scroll", function() {

	if($(window).scrollTop()) {
		$('#nav-bar').addClass('purple');
	}
	else {
		$('#nav-bar').removeClass('purple');
	}
});

