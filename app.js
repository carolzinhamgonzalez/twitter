var btnTweet = document.getElementById('btn');
var txtArea = document.getElementById('msg');

function check() {
  checkEmpty();
  caracteres();
}

function caracteres() {
  var number = document.querySelector('.counter');
  var counter = number.innerHTML = 140 - txtArea.value.length;
}

function checkEmpty(){
  var btn = document.getElementById('btn');
  if (txtArea.value ==''){
    btn.disabled = true;
  } else if(txtArea.value !=''){
    btn.disabled = false;
  }
}


function tweetar(){
  var text = txtArea.value;
  var sectionTweets = document.querySelector('.ListTweets');
  var tweet = document.createElement('article');
      // var html = '<article class="tweet"> %msg%</article>';
      // var newHtml = html.replace('%msg%', text);
      // document.querySelector('.ListTweets').insertAdjacentHTML('beforeend', newHtml);
  tweet.classList.add('tweet');
  var paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  tweet.appendChild(paragraph);
  sectionTweets.appendChild(tweet);
  document.getElementById('msg').value = '';
}

txtArea.addEventListener('keyup', check);
btnTweet.addEventListener('click', tweetar);
