var advice = [
	"A good relationship is like a game of chess; the Queen should always protect her King.",
	"Time can heal a broken heart, but time can also break a waiting heart.",
	"Don’t fall in love with someone who says the right things. Fall in in love with someone who does the right things."
]

/*
 Runs when button is selected
*/
var submitClicked = function() {
	var name1 = $("#name1").val();
	var name2 = $("#name2").val();
	var results = $("#results");
	var num;
	var text = '';

	// Clear the input boxes 
	$("#name1").val('');
	$("#name2").val('');

	// Hide previous results
	results.hide();

	// Prepare the new result 
	if (!name1 || !name2) {
		text = "<h2>Please enter two names.</h2>";
	} else if (name1 == name2) {
		text = "<h2>Self love is the greatest of all, but this quiz is for two people. Please enter two different names.</h2>"
	} else {

		if (name1.length == name2.length) {
			num = Math.floor(Math.random() * (100-90)) + 90; // greatly increase if names same length
		} else if (name1[0] == name2[0]) {
			num = Math.floor(Math.random() * (100-75)) + 75; // moderately increase if names start with same letter
		} else if (name1[name1.length-1] == name2[name1.length-1]) {
			num = Math.floor(Math.random() * (100-50)) + 50; // slightly increase if names end with same letter
		} else {
			num = Math.floor(Math.random() * (100)) // totally random 
		}

		var adviceNum = Math.floor(Math.random() * advice.length); // Select random advice

		text = '<h4>' + name1 + ' and ' + name2 + '</h4><h1>' + num + '% Love Match</h1>' 
			+'<p>' + advice[adviceNum] + '</p></div>';
	}

	// Write to the page 
	results.html(text);

	// Show Jumbotron if it's off
	if ($(".jumbotron").css('display') == "none") {
		$(".jumbotron").fadeIn();  // If first time, show it. Then it will always be there.
	}

	// Show results with a slight delay for maximum anticipation
	results.show(500);
}

/*
 Set up the Love Calculator
*/
var setup = function() {
	var content = '<div class="row">' 
		+ '<div class="jumbotron"><div id="results"></div></div></div>'
		+ '<div class="row"><div class="input-group">'
	  	+ '<span class="input-group-addon" id="basic-addon1">Person\'s name: </span>'
	  	+ '<input type="text" class="form-control" id="name1" placeholder="First person\'s name" aria-describedby="basic-addon1">'
		+ '</div><br>'
		+ '<div class="input-group">'
		+ '<span class="input-group-addon" id="basic-addon2">Person\'s name: </span>'
	  	+ '<input type="text" class="form-control" id="name2" placeholder="Second person\'s name" aria-describedby="basic-addon2">'
		+ '</div><br>'
	    + '<div class="btn btn-primary" id="submit">Get Results</div></form>'
	    + '</div>'
	    + '</div>';

	// Add the calculator to the page
	$("#lovecalculator").html(content);

	// Hide results panel
	$(".jumbotron").hide();
	$("#results").hide();

	// Bind event handler
	$("#submit").on("click", submitClicked);
}

/*
 Runs when page is done loading
*/
$(document).ready(function () {
	setup();
});
