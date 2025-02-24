var userClickedPattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log($("#" + randomChosenColour));
  playSound(randomChosenColour);
}
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
     userClickedPattern.push(userChosenColour);
     console.log(userClickedPattern);
       playSound(userChosenColour);
  });
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
