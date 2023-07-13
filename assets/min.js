document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll(".more-button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (btn) {
      btn.classList.remove("clicked");
    });
    button.classList.add("clicked");
  });
});

});

function makeProminent(card) {
   const cards = document.getElementsByClassName('cardd');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('prominent');
  }
  card.classList.add('prominent');
}
function toggleMenue(displayState){
  const nav = document.getElementById('navigation');
  const closeico = document.getElementById('close-ico');

  nav.style.display = displayState ;
  closeico.style.display = displayState ;
}