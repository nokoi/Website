const typed = new Typed("#typed", {
	stringsElement: "#typed-strings",
	typeSpeed: 40,
	showCursor: false,
	startDelay: 2200,
	backSpeed: 20,
	smartBackspace: true
});

$(() => {
	$('#logo').delay(2000).fadeOut(200);
	$('#content').hide(0).delay(2000).show(0);
	$(".right").hide(0).delay(7125+2200+250).fadeIn(400);
});
