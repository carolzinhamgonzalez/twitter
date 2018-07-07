// var form = document.createElement("form");
// var textarea = document.createElement("textarea");
// form.appendChild(textarea);
// // var id = document.createElement("id");
// // var placeholder = document.createElement("placeholder");
// textarea.setAttribute("id", "msg");
// textarea.setAttribute("placeholder", "O que está acontecendo?");
// var button = document.createElement("button");
// form.appendChild(button);
// // var type = document.createElement("type");
// // var name = document.createElement("name");
// button.setAttribute("type", "submit");
// button.setAttribute("name", "tweetar");
// // button.setAttribute(value, "");
// button.innerHTML = "Tweetar"
var button = document.querySelectorAll("button");
button.addEventListener("click", tweetar)

function tweetar(){
  var text = document.getElementById('msg').value;
  var div = document.createElement("div");
  body.appendChild(div);
  div.classList.add("tweet");
  var paragraph = document.createElement("p");
  div.appendChild(paragraph);
  paragraph.innerHTML = text;
}
