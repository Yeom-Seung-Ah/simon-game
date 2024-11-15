var gamePattern = [];
var userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var start = false;

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
});

$(document).keydown(function(e){
    if(e.keyCode == 65 && start == false) {
        nextSequence();
        start = true;
    }
})

function playSound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
};

function nextSequence() {
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

