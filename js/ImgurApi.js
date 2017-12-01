export class ImgurApi {
  constructor() {
    this.clientId = "16cf95f46a5969d";
  }



  getImageByKeyword(searchKeyword, showRandomImage, error) {
    let searchPage = 0;
    $.ajax({
      url: `https://api.imgur.com/3/gallery/search/${searchPage}?q=${searchKeyword}`,
      type: "GET",
      headers: {
        Authorization: `Client-ID ${this.clientId}`
      },
      data: {
        format: "json"
      },
      success: function(response) {
        let imageURL;

        let randomData =  Math.floor(Math.random() * (response.data.length - 1));


        if (response.data[randomData].images !== undefined) {
          let randomImage =  Math.floor(Math.random() * (response.data[randomData].images.length - 1));
          imageURL = response.data[randomData].images[randomImage].link;
        }
        else {
          imageURL = response.data[randomData].link;
        }

        console.log(imageURL);
        console.log(response.data[randomData]);
        showRandomImage(imageURL);
      },
      error: function() {
        error();
      }
    });
  }
}
