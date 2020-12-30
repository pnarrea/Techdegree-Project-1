/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
	{
	quote: 'These bitches',
	author: 'that one guy',
	citation: 'church',
	year: 2004
	},

	{
	quote: 'Some other people',
	author: 'albert rudolph',
	citation: 'books',
	year: 1993
	},

	{
	quote: 'Humility isnt thinking less of oneself',
	author: 'pewdiepie',
	citation: 'bridge',
	year: 1980
  },
  
	{
    quote: 'Ruh oh',
    author: 'scooby doo',
    citation: 'cartoon',
    year: 1980
    },

    {
      quote: 'First we make our habits then they make us',
      author: 'someone',
      citation: 'unknown',
      
      }


]

/* for (i=0; i<quotes.length; i++){

console.log(quotes[i].quote)

} */

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let a = Math.floor(Math.random()*quotes.length);
  console.log(a);
  return quotes[a];

}

console.log(getRandomQuote());


/***
 * `printQuote` function
***/

function printQuote() {
	quote = getRandomQuote();
	html = `<p class = "quote">${quote.quote}</p> <p class="source"> ${quote.source} `;
	
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
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);