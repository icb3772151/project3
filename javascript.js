
  var quotes = [
    "It is not the style of clothes one wears, neither the kind of automobile one drives, nor the amount of money one has in the bank, that counts. These mean nothing. It is simply service that measures success., George Washington Carver",
    "Sit down before fact with an open mind. Be prepared to give up every preconceived notion. Follow humbly wherever and to whatever abyss Nature leads or you learn nothing. Don’t push out figures when facts are going in the opposite direction. Admiral Hyman G. Rickover",
   "It's easier to ask forgiveness than it is to get permission., Admiral Grace Hopper",
    "If everyone is thinking alike, then somebody isn't thinking.General George S. Patton",
   "Mystery creates wonder and wonder is the basis of man's desire to understand. Neil Armstrong, NASA",
    "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more. Nikola Tesla, Inventor",
   "When morals decline and good men do nothing, evil flourishes. FBI Director J. Edgar Hoover",
    "No statement should be believed because it is made by an authority. Robert A. Heinlein, Author",
    "All the great chefs I know  like Thomas Keller, Jean-Georges Vongerichten - they are technicians first. Jacques Pepin, Chef",
   "I don't know that there are any short cuts to doing a good job. Justice Sandra Day O'Connor", "I was smart enough to go through any door that opened. Joan Rivers"
    ]

  window.onload = newQuote;
//window.onload = tweetQuote;

function newQuote() {
  
 
  
  var randomN = Math.floor(Math.random() * quotes.length);
  console.log("click");
  console.log(quotes.length);
  console.log(randomN);
 
  document.getElementById('quoteDisplay').innerHTML = quotes[randomN]
  
};

function tweetQuote() {
  
  console.log("tweet");
 
  var textToTweet =   document.getElementById('quoteDisplay').innerHTML;
 
   var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
  window.open(twtLink,'_blank');
       
    
};





