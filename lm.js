window.onload = function() {
	let zombie = document.getElementById("zombie");
	zombie.addEventListener("click", function(event) {
		changeColor(event, "Green");
	});

	window.addEventListener('scroll', function(event) {
		deleteFirstWord(event);
	});

	let hipster = document.getElementById("hipster");
	hipster.addEventListener("click", function(event) {
		changeColor(event, "Magenta");
	});

	let cat = document.getElementById("cat");
	cat.addEventListener("click", function(event) {
		rot13(event);
	})
};

function deleteFirstWord(event) {
	let zombie = document.getElementById("zombie");
	zombie.innerText = zombie.innerText.replace(/^\w+\W*/, "");
};

function changeColor(event, color) {
	event.target.style.color = color;
};

function rot13(event) {
	event.target.innerText = str_rot13.event.target.innerText

}
