$(document).ready(function(){
	var ComputerChoice = Math.floor(Math.random()* 100);	
	var difference;
	var prevDist = 101;

	var isValid = function(userChoice){
		if (!($.isNumeric(userChoice)) ||  userChoice < 0 ||  (userChoice > 100)) {
			return false;
		}
		else{
			return true;
		}
	};
		
	$("#numberform").on('submit', function(event) {
		event.preventDefault();

		var userChoice = parseInt($('#userChoice').val());
		$('#userChoice').val("");
		if (isValid(userChoice)){

			difference = Math.abs(ComputerChoice - userChoice);
			
			if (prevDist > difference && userChoice != ComputerChoice){
				$("#comment").text("You are getting hotter!").css("color", "red");
			}
			else if (prevDist < difference && userChoice != ComputerChoice){
				$('#comment').text("You are getting colder").css("color", "blue");
			}
			else if (difference === prevDist && userChoice != ComputerChoice){
				$("#comment").text("You are cold").css("color", "blue");
			}
			else{
				$("#comment").text("You got the number!!!");
			}	
			$('#userChoice').val("").focus();
			prevDist = difference;
		}
		else {
			$('#comment').text("You can only guess a number between 0 and 100").css("color", "#CF0000");
		}
	}); 
	// form.reset();

	$('form').append("<button id='new'>Start Again</button>");

	$('button').click(function(){
		location.reload();
		// $('#ComputerChoice').val("");
	});

});

