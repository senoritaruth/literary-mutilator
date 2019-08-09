window.onload = function() {
	let zombie = document.getElementById("zombie");
	zombie.addEventListener('scroll', function(event) {
		deleteElement(event);
	});
};

function deleteElement (event) {
	event.target.innerText.replace(/^\w+\W*/, "");
};




