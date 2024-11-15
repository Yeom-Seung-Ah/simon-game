var gamePattern = [];
var userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var start = false;

$(document).keydown(function(e){
    if(e.keyCode == 65 && start == false) {
        nextSequence();
        start = true;
    }
});

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
};

function nextSequence() {

    userClickedPattern = [];

    level ++;
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    
    $("#level-title").text(`level ${level}`);
};

function animatePress(currentColour) {
    var delayInMilliseconds = 100;
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(function() {
        $(`#${currentColour}`).removeClass("pressed");
    },delayInMilliseconds);
};

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {
    playSound("wrong");
    
    $("body").addClass("game-over");

    setTimeout(function() {
        $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press A Key to Restart");
    
    startOver();
}
}

function startOver() {
    gamePattern = [];
    level = 0;
    start = false;
};