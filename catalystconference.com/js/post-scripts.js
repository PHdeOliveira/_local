// Scripts for New Post Event Site

//Masonry Initialize

var container = document.querySelector('.masonry');

var msnry = new Masonry( container, {
  // options...
  itemSelector: '.item',
  columnWidth: 280,
  gutter: 4
});


function twitterCall() {

 console.log('this is the twittercall');

 setTimeout(function(){

	var frame = document.getElementById('twitter-widget-0');
	var stream = frame.contentDocument.children[0].children[1].children[0].children[2];
	var feed = stream.firstElementChild;
	var feedChildren = feed.children;
	var tweet;
	var tweetBody;

	for (var i = 0; i < feedChildren.length; i++) {
		tweet = feedChildren[i];
		tweetBody = tweet.children[2];
		// tweetHeader = 

		tweet.children[1].hidden = true;
		tweet.children[3].hidden = true;

		tweet.style.height = 156 + 'px';
		tweet.style.position = 'relative';
		tweet.style.boxSizing = 'border-box';
		tweet.firstElementChild.style.position = 'absolute';
		tweet.firstElementChild.style.right = 30 + 'px';
		tweet.firstElementChild.style.bottom = 20 + 'px';

		tweetBody.style.padding = '26px 30px 0';

		console.dir(tweetBody);
		console.log(tweet);


		tweetBody.firstElementChild.style.color = '#fcfbf4';
		tweetBody.firstElementChild.style.fontSize = 11 +'px';
		tweetBody.firstElementChild.style.lineHeight = 13 + 'px';

		
		
	}

	// console.dir(feed);

}, 500)

}


window.onload = twitterCall;