var btnTweet = document.getElementById('btn');
var txtArea = document.getElementById('msg');

function check() {
  checkEmpty();
  caracteres();
  autoResize();
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

function autoResize(){
  if (txtArea.scrollHeight > txtArea.offsetHeight) {
    var numberRows = document.getElementById('msg').rows;
    var newRows = 1 + numberRows;
    document.getElementById('msg').rows = newRows;
  }
}

function tweetar(){
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var horario = hora + ':' + minuto;
  var text = txtArea.value;
  var sectionTweets = document.querySelector('.ListTweets');
  var tweet = document.createElement('article');
  tweet.classList.add('tweet');
  var paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  tweet.appendChild(paragraph);
  var paragraphTwo = document.createElement('p');
  paragraphTwo.innerHTML = horario;
  var dateParagraph = document.createElement('p');
  dateParagraph.innerHTML = horario;
  tweet.appendChild(dateParagraph);
  sectionTweets.appendChild(tweet);
  document.getElementById('msg').value = '';
}

// new Date().getTime()
txtArea.addEventListener('keyup', check);
btnTweet.addEventListener('click', tweetar);
txtArea.addEventListener('keypress', function(event){
  if(event.code === 'Enter' && txtArea.value.length > 140) {
    var numberRows = document.getElementById('msg').rows;
    var newRows = 1 + numberRows;
    document.getElementById('msg').rows = newRows;

  }
});
// event é um obj do evento escutado.
