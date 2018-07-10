var typed
setInterval(() => {
	$('#content').fadeIn(1)
	$('#logo').fadeOut(200)
	typed = new Typed("#typed", {
		stringsElement: "#typed-strings",
		typeSpeed: 40,
		backSpeed: 20,
		smartBackspace: true
	});
}, 2000)

$(function() {
  $(".right").hide(0).delay(7125+200).fadeIn(400);
>>>>>>> origin/atte_rebuild
  // $(".logo").hide(0).delay(7500).fadeIn(400);
});
