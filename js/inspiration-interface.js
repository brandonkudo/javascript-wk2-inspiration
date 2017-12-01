import {ImgurApi} from "./../js/ImgurApi.js";
import {QuoteApi} from "./../js/QuoteApi.js";
let imgur = new ImgurApi();
let quote = new QuoteApi();

function showRandomImage(imageURL) {
  $("#random-image").attr("src", imageURL);
}

function showRandomQuote(quoteText, quoteAuthor) {
  $("#quote-text").text(quoteText);
  $("#quote-author").text(quoteAuthor);
}

function error() {
  console.log("oh no");
}

$(document).ready(function() {
  $("button").click(function() {

    imgur.getImageByKeyword("dog", showRandomImage, error);
    quote.getQuote(showRandomQuote, error);
  });
});
