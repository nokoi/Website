var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  strings: ["NOKOI is a game studio.", "NOKOI is a collective."],
	typeSpeed: 40,
	backSpeed: 20,
  smartBackspace: true
});

$(function() {
  $(".right").hide(0).delay(7125).fadeIn(400);
  // $(".logo").hide(0).delay(7500).fadeIn(400);
});
