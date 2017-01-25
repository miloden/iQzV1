		var questionNumber = 1;
		var score = 0;
function showQuestion(question) {
  	$('p').hide();
  	if($("p:nth-of-type("+ question +")").length > 0)		{$("p:nth-of-type("+ question +")").show();
}
  	else {
    $("#final").show();
    }
}

$('span').click(function() {
  	if ($(this).hasClass("correct")) {
    score++;
    }
  	$('.score').html(score)
    questionNumber++;
  	showQuestion(questionNumber);
})
		showQuestion(questionNumber)
