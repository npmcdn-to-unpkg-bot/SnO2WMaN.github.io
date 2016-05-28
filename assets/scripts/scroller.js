$(function() {
	function init() {
		var $sect = $("section");
		var $inners = $sect.children("*");
		var length = $inners.length;
		if (1 < length) {
			$inners.each(function(i, inner) {
				var $inner = $(inner);
				if (i == 0) {
					$inner.append(scroller(false));
				} else if (i == length - 1) {
					$inner.append(scroller(true));
				} else {
					$inner.append(scroller(false), scroller(true));
				}
			});
		}

		$sect.on("mousewheel", function(eo, delta, deltaX, deltaY) {
			if (0 < deltaY) {
				$(".scroller.up").trigger("click");
			} else if (0 > deltaY) {
				$(".scroller.down").trigger("click");
			}
		});

		function scroller(direct) {
			var string = direct ? "up" : "down"
			var $span = $("<span>", {
				"class" : "fa fa-angle-" + string + " scroller " + string,
				"aria-hidden" : true,
				"title" : "Scroll " + string
			});
			return $span;
		}
	}
	function scrollSet() {
		var $sect = $("section");
		var transition = {
			duration : 2000,
			easing : "easeInOutQuint",
		};
		$(".scroller.up").on("click", function() {
			if ($sect.css("top") < "0px") {
				if (!$sect.hasClass("velocity-animating")) {
					$sect.velocity({
						"top" : "+=100%"
					}, transition);
				}
			}
		});
		$(".scroller.down").on(
				"click",
				function() {
					var top = $sect.css("top");
					var max = (-$sect.children("*").length + 1)
							* $sect.height() + "px";
					if (top > max) {
						if (!$sect.hasClass("velocity-animating")) {
							$sect.velocity({
								"top" : "-=100%"
							}, transition);
						}
					}
				});
	}
	$(window).on("load", function() {
		init();
		scrollSet();
	});
	$(window).on("resize", function() {
		scrollSet();
	});
});