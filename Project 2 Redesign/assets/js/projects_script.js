$(document).ready(function()  {


	$(".filter-item").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		let condition =! buttonActive;

		if (condition) {
			$(this).addClass("active");
			$(this).removeClass("inactive");

			if (buttonName == "VIRTUAL REALITY") {
				$(".vr").show();
			}
			else if (buttonName == "PRODUCT DESIGN") {
				$(".products").show();
			}
			else {
				$(".graphics").show();
			}

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");

			if (buttonName == "VIRTUAL REALITY") {
				$(".vr").hide();
			}
			else if (buttonName == "PRODUCT DESIGN") {
				$(".products").hide();
			}
			else {
				$(".graphics").hide();
			}
		} 
	})
})

$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$('#nav-bar').addClass('purple');
	}
	else {
		$('#nav-bar').removeClass('purple');
	}
});