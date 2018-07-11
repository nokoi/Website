const typed = new Typed("#typed", {
	stringsElement: "#typed-strings",
	typeSpeed: 40,
	showCursor: false,
	startDelay: 3000,
	backSpeed: 20,
	smartBackspace: true
});

$(() => {
  $("#logo").hide().delay(500).fadeIn(200);
	$("#logo").delay(2000).fadeOut(200);
	$("#content").hide(0).delay(2500).show(0);
	$(".right").hide(0).delay(7125+2200+250+500).fadeIn(400);
});
