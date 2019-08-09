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
	});

	let cat = document.getElementById("cat");
	cat.addEventListener("click", function(event) {
		changeFont(event, "Comic Sans MS");
	});
};

function deleteFirstWord(event) {
	let zombie = document.getElementById("zombie");
	zombie.innerText = zombie.innerText.replace(/^\w+\W*/, "");
};

function changeColor(event, color) {
	event.target.style.color = color;
};

function changeFont(event, fontFamily) {
	event.target.style.fontFamily = fontFamily;
}

function rot13(event) {
	var regex = new RegExp("[a-z]", "i"); //i=case insensitive, regex = regular expression
	var min = 'a'.charCodeAt(0);
	var max = 'z'.charCodeAt(0);
	var factor = 13;
	var result = ""; //tied to the result += later (empty string)
	str = event.target.innerText.toLowerCase();

	for (var i=0; i<str.length; i++) { //i=the counter here; c-style for loop
		char = "";
		if (regex.test(str[i])) {
			char = String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min);
		}
		else {
			char = str[i];
		}
		result += char;
	}

	event.target.innerText = result;
};
