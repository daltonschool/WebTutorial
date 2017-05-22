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
 Runs when results button is selected
*/
var submitClicked = function() {
	var name1 = $("#name1").val();
	var name2 = $("#name2").val();
	var results = $("#results");
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

		// The secret formula to computing the love match!
		var num = (name1.charCodeAt(name1.length/2) + name2.charCodeAt(name2.length/2)) % 100;

		// Select random advice
		var adviceNum = Math.floor(Math.random() * advice.length); 

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
 Pool of advice to show after giving results.
*/
var advice = [
	"A good relationship is like a game of chess; the Queen should always protect her King.",
	"Time can heal a broken heart, but time can also break a waiting heart.",
	"Don’t fall in love with someone who says the right things. Fall in in love with someone who does the right things."
]


/*
 Start this script after page is done loading
*/
$(document).ready(function () {
	setup();
});
