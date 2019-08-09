window.onload = function() {
	window.addEventListener('scroll', function(event) {
		deleteFirstWord(event);
	}, false);
};

function deleteFirstWord (event) {
	console.log("test");
	zombie = document.getElementById("zombie");
	zombie.innerText = zombie.innerText.replace(/^\w+\W*/, "");
};

