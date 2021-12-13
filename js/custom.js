jQuery( function( $ ) {
	$(".pagelayer-header .pagelayer-col-holder .pagelayer-heading .pagelayer-heading-holder h2").text("Welcome to");
	$(".pagelayer-heading-holder h1").text("THE MELTDOWN");
	$(".pagelayer-wp-title-section a img").attr("src", "https://themeltdown.samcarne.com/wp-content/uploads/2021/12/cropped-mae-mu-Rz5o0osnN6Q-unsplash-scaled-1.jpg");
	$(".pagelayer-address .pagelayer-address-holder").html("<span class='pagelayer-address-icon'><i class='fas fa-map-marker-alt'></i></span><span class='pagelayer-address'>309 E Grand River Ave, East Lansing, MI 48823</span>");
	
	$(".pagelayer-email .pagelayer-email-holder").html("<span class='pagelayer-email-icon'><i class='fas fa-envelope'></i></span><span class='pagelayer-email'>person@themeltdown.com</span>");
	
	$(".pagelayer-phone .pagelayer-phone-holder").html("<span class='pagelayer-phone-icon'><i class='fas fa-phone'></i></span><span class='pagelayer-phone'>(517) 555-1243</span>");
	
	$("footer .pagelayer-col-holder .pagelayer-iconbox").remove();
	
	$("footer .p-7is9751.pagelayer-heading .pagelayer-heading-holder").html("Made with love by <a href='https://samcarne.com/'>Sam Carne</a>");
	
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	$(".p-u1c1489 .pagelayer-copyright").html("Copyright &#169; Frost Giant " + year + ". All rights reserved.");
});