var output = document.getElementById('wordOutput');
var btn = document.getElementById('btn');

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
    		console.log(JSON.stringify(response));
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

console.log('front end!');