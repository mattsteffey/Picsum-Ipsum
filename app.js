var output = document.getElementById('wordOutput');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	var x = document.getElementById('input');
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://api.datamuse.com/words?rel_trg=' + x.value); 
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
});

function renderHTML(data) {
	var htmlString = "";
	for (i = 0; i < data.length; i++) { 
		htmlString += data[i].word + " ";
	}

output.insertAdjacentHTML('beforeend', htmlString);

}

