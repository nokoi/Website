var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  strings: ["NOKOI is a game studio.", "NOKOI is a collective."],
  startDelay: 1000,
  typeSpeed: 60,
	backSpeed: 60,
  smartBackspace: true
});

$(function() {
  $(".right").hide(0).delay(12000).fadeIn(400);
  // $(".logo").hide(0).delay(7500).fadeIn(400);
});
