let arrow = document.querySelector("#arrowDown");


let lastKnownScrollPosition = 0;
let ticking = false;




function doSomething(scrollPos) {

  if (lastKnownScrollPosition == 0) {

      arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
}

setTimeout(doSomething, 2000);

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
