var output = document.getElementById('wordOutput');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://api.datamuse.com/words?rel_trg=cow'); 
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
});

function renderHTML(data) {
	var htmlString = "";
	for (i = 0; i < data.length; i++) { 
		htmlString += "<p>" + data[i].word + "</p>";
	};

output.insertAdjacentHTML('beforeend', htmlString);

}

