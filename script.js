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
        '<div><a href = "'  + permalink + '"> <h2>' + '<strong>Title:</strong> ' + title + '<br>' + '<strong>Author: </strong>' + author + '<br>' + '<strong>Score: </strong>' + score +
        '</h2><img src="'
        + thumbnail +
        '"/></a></div>'
      );

}

  });

});
