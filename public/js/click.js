window.onload = function() {
	var btn = document.getElementById("button");
	console.log(btn);
	var list = document.getElementById("list");
	btn.addEventListener("click", function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		list = document.getElementById("list");
		return list.classList.add('list-is-open');
	});

	document.addEventListener("click", function(e) {
		list.classList.remove('list-is-open');
	})
};