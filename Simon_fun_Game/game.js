var gamePattern=[];
buttonColours=["red","blue","green","yellow"];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour=Math.floor(Math.random(butonColours)*4);
    gamePattern.push(randomChosenColour);
}
alert("hello");