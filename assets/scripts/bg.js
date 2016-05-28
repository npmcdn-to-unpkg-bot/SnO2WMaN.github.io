$(function() {
	function init() {
		var $bg = $("<div>", {
			id : "bg",
		});
		$bg.append();
		$("body").children("*").css("z-index", $bg.css("z-index") + 1);
		$("body").append($bg);
		$bg.particleground({
			minSpeedX : 0.1,
			maxSpeedX : 0.25,
			minSpeedY : 0.1,
			maxSpeedY : 0.25,
			particleRadius : 5,
			dotColor : "rgb(255,255,255)",
			lineColor : "rgb(255,255,255)",
			density : 8000,
			parallax : false,
		});
		setTimeout(function() {
			$bg.addClass("animated");
			clearTimeout(this);
		}, 800);
	}
	$(window).load(init());
});