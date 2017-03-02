$(document).ready(function() {

  $.get("https://www.reddit.com/r/aww/.json",
function(goodness){
    var redditArray = goodness.data.children;

    for(var i = 0 ; i<redditArray.length ; i++){
    var thumbnail = redditArray[i].data.thumbnail;
    var title = redditArray[i].data.title;
    var author = redditArray[i].data.author;
    var score = redditArray[i].data.score;

    $('section').append(
        '<div><h2>' + title + '<br>' + author + '<br>' + score +
        '</h2><img src="'
        + thumbnail +
        '"/></div>'
      );
    }

  });


});
