let quotes = document.querySelectorAll(".flashing-quotes p");
let counter = 1;
let quote1 = document.querySelector(".quote1");




setInterval(setCounter, 7000);

function setCounter() {
  counter++



  switch (counter) {
      case 1:

        quotes[0].style.opacity = 1;
        quotes[1].style.opacity = 0;
        quotes[2].style.opacity = 0;

      break;

      case 2:

      quotes[0].style.opacity = 0;
      quotes[1].style.opacity = 1;
      quotes[2].style.opacity = 0;

      break;

      case 3:

      quotes[0].style.opacity = 0;
      quotes[1].style.opacity = 0;
      quotes[2].style.opacity = 1;

      counter = 0;


      break;





  }
}
