const typed = new Typed("#typed", {
	stringsElement: "#typed-strings",
	typeSpeed: 40,
	showCursor: false,
	startDelay: 2200,
	backSpeed: 20,
	smartBackspace: true
});

setTimeout(() => {
	$('#logo').fadeOut(200)
}, 2000)

setTimeout(() => {
	$('#content').fadeIn(200)
}, 2200)

$(() => {
  $(".right").hide(0).delay(7125+2000).fadeIn(400);
})