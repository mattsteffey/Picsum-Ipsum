var output = document.getElementById('wordOutput');
var btn = document.getElementById('btn');
//var mongo = require('mongodb').MongoClient; //cant use this on front end


// GOOGLEDATA
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
//



// Button to fetch API Data from Datamuse
btn.addEventListener('click', function() {   //Adds event listener to the fetch button
	var x = document.getElementById('input'); // Grabs the value of the input box
	var ourRequest = new XMLHttpRequest();  // XML Request
	ourRequest.open('GET', 'https://api.datamuse.com/words?rel_trg=' + x.value); // Adds the input value to the api endpoint
  wordInput = x.value;  
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText); 
		renderHTML(ourData);

	};
	ourRequest.send();
});




// FETCH BUTTON
function renderHTML(data) {
  var htmlString = "";                                  //blank variable string calld htmlString      
      for (i = 1; i < data.length; i++) {
         if (i%(Math.floor((Math.random() * 12) + 7)) == 0 && i>1) {     //runs a for loop that grabs a random number of words
            htmlString += data[i].word + ". ";}    //adds a period at the end of that random word set              
         else {htmlString += data[i].word + " ";}
       }
      x = htmlString.split("."); //splits the strings based around ends of sentences
      for (i = 1; i < x.length; i++) {
      output.insertAdjacentHTML('beforeend', x[i].charAt(1).toUpperCase() + x[i].substr(2)+ ". "); //capitalizes the words after the period
      }
  output.value = output.value.slice(0, -3) + '.'; 
  
}



 // CLEAR BUTTON
clear.addEventListener('click', function() {
  x = document.getElementById('wordOutput');
  x.value = "clearing...";
});
 
 // COPY BUTTON
copy.addEventListener('click', function() {
  var x = document.getElementById("wordOutput");
  x.select();
  document.execCommand("Copy");

});

//Changes title text 
btn.addEventListener('click', function() {
document.getElementById("wordOutput").style.backgroundImage = "url(' ')"; //removes qr code
var x = document.getElementById('input'); 
var y = document.getElementById('picsum');
setTimeout(function(){y.innerHTML = "puppies";}, 100); //hardcoded text swap words
setTimeout(function(){y.innerHTML = "awesome";}, 200);
setTimeout(function(){y.innerHTML = "grandma";}, 300);
setTimeout(function(){y.innerHTML = "computer";}, 400);
setTimeout(function(){y.innerHTML = "shoes";}, 500);
setTimeout(function(){y.innerHTML = "vacation";}, 600);
setTimeout(function(){y.innerHTML = "jungle";}, 700);
setTimeout(function(){y.innerHTML = "photography";}, 800);
setTimeout(function(){y.innerHTML = "groceries";}, 900);
setTimeout(function(){y.innerHTML = x.value;}, 1000); //after all the hardcoded words, it makes the title text equal to your searched word
});



if (screen.width >= 768) {
document.getElementById("i").style.fontWeight = "lighter";
setInterval(blink, 1000);
  function blink(){
    document.getElementById("i").style.color = "#ededed";
    setTimeout(function(){document.getElementById("i").style.color = "black";}, 500);
}
}



//generate a random number between 5 & 10
// data[i].charAt(0).toUpperCase() + data[i].substr(1);





// FETCH BUTTON
// function renderHTML(data) {
//   var htmlString = "";
//   for (i = 0; i < data.length; i++) { 
//     htmlString += data[i].word + " ";
//   }
//   ipsumOutput = htmlString;
//   output.insertAdjacentHTML('beforeend', htmlString);
// }


