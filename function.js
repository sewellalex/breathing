/**
 * Created by alexsewell on 2/14/17.
 */

var circleTextElement = document.getElementById("circle-text");
var circle = document.getElementById("circle");
var circleBorder = document.getElementById("circle-border");
var rotatingCircle = document.getElementById('rotating-container');

var start = 0;

function startBreathing() {
    $(circleTextElement).text("3").css("font-size", "100px");
    startTimer();
}

function startTimer() {
    var startTimer = setInterval(function(){
        var circleText = $(circleTextElement).text();

        $(circleTextElement).text(circleText - 1);
        console.log(circleText);

        if (circleText == 1) {
            clearInterval(startTimer);
            continueBreathing();
        }

    }, 1000);
}

function continueBreathing() {
    $(circleTextElement).text("BREATH IN").css("font-size", "42px");
    $(circle).removeClass('circle-small').addClass('circle-big');
    $(circleBorder).removeClass('circle-border-small').addClass('circle-border-big');
    $(rotatingCircle).removeClass('rotating-container-small').addClass('rotating-container-big');

    setTimeout(function() {
        $(circleTextElement).text("HOLD");

    }, 6000);

    var lungs = setInterval(function(){

        var circleClass = $(circle).attr('class');

        if (circleClass == "circle-small") {
            $(circle).removeClass('circle-small').addClass('circle-big');
            $(circleBorder).removeClass('circle-border-small').addClass('circle-border-big');
            $(rotatingCircle).removeClass('rotating-container-small').addClass('rotating-container-big');
            $(circleTextElement).text("BREATH IN");

            setTimeout(function() {
                $(circleTextElement).text("HOLD");

            }, 6000);
        } else {
            $(circle).removeClass('circle-big').addClass('circle-small');
            $(circleBorder).removeClass('circle-border-big').addClass('circle-border-small');
            $(rotatingCircle).removeClass('rotating-container-big').addClass('rotating-container-small');

            $(circleTextElement).text("BREATH OUT");

            setTimeout(function() {
                $(circleTextElement).text("HOLD");

            }, 6000);
        }

    }, 9000);

    setInterval(function(){
        breathTracker();
    }, 18000);
}

function breathTracker() {
    var progressTiles = document.getElementsByClassName("progress");
    var currentProgress = progressTiles[start];
    console.log(currentProgress);
    var progressCircle = currentProgress.parentNode;
    $(progressCircle).css("background-color", "white").css("color", "#47B8E9");

    if (start == 2) {
        $(circle).removeClass().addClass("completed-circle");
        $(circleTextElement).remove();
        $(circleBorder).remove();
        $(".progress-container").remove();
        $(".congratulations-container").fadeIn(1000);
        $(".congratulations").fadeIn(1000);
        $(".replay").fadeIn(1000);

    }

    start = start + 1;

}


setTimeout(function() {
    startBreathing();
}, 1500);

// $('.replay').click(function() {
//     location.reload();
// });

