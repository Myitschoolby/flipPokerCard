const flip = function() {
    const card = document.querySelector('.card');
    const next = document.querySelector('.card_button_open');

    next.addEventListener('click', function() {
        card.classList.toggle('flip');
    });
};

window.addEventListener('load', function() {
    flip();
});