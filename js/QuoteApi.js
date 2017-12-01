export class QuoteApi {

  getQuote(showRandomQuote, error) {
    $.ajax({
      url: `http://api.forismatic.com/api/1.0/?method=getQuote&key&lang=en&format=json`,
      type: "GET",
      data: {
        format: "json"
      },
      success: function(response) {
        showRandomQuote(response.quoteText, response.quoteAuthor)
      },
      error: function () {
        error();
      }
    });
  }
}
