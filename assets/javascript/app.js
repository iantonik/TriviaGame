var trivia = [

    {
        question: "Who was first U.S. president to be impeached?",
        answers: [
            'Bill Clinton',
            'Andrew Johnson',
            'Richard Nixon',
        ],
        correctAnswer: 'Andrew Johnson'
    },
    {
        question: "Who became both a vice president and president of the United States without ever being elected to either office?",
        answers: [
            'Martin Van Buren,',
            'Theodore Roosevelt',
            'Gerald Ford'
        ],
        correctAnswer: 'Gerald Ford'
    },
    {
        question: "Who was the first female Prime Minister of a European country?",
        answers: [
            'Margaret Thatcher',
            'Gro Harlem Brundtland',
            'Sirimavo Bandaranaike',
        ],
        correctAnswer: 'Margaret Thatcher'
    },
    {
        question: "The Bill of Rights contains how many of the first amendments to the United States Constitution?",
        answers: [
            "10",
            '7',
            '15',
        ],
        correctAnswer: '10'
    },
    {
        question: "Who was the first U.S. president that was born a citizen of the United States?",
        answers: [
            'John Quincy Adams',
            'Martin Van Buren',
            'Andrew Jackson'
        ],
        correctAnswer: 'Martin Van Buren'
    },
]

var iterator = 0;
var sec = 10;
var timer;
var correct = 0;
var incorrect = 0;



$(document).ready(function () {
    $("#start").click(function () {
        $("#start").hide();
        startTimer();
        loadQuestion();
    });
    $("#re-start").click(function () {
        restartGame();
        startTimer();
        loadQuestion();
    });
})

function loadQuestion() {
    $("#question").html(trivia[iterator].question);
    trivia[iterator].answers.forEach(element => {
        $(`<p onclick="validateAnswer(this.id)" class="answer" id="${element}">${element}</p>`).appendTo(`#answers`);
    });
}

function tick() {
    document.getElementById("timer").innerHTML = `Time Remaining: ${sec} Seconds`;
    sec--;
    if (sec < 0) {
        $("#answers").empty();
        $("#time-is-up").html(`<p> Time is up. <br> The answer is ${trivia[iterator].correctAnswer}.</p>`).show();
        clearInterval(timer);
        setTimeout(nextQuestion, 2000);
    }
};

function startTimer() {
    tick();
    timer = setInterval(tick, 1000);
}

function validateAnswer(ansId) {
    $("#answers").empty();
    clearInterval(timer);
    setTimeout(nextQuestion, 2000);

    if (ansId === trivia[iterator].correctAnswer) {
        $("#correct-answer").html(`<p> Correct Answer.</p>`).show();
        correct++
    }
    else {
        $("#incorrect-answer").html(`<p> Incorrect Answer.</p><br> The answer is ${trivia[iterator].correctAnswer}.</p>`).show();
        incorrect++;
    }
}

function nextQuestion() {
    iterator++
    hideMessages();
    $("#answers").empty();
    if (iterator >= trivia.length) {
        clearInterval(timer);
        $("#re-start").show();
        $("#game-over").html(`<p>Game Over!</p><p>Correct Answers: ${correct}</p><p>Incorrect Answers: ${incorrect}</p><p>Unanswered: ${trivia.length - correct - incorrect}</p>`).show();
    }
    else {
        sec = 10;
        startTimer();
        loadQuestion();
    }
}

function hideMessages() {
    $("#correct-answer").hide();
    $("#incorrect-answer").hide();
    $("#time-is-up").hide();
}

function restartGame() {
    iterator = 0;
    sec = 10;
    correct = 0;
    incorrect = 0;
    $("#answers").empty();
    $("#re-start").hide();
    $("#game-over").hide();
}




