
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}
var navbar = document.getElementById('navbar');

navbar.addEventListener('mouseenter', function() {
  navbar.classList.add('show');
});

navbar.addEventListener('mouseleave', function() {
  navbar.classList.remove('show');
});
window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logoPrincipal');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Cambia este valor según tus necesidades
      logo.classList.add('visible');
  } else {
      logo.classList.remove('visible');
  }
});