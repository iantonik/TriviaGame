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
var sec = 10;
var timer;
var correctlyAnswered=0;
var incorrectlyAnswered=0;
var unanswered = 0;

$(document).ready(function () {
    $("#start").click(function () {
        document.getElementById("start").style.display = "none";
            startTimer();
            loadQuestion();            
        
    });
})

function loadQuestion() {
    $("#question").html(trivia[questionIterator].question);
    trivia[questionIterator].answers.forEach(element => {
        $(`<p onclick="validateAnswer(this.id)" id="${element}">${element}</p>`).appendTo(`#answers`);
    });
}

function tick() {
    document.getElementById("timer").innerHTML = `Time Remaining: ${sec} Seconds`;;
    sec--;
    if (sec < 0) {
        $( "#time-is-up" ).html(`<p> Time is up. <br> The answer answer is ${trivia[questionIterator].correctAnswer}.</p>`).show();
        unanswered++;
        clearInterval(timer);
        setTimeout(next, 5000);
    }
};

function startTimer() {
    tick();
    timer = setInterval(tick, 1000);
}

function validateAnswer(ansId) {
    var userAnswer;
    userAnswer = ansId;
    clearInterval(timer);

    if (userAnswer === trivia[questionIterator].correctAnswer) {
        $("#correct-answer").html(`<p> Correct Answer.</p>`).show();
        correctlyAnswered++
        setTimeout(next, 5000);
    }
    else {
        $("#incorrect-answer").html(`<p> Incorrect Answer.</p>`).show();
        incorrectlyAnswered++;
        setTimeout(next, 5000);
    }
}

function next(){
    questionIterator++
    if (questionIterator<trivia.length){
        $("#answers").empty();
        document.getElementById("correct-answer").style.display = "none";
        document.getElementById("incorrect-answer").style.display = "none";
        document.getElementById("time-is-up").style.display = "none";
        sec = 10;
        startTimer();
        loadQuestion();
    }
    else{

        $("#game-over").html(`<p>Game Over!</p><br><p>Correct Answers: ${correctlyAnswered}</p><br><p>Incorrect Answers: ${incorrectlyAnswered}</p><br><p>Unanswered: ${unanswered}</p>`).show();
    }
}




