const cards = document.querySelectorAll(".card-item");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockCard = false;

function flipCard() {
    if (lockCard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return
    } 
    secondCard = this;
    checkForMatch()
    
    // else {
    // hasFlippedCard = false;
    // secondCard = this;
    // checkForMatch()
    // }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetCard()
}

function unflipCard() {
    lockCard = true;

    setTimeout( () => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetCard()
    }, 1200)
}

function resetCard() {
    [hasFlippedCard, lockCard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function checkForMatch() {
    // cara cepat

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCard()

    // cara lambat

    // if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // disableMatch()
    // } else {
    // unflipCard()
    // }
}

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition
    })
})();

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})

const resetButton = document.querySelector(".reset-button")
function refresh() {
    location.reload()
}

resetButton.addEventListener("click", refresh)




