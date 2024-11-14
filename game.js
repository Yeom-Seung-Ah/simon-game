var gamePattern = [];
var userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
    audio.play;
};

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})