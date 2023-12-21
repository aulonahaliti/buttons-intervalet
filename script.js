let intervalId;

function startInterval() {
    intervalId = setInterval(displayDate, 1000);
}

function stopInterval() {
    clearInterval(intervalId);
}

function displayDate() {
    const currentDate = new Date();
    const outputElement = document.getElementById("output");
    outputElement.textContent = "Current Date" + currentDate.toLocaleString();
}

