function showMessage(message) {
    alert(message);
}


function calculateBand() {

    const listening = parseFloat(
        document.getElementById("listening").value
    );

    const reading = parseFloat(
        document.getElementById("reading").value
    );

    const writing = parseFloat(
        document.getElementById("writing").value
    );

    const speaking = parseFloat(
        document.getElementById("speaking").value
    );


    if (
        isNaN(listening) ||
        isNaN(reading) ||
        isNaN(writing) ||
        isNaN(speaking)
    ) {

        alert("Please select all four scores.");

        return;
    }


    const average =
        (listening + reading + writing + speaking) / 4;


    let overall;


    if (average % 1 >= 0.75) {

        overall = Math.ceil(average * 2) / 2;

    } else if (average % 1 >= 0.25) {

        overall = Math.floor(average * 2) / 2;

    } else {

        overall = Math.round(average);
    }


    document.getElementById("overall-score").textContent =
        overall.toFixed(1);


    document.getElementById("result-message").textContent =
        "Great job! Your estimated IELTS overall band is " +
        overall.toFixed(1) + ".";
}