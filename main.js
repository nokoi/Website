const typed = new Typed("#typed", {
	stringsElement: "#typed-strings",
	typeSpeed: 40,
	showCursor: false,
	startDelay: 2000,
	backSpeed: 20,
	smartBackspace: true
});

setTimeout(() => {
	$('#logo').fadeOut(200)
	$('#content').fadeIn(1)
}, 2000)

$(() => {
  $(".right").hide(0).delay(7125+2000).fadeIn(400);
})