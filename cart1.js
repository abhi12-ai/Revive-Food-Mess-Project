function toggleLove() {
    const loveButton = document.querySelector('.love-button');
    loveButton.classList.toggle('red');
}

let count = 1;

function increaseCount() {
    count++;
    document.getElementById('count').textContent = count;
}

function decreaseCount() {
    if (count > 1) {
        count--;
        document.getElementById('count').textContent = count;
    }
}
