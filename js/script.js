/**
 * Store all quotes objects
 * @type {Array}
 */
var quotes = [
		{
			"string": "How many cares one loses when one decides not to be something but to be someone.",
			"source": "Gabrielle",
			"citation": "Coco Chanel",
			"year": ""
		},
		{
			"string": "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
			"source": "Raplh Waldo Emerson",
			"citation": "Imitation is sucide",
			"year": ""
		},
		{
			"string": "Do what you feel in your heart to be right, for you’ll be criticized anyway.",
			"source": "Eleanor Roosevelt",
			"citation": "",
			"year": ""
		},
		{
			"string": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
			"source": "Albert Einstein",
			"citation": "Cosmic Religion and Other Opinions and Aphorisms",
			"year": "1931"
		}
];

/**
 * store the number of quotes object into the array. Start counting from 0
 * @type {int}
 */
var quotes_length = quotes.length - 1;

/**
 * Store the minimun index number from an array
 * @type {int}
 */
var min_number_quote = 0;

var random_quote;

/**
 * Store the first element with the class 'foo'
 * @type {object literal}
 */
var quote 		= 	document.getElementsByClassName("quote")[0];

var source 		= 	document.getElementsByClassName("source")[0];

var citation 	= 	document.getElementsByClassName("citation")[0];

var year 		= 	document.getElementsByClassName("year")[0];

/**
 * Get a random number from min number include to max number include
 * @param  {int} Min min number
 * @param  {int} Max max number
 * @return {int} Return a random
 * more details to https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
 */
function getRandomNumber (min, max) {

	min = Math.ceil(min);

  	max = Math.floor(max);
  	
  	return Math.floor(Math.random() * (max - min +1)) + min;

} 

/**
 * Pick a random quote
 * @param  {array} quotes Containing all quotes
 * @return {object literal} Return a quote with all properties
 */
function getRandomQuote (quotes) {

	random_quote = quotes[getRandomNumber(min_number_quote, quotes_length)];
	
	return random_quote;


}

function printQuote () {

	getRandomQuote(quotes);

	quote.innerHTML 	= random_quote.string;

	citation.innerHTML 	= random_quote.citation;

	source.innerHTML 	= random_quote.source;

	year.innerHTML 		= random_quote.year;

}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);