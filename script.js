const cards = document.querySelectorAll(".card-item")

function flipCard() {
    cards.classList.toggle("flip")
}
cards.forEach(card => {
    card.addEventListener("click", flipCard)
})
