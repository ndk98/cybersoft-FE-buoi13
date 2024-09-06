document.querySelector("#my-form").onsubmit = function (event) {
    event.preventDefault();

    let message = "Chúc mừng, bạn đã đủ điểm.";
    let classAddition = "success";

    if (!checkScore()) {
        message = "Bạn không đủ điểm!";
        classAddition = "false";
    }

    let notiElem = document.querySelector("#notification");

    notiElem.classList.remove("success");
    notiElem.classList.remove("false");

    notiElem.innerHTML = message;
    notiElem.classList.add(classAddition);
    notiElem.style.display = "block";
};

function checkScore() {
    let flag = true;
    let scoreA = document.querySelector("#score-a").value,
        scoreB = document.querySelector("#score-b").value,
        scoreC = document.querySelector("#score-c").value,
        scoreArea = document.querySelector("#area").value,
        scoreObject = document.querySelector("#object").value,
        scoreStandard = document.querySelector("#score-standard").value;

    if (scoreStandard.length === 0) {
        scoreStandard = 0;
    }

    if (scoreA.length === 0) {
        scoreA = 0;
    }

    if (scoreB.length === 0) {
        scoreB = 0;
    }

    if (scoreC.length === 0) {
        scoreC = 0;
    }

    scoreStandard = parseInt(scoreStandard);
    scoreA = parseInt(scoreA);
    scoreB = parseInt(scoreB);
    scoreC = parseInt(scoreC);

    // Check score == 0
    let hasScoreZero = scoreA == 0 || scoreB == 0 || scoreC == 0;

    let scoreTotal =
        scoreA +
        scoreB +
        scoreC +
        getPriorityAreaScore(scoreArea) +
        getPriorityObject(scoreObject);

    printScoreTotal(scoreTotal);

    if (!hasScoreZero && scoreStandard != 0 && scoreTotal >= scoreStandard) {
        flag = true;
    } else {
        flag = false;
    }

    return flag;
}

function printScoreTotal(scoreTotal) {
    document.querySelector("#score-total").innerHTML = scoreTotal;
}

function getPriorityAreaScore(area) {
    let score = 0;

    switch (area) {
        case "A":
            score = 2;
            break;
        case "B":
            score = 1;
            break;
        case "C":
            score = 0.5;
            break;

        default:
            break;
    }

    return score;
}

function getPriorityObject(object) {
    let score = 0;

    switch (object) {
        case "1":
            score = 2.5;
            break;
        case "2":
            score = 1.5;
            break;
        case "3":
            score = 1;
            break;

        default:
            break;
    }

    return score;
}
