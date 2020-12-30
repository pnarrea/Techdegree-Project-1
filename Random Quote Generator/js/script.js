/*** 
 * Quotes array containing quotes and availble information on their source. 
***/

var quotes = [
	{
	quote: 'Long live the rose that grew from concrete when no one else even cared.',
	author: '2Pac',

	},

	{
	quote: 'Believe it!',
	author: 'Naruto',
	citation: 'Naruto',
	year: 2007
	},

	{
	quote: 'Humility isnt thinking less of yourself, it is thinking of yourself less',
	author: 'Felix Arvid Ulf Kjellberg',
	citation: 'Pewdiepie',
	year: 2016
  },
  
	{
    quote: 'Ruh oh',
    author: 'Scooby Doo',
    citation: 'Scooby Doo, Where Are You!',
    year: 1969
    },

    {
      quote: 'Ich bin ein Berliner',
      author: 'JFK',
      citation: 'West Berlin Speech',
      year: 1963
      }


]


/***
 * `getRandomQuote` function
 * This function returns the quote object that corresponds to the random number generated 
 * number shall be between 0 and 1 minus the # of objects in the array
***/

function getRandomQuote() {
  let a = Math.floor(Math.random()*quotes.length);
  console.log(a);
  return quotes[a];

}

console.log(getRandomQuote());


/***
 * `printQuote` function
 * This function uses the getRandomQuote function and inserts the contents of the object into the html file.
 * It stores the quote and author into a variable as a string with the first <p> tags 
 * (intentionally leaving out the last </p> tag)
 * 
 * then appends the necessary other portions of the object as they appear in the object between <span>,</span> tags 
 * finally appending the final </p> tag when all parts of the object have been accounted for
***/

function printQuote() {
	quote = getRandomQuote();
	html = `<p class = "quote">${quote.quote}</p> <p class="source"> ${quote.author} `;
	
	if (quote.citation != null) {
		html +=  `<span class="citation"> ${quote.citation} </span>`;
	}

	if (quote.year != null) {
		html +=  `<span class="year"> ${quote.year} </span>`;
	}

	html += '</p>';

	document.getElementById('quote-box').innerHTML = html; 

	console.log(html);
}


/***
 * click event listener for the print quote button
 * Changes the quote that appears on the screen via a button "show another quote" and the functions above
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);