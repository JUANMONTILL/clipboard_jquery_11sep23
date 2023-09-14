$(document).ready(function () {
  // build two functions that add and remove the class in the span tag
  function add() {
    $(".copied").addClass("bounce-effect");
  }

  function remove() {
    $(".copied").removeClass("bounce-effect");
  }

  // we call the functions and copy the text with the click button
  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");
    add();
    setTimeout(remove, 800);
  });
});