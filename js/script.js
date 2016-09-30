/**
 * Stores all quotes objects
 * @type {Array}
 */
var quotes = [
		{
			"string": "How many cares one loses when one decides not to be something but to be someone.",
			"source": "Gabrielle",
			"citation": "Coco Chanel"
		},
		{
			"string": "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
			"source": "Raplh Waldo Emerson",
			"citation": "Imitation is sucide"
		},
		{
			"string": "Do what you feel in your heart to be right, for you’ll be criticized anyway.",
			"source": "Eleanor Roosevelt",
			"category": "Life"
		},
		{
			"string": "The difference between stupidity and genius is that genius has its limits.",
			"source": "Albert Einstein",
			"citation": "The New York Times",
			"year": "1921",
			"category": "Intelligence"
		},
		{
			"string": "Mistakes are always forgivable, if one has the courage to admit them.",
			"source": "Bruce Lee",
			"category": "Courage"
		},
		{
			"string": "Do not take life too seriously. You will never get out of it alive.",
			"source": "Elbert Hubbard",
			"category": "Alife"
		}
];

/**
 * stores the number of quotes object into the array. Start counting from 0
 * @type {int}
 */
var quotes_length = quotes.length;

/**
 * Stores the minimun index number from an array
 * @type {int}
 */
var min_number_quote = 0;

/**
 * Stores the random quote
 */
var random_quote;

/**
 * Stores a mirror of the random quote
 */
var quote_mirror;

/**
 * Stores a random number
 */
var random_number;

/**
 * Stores the quotes displayed once
 * @type {Array}
 */
var quotes_mirror = [];

var quote_string;

var timeout;

/**
 * Get a random number from min number include to max number include
 * @param  {int} Min min number
 * @param  {int} Max max number
 * @return {int} Return a random
 * more details at https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
 */
function getRandomNumber (min, max) {

	min = Math.ceil(min);

  	max = Math.floor(max);
  	
  	return Math.floor(Math.random() * (max - min +1)) + min;

} 

/**
 * Pick a random quote and display only once until that all quotes are displayed 
 * @param  {array} remaining_quotes takes a quotes array
 * @return {object literal} and return an object literal with all quotes properties
 */
function getRandomQuote (remaining_quotes) {
	/**
	 * If the arrays quotes are not empties, stores the citation and kick out him
	 **/
	if (remaining_quotes.length !== 0) {
		
		random_number = getRandomNumber(min_number_quote, remaining_quotes.length -1);
		
		random_quote = remaining_quotes[random_number];
		
		quote_mirror = remaining_quotes.splice(random_number, 1);
		
		quotes_mirror.push(quote_mirror[0]);
		
		return random_quote;
	}
	else {

		quotes = quotes_mirror;
    	
    	quotes_mirror = [];
    	
    	random_number = getRandomNumber(min_number_quote, quotes.length -1);
    	
    	random_quote = quotes[random_number];
    	
    	return random_quote;
	}
}

/**
 * Changes the body background randomly
 */
function changeBackground(){

	document.body.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + "," + getRandomNumber(0, 255) +", " + getRandomNumber(0, 255)  + ")";

}

function printQuote () {

	getRandomQuote(quotes, quotes_mirror, quotes_length);

	/**
	 * Constructs the quote and the source element
	 */

	quote_string = '<p class="quote">';
	
	quote_string += random_quote.string;
	
	quote_string += '</p>';
	
	quote_string += '<p class="source">';

	quote_string += random_quote.source;

	/**
	 * If the property exist constructs the element
	 */

	if (typeof random_quote.citation != "undefined") {

		quote_string += '<span class="citation">';

		quote_string += random_quote.citation;

		quote_string += '</span>';

	}

	if (typeof random_quote.year != "undefined") {

		quote_string += '<span class="year">';

		quote_string += random_quote.year;

		quote_string += '</span>';

	}

	if (typeof random_quote.category != "undefined") {

		quote_string += '<span class="category">';

		quote_string += random_quote.category;

		quote_string += '</span>';
	}

	quote_string += '</p>';

	changeBackground();
	document.getElementById("quote-box").innerHTML = quote_string;

}

/**
 * Set the document once before to ckick on the button
 */
printQuote();

/**
 * call function every 10 sec 
 */
timeout = window.setInterval(function() {

	printQuote();

}, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);