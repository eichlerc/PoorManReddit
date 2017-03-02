$(document).ready(function() {

  $.get("https://www.reddit.com/r/aww/.json",
function(goodness){
    var redditArray = goodness.data.children;

    for(var i = 0 ; i<redditArray.length ; i++){
    var thumbnail = redditArray[i].data.thumbnail;
    var permalink = "http://www.reddit.com" + redditArray[i].data.permalink;
    var title = redditArray[i].data.title;
    var author = redditArray[i].data.author;
    var score = redditArray[i].data.score;

    $('section').append(
        '<a href = "'
        + permalink +
        '"><div><h2>Title: </h2><p> '
        + title +
        '</p><br><h2>Author: </h2><p>'
        + author +
        '</p><br><h2>Score: </h2><p> '
         + score +
        '</p><img src="'
        + thumbnail +
        '"/></div></a>'
      );

}

  });

});
