var trivia = [

    {
        question: "Who was first U.S. president to be impeached?",
        answers: [
            'abc',
            'Andrew Johnson',
            'abc',
        ],
        correctAnswer: 'Andrew Johnson'
    },
    {
        question: "Who became both a vice president and president of the United States without ever being elected to either office?",
        answers: [
            'abc',
            'abc',
            'Gerald Ford'
        ],
        correctAnswer: 'Gerald Ford'
    },
]

var questionIterator = 0;
var questionGroup = trivia[questionIterator];
var sec = 10;
var timer;
var correctlyAnswered;
var incorrectlyAnswered;

$(document).ready(function () {
    $("#start").click(function () {
        document.getElementById("start").style.display = "none";
        startTimer();
        loadQuestion();
        

    });

})


function loadQuestion() {
    $("#question").html(questionGroup.question);
    questionGroup.answers.forEach(element => {
        $(`<p onclick="validateAnswer(this.id)" id="${element}">${element}</p>`).appendTo(`#answers`);
    });


}

function tick() {
    document.getElementById("timer").innerHTML = `Time Remaining: ${sec} Seconds`;;
    sec--;
    if (sec < 0) {
        clearInterval(timer);
        $("#answers").empty();
        $(`<p> Time is up. <br> The answer answer is ${questionGroup.correctAnswer}.</p>`).appendTo("#answers")
    }
};

function startTimer() {
    tick();
    timer = setInterval(tick, 1000);
}

function validateAnswer(ansId) {
    var userAnswer;
    userAnswer = ansId;

    if (userAnswer === questionGroup.correctAnswer) {
        $("#answers").empty();
        $(`<p> Correct Answer.</p>`).appendTo("#answers")
        correctlyAnswered++;
        clearInterval(timer);
    }
    else {
        $("#answers").empty();
        $(`<p> Incorrect Answer.</p>`).appendTo("#answers")
        incorrectlyAnswered++;
        clearInterval(timer);
    }
}




// $(document).ready(function () {
    // var timer = setInterval(function () {
    //     document.getElementById("timer").innerHTML = `Time Remaining: ${timeleft}  Seconds`;
    //     timeleft -= 1;
    //     if (timeleft < 0) {
    //         clearInterval(timer);
    //         validateAnswer()
    //         document.getElementById("timer").innerHTML = "Time's up"
    //     }
    // }, 1000);


// })