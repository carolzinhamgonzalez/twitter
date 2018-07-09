var btnTweet = document.getElementById('btn');
var txtArea = document.getElementById('msg');

function check() {
  checkEmpty();
  caracteres();
}

function caracteres() {
  var number = document.querySelector('.counter');
  var counter = number.innerHTML = 140 - txtArea.value.length;
  if (counter > 20){
    number.style.color = '#1DA1F2';
  } else if (counter < 21 && counter > 10){
    number.style.color = '#1987CE';
  } else if (counter <= 10 && counter > -1) {
    number.style.color = '#F70E0E';
  } else if (counter <= -1){
    number.style.color = '#C30808';
  }
}

function checkEmpty(){
  var btn = document.getElementById('btn');
  if (txtArea.value ==='' || txtArea.value.length > 140){
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

txtArea.addEventListener('keypress', function(event){
  if(event.code === 'Enter') {
    var numberRows = document.getElementById('msg').rows;
    var newRows = 1 + numberRows;
    document.getElementById('msg').rows = newRows;

  }
});
// event é um obj do evento escutado.
