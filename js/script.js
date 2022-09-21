function OnCardHover(event) {
    let line = event.querySelector(".card__top-line");
    line.style.width = "10%";
}

function OnCardLeave(event) {
    let line = event.querySelector(".card__top-line");
    line.style.width = "100%";
}