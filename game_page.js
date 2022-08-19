    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0;
    player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_question").innerHTML = "Answer Turn -" + player2_name;

function send() {
    player_1 = document.getElementById("player_1").value;
    player_2 = document.getElementById("player_2").value;
    actual_answer=parseInt(player_1)*parseInt(player_2);
    console.log(actual_answer);
    
    question_word="<h4 id= 'word_display'> Q"+player_1+"X"+player_2+"</h4>";
    input_box="<input type='text' id='input_check_box'>";
    check_button="<button class = 'btn btn-info' onclick='check()>Check</button>";
	console.log(question_word);
	console.log(input_box);
	console.log(check_button);
    row= question_word + input_box+ check_button;

    document.getElementById("output").innerHTML= row;
}
question_turn = "player1";
answer_turn = "player2";


// function check()
// {
// 	get_answer = document.getElementById("input_check_box").value;
// 	answer = get_answer.toLowerCase();
// 	console.log("Answer In Lower Case - " + answer);
// 	if(answer == word)	
// 	{
// 		if(answer_turn == "player1")
// 		{
// 			player1_score = player1_score +1;
// 		    document.getElementById("player1_score").innerHTML = player1_score;
// 		}
// 		else 
// 		{
// 			player2_score = player2_score +1;
// 		    document.getElementById("player2_score").innerHTML = player2_score;
// 		}
// 	}
// 	if(question_turn == "player1")
// 	{
// 		question_turn = "player2"
// 		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
// 	}
// 	else 
// 	{
// 		question_turn = "player1"
// 		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
// 	}

// 	if(answer_turn == "player1")
// 	{
// 		answer_turn = "player2"
// 		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
// 	}
// 	else 
// 	{
// 		answer_turn = "player1"
// 		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
// 	}

//     document.getElementById("output").innerHTML = "";
// }
function update_score() {
	localStorage.setItem("player1_score", player1_score);
	localStorage.setItem("player2_score", player2_score);
}
function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
