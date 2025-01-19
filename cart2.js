function increaseCount(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}

function decreaseCount(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    if (count > 1) {
        count--;
        countElement.textContent = count;
    }
}
