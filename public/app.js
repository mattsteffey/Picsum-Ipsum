var output = document.getElementById('wordOutput');
var btn = document.getElementById('btn');
//var mongo = require('mongodb').MongoClient; //cant use this on front end
var tokenId = "";
var wordInput = "";
var ipsumOutput = "";

///////////////FACEBOOK DATA///////////////FACEBOOK DATA///////////////FACEBOOK DATA///////////////FACEBOOK DATA
window.fbAsyncInit = function() {
    FB.init({
      appId            : '193516051387162',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    	});
     
     FB.getLoginStatus(function(response) {
       if (response.status === 'connected') {
            FB.api('/me', function(response) {
    		tokenId = response.id;
			});
		}
	});
};

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

///////////////FACEBOOK DATA///////////////FACEBOOK DATA///////////////FACEBOOK DATA///////////////FACEBOOK DATA


// Button to fetch API Data from Datamuse
btn.addEventListener('click', function() {
	var x = document.getElementById('input');
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://api.datamuse.com/words?rel_trg=' + x.value);
  wordInput = x.value; 
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);

	};
	ourRequest.send();
});

// FETCH BUTTON
function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) { 
    htmlString += data[i].word + " ";
  }
  ipsumOutput = htmlString;
  output.insertAdjacentHTML('beforeend', htmlString);
}
 // CLEAR BUTTON
clear.addEventListener('click', function() {
  x = document.getElementById('wordOutput');
  x.value = "";
});
 
 // COPY BUTTON
copy.addEventListener('click', function() {
  var x = document.getElementById("wordOutput");
  x.select();
  document.execCommand("Copy");

});

btn.addEventListener('click', function() {
  var x = document.getElementById("wordInput");
  console.log(x.value);
});






