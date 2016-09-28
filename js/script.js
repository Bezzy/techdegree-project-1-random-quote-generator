/**
 * Store all quotes objects
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
			"string": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
			"source": "Albert Einstein",
			"citation": "Cosmic Religion and Other Opinions and Aphorisms",
			"year": "1931",
			"category": "Creativity"
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

var quote_string;

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

		console.log(random_quote.category)

	}

	quote_string += '</p>';

	document.getElementById("quote-box").innerHTML = quote_string;
}

printQuote();


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);