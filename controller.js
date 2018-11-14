$(document).ready(function () {

var questionBank = new Array;
var wordArray = new Array;
var previousGuesses = new Array;
var currentWord;
var currentClue;
var wrongAnswerCount;



$.getJSON('quizbank.json', function(data) {
	for(i=0; i<data.wordlist.length; i++){
		questionBank[i] = new Array;
		questionBank[i][0] = data.wordlist[i].word;
		questionBank[i][1] = data.wordlist[i].clue;
	}
	add:titleScreen();
})//getJSON

function titleScreen() {
	$('#gameContent').append('<div id="gameTitle">HANGMAN</div>
	<div id="startButton" class="button">BEGIN</div>');
	$('#startButton').on("click",function (){gameScreen ()});
	
}//display game
	
	
	
	
}
























});