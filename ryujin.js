var messages = null;


var askButton = document.getElementById("ask-button");

askButton.onclick = function () {
	console.log("The button was clicked.");

	

	var r = Math.floor(Math.random() * messages.length);
	var message = messages[r];
	var phrase = message["phrase"]
	var color = message["color"]
	console.log(r,phrase, color); 

	var userQuestion = document.getElementById("question");
	var question = userQuestion.value;
	userQuestion.value = "";

	var newListItem = document.createElement("li");
	newListItem.innerHTML = question + "<br>" + phrase + "<br>";
	newListItem.style.color = color

	var list = document.getElementById("list");
	list.appendChild(newListItem);
};


var request = new XMLHttpRequest();
request.onreadystatechange = function () {
	if (request.readyState == XMLHttpRequest.DONE) {
		if (request.status == 200) {
			console.log("Success!");
			messages = JSON.parse(request.responseText)
		} else {
				console.error("Error.");
		}
	}
};

request.open("GET","https://api.myjson.com/bins/18w23f");
request.send();