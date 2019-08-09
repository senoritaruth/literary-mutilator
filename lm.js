window.onload = function() {
	let zombie = document.getElementById("zombie");
	zombie.addEventListener('click', function(event) {
		deleteElement(event);
	});
};

function deleteElement (event) {
	console.log(event.target.innerText);
	event.target.innerText = event.target.innerText.replace(/^\w+\W*/, "");
//	event.target.innerText.replace(/^\w+\W*/, "");


};

