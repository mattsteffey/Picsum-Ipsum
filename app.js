var output = document.getElementById('output');
var btn = document.getElementById('btn');
btn.addEventListener('click', function() {

var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.datamuse.com/words?rel_trg=cow');
myRequest.onload = function() {
	var myData = JSON.parse(myRequest.responseText);
	renderIpsum(myData);
};
myRequest.send();
});

function renderIpsum(data) {
output.innerHTML += 'testing';

}

