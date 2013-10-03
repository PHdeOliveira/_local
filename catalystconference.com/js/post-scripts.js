// Scripts for New Post Event Site

//Masonry Initialize

var container = document.querySelector('.masonry');

var msnry = new Masonry( container, {
  // options...
  itemSelector: '.item',
  columnWidth: 280,
  gutter: 4
});


// Twitter Call

$(function () {
    // start jqtweet!
    JQTWEET.loadTweets();
});