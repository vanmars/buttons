$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  $("#mainHeader").click(function(){
    $("#mainHeader").css("background-color", "green");
    $("#mainHeader").append("<p>Place text here</p>");
    $("#mainHeader p").click(function(){
      $(this).remove();
    });
  });

  // Functions for cat-dog.html
  $("#meow").click(function() {
    $("#dog-text").append("<p>Bark</p>");
  });

  $("#bark").click(function() {
    $("#cat-text").append("<p>Meow</p>");
  });

  $("#cat-clickable").click(function(){
    $("#cat-clickable").after("<img src='img/cat.jpg'>");
    $(".cat img").click(function(){
      $(this).remove();
    });
  });

  $("#dog-clickable").click(function(){
    $("#dog-clickable").after("<img src='img/dog.jpeg'>");
    $(".dog img").click(function(){
      $(this).remove();
    });
  });

});