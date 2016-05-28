$(function() {
	function init() {
		var $header = $("<nav>", {
			id : "gnav"
		});
		var $menu = $("<ul>");

		$menu.append(node("Home", "index"));
		$menu.append(node("Games", "games"));
		$menu.append(node("Scripts", "scripts"));
		$menu.append(node("Designs", "designs"));
		$menu.append(node("Archives", "archives"));
		$menu.append(node("Links", "links"));
		$menu.append(node("Profile", "profile"));
		$header.append($menu);
		$("body").append($header);

		function node(title, href) {
			href = "./" + href + ".html";
			var $node = $("<li>");
			var $title = $("<h1>", {
				text : title
			});
			var $addr = $("<a>", {
				href : href
			});
			$node.append($title, $addr);
			return $node;
		}
	}
	init();
	$(window).resize(function() {

	});
});