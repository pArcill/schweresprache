// List of Words
function createWord(name, article) {
	return {name: name, article: article};
}
const words = [
	createWord('Ball', 'der'),
	createWord('Zeit', 'die'),
	createWord('Spiel', 'das'),
	createWord('Mann', 'der'),
	createWord('Frau', 'die'),
	createWord('Pause', 'die'),
	createWord('Haus', 'das')
]

// Get a random number from 0 to max-1
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// Word Fetcher
let word;
let correctWords = '';

function getWord() {
	word = words[getRandomInt(words.length)];
	console.log("Word:", word.name);
	document.getElementById("word").innerText = word.name;
}
getWord();

let input = document.getElementById("article");
input.addEventListener("input", checkWord);

// Compares input article with the corresponding article
function checkWord(input) {
	if (input.target.value != word.article) {
		return;
	}
	input.target.value = '';
	correctWords = word.article + ' ' + word.name + ", ";
	document.getElementById("correct").append(correctWords);
	getWord();	
	
	
}
