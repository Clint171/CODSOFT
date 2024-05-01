function alternateHook() {
    var hookContainer = document.querySelector('.hook-container');
    var hook = document.querySelector('.hook');

    hook.classList.add('hide');
    
    setTimeout(function() {
      if (hook.innerText === "FREE DELIVERY") {
        hook.innerText = "At Clint's stores";
      } else {
        hook.innerText = "FREE DELIVERY";
      }
      hook.classList.remove('hide');
    }, 1000);
}

setInterval(alternateHook, 5000);

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});