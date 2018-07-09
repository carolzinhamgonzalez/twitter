var btnTweet = document.getElementById('btn');

function tweetar(){
  var text = document.getElementById('msg').value;
  var sectionTweets = document.querySelector('.ListTweets');
  var tweet = document.createElement('article');
      // var html = '<article class="tweet"> %msg%</article>';
      // var newHtml = html.replace('%msg%', text);
      // document.querySelector('.ListTweets').insertAdjacentHTML('beforeend', newHtml);
  tweet.classList.add("tweet");
  var paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  tweet.appendChild(paragraph);
  sectionTweets.appendChild(tweet);
  document.getElementById('msg').value = '';
}

btnTweet.addEventListener("click", tweetar);
