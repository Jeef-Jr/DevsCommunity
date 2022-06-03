var socket = io("http://localhost:3333");

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");
var username = document.getElementById("input1");

var objDiv = document.getElementById("messages");
objDiv.scrollTop = objDiv.scrollHeight;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value, username.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg, user) {
  var item = document.createElement("li");

  item.innerHTML = `
  <img class="icon_user" src="../../../assets/User_icon.png" alt="">
  ${user} |
  ${msg}`;
  messages.appendChild(item);
  updateScroll();
});

function updateScroll() {
  var element = document.getElementById("messages");
  element.scrollTop = element.scrollHeight;
}
