var score=0;
var answered = 0;
var books = [
    {
        img: "img/bookcovers/10-please-love-me-somebody-maud-johnson.jpg",
        question: "Which is the title of this romance novel?",
        options: ["Please Love Me...Somebody", "Boarding School Blues", "Forgive or Forget?","Real Love"],
        answer: "Please Love Me...Somebody"
    },
     {
        img: "img/bookcovers/8-special-girl-dorothy-francis.jpg",
        question: "How about this American Teenage Romance novel?",
        options: ["Am I Alone?", "Special Girl", "Worthy Of Love","When To Say Yes"],
        answer: "Special Girl"
    },
    {
        img: "img/bookcovers/kiis-me-creep.png",
        question: "What title goes with this book of young love?",
        options: ["Growing Up", "Average Boy", "Kiss Me, Creep","Much Too Young"],
        answer: "Kiss Me, Creep"
    },
    {
        img: "img/bookcovers/crosswinds-15-lighten-up-jennifer-kathlyn-lampi.jpg",
        question: "What about this book of broken friendship?",
        options: ["We're Not Friends", "Lighten Up, Jennifer", "Love Me Not", "The End Of Us"],
        answer: "Lighten Up, Jennifer"
    },
    {
        img: "img/bookcovers/wildfire-10-ive-got-a-crush-on-you-carol-stanley.jpg",
        question: "What about Carol Stanley's novel?",
        options: ["Teach Me, Mister", "Ever Lasting", "Jo & Joe", "I've Got A Crush On You"],
        answer: "I've Got A Crush On You"
    },
    {
        img: "img/bookcovers/caprice_27tooyoungtoknowmargaretmscariano_thumb.jpg",
        question: "What's the title of this book about growing up?",
        options: ["When I'm A Woman...", "Lacing Up", "Too Young To Know", "High School Dreams"],
        answer: "Too Young To Know"
    },
    {
        img: "img/bookcovers/171-write-on-dorothy-francis.jpg",
        question: "And lastly, what about this will-the-won't-they story?",
        options: ["Make It Happen", "Too Smart For A Girl?", "Just Friends", "Write On!"],
        answer: "Write On!"
    }
];

/*
Set up the quiz.
*/
var setup = function() {
	var quiz = '';
	var i = 0;

	// Loop thru the array and write all the questions
	$.each(books, function(key, val){
		// It's easier to get the question options first, then plug them in.
		var options ='';
		$.each(val.options, function(key, val) {
			options += '<li class="option">' + val + '</li>';
		});

		// display the imagine and options
		quiz += '<div class="row book_container"><h1>' + ++i + '.</h1>'
			+ '<div class="bookcover col-md-6 col-sm-6 col-xs-6">' 
		    + '<img src="'+ val.img +'"/>'
		    + '<div class="blackout"></div>'
		    + '</div>'
		    + '<div class="col-md-6 col-sm-6 col-xs-6">'
		    + '<div class="panel"><h2>' + val.question + '</h2></div>'
		    + '<ul class="options" id="' + key + '">'
		    + options
		    + '</ul>'
		    + '<div class="result_container panel off">'
		    + '<div class="result"></div>'
		    + '<div class="score_container"></div>' 
		    + '</div>'
		    + '</div>' 
		    + '</div>';
	})

	quiz += '<div class="jumbotron off" id="total_result"></div>';

	// Put quiz on the page
	$("#quiz").html(quiz);

	// Bind event handlers
	$(".option").on("click", selectionMade);
}

/*
Respond to a selection
*/
var selectionMade = (function() {
	var book_container = $(this).parent().parent().parent();
	var blackout = $(book_container).find(".blackout");
	var result = $(book_container).find(".result");
	var points = $(book_container).find(".score_container");
	var answer = books[this.parentNode.id].answer;

	$(blackout).addClass("off");
	$(result).parent().removeClass("off");

	if (answer == this.innerHTML) {
		this.style.background = "#b2d8b2";
		this.style.color = "#338933";
		this.style.border = "6px solid #66b266";
		$(result).html("<h3>Correct!</h3>");
		score++;
	}
	else {
		this.style.background = "#ee9999";
		this.style.color = "#994444";
		this.style.border = "6px solid #bb6666";
		$(result).html('<div class="panel"><h3>Sorry! The answer is...</h3><h2>' + answer + '</h2></div>');
	}
	answered++;

	$(points).html("<h4>" + score + " out of " + answered + "</h4>");

	// Check if done with quiz
	if (answered == books.length) {
		var comment;
		var percent = (score/answered) * 100
		if (percent > 85 ) {
			comment = "Good job!";
		} else {
			comment = "Time to brush up on your romance novels!"
		}
		document.getElementById("total_result").style.opacity = 1;
	  document.getElementById("total_result").innerHTML += "<h1>You got " + score + " out of " + answered + "!</h1><h3>" + comment + "</h3>";

	}
})

$(document).ready(function () {
	setup();
});



