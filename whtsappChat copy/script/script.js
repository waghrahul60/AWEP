function StartChat(id) {
  document.getElementById("chatPanel").removeAttribute("style");
  document.getElementById("divStart").setAttribute("style", "display:none");
  hideChatList();
}

function showChatList() {
  document.getElementById("sideL").classList.remove("d-none", "d-md-block");
  document.getElementById("sideR").classList.add("d-none");
}

function hideChatList() {
  document.getElementById("sideL").classList.add("d-none", "d-md-block");
  document.getElementById("sideR").classList.remove("d-none");
}
