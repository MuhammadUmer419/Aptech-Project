let images = [
    "./img/bg-2.jpg",
    "./img/bg-4.jpg",
  ];

  let currentIndex = 0;
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    let banner = document.getElementById("banner");
    banner.style.backgroundImage = 'url("' + images[currentIndex] + '")';

    // Progress Indicator Update
    let lines = document.querySelectorAll(".line");
    lines.forEach((line, index) => {
      line.classList.remove("active");
      if (index === currentIndex) {
        line.classList.add("active");
      }
    });

    console.log("Changing background to:", images[currentIndex]);
  }

  window.onload = function() {
    setInterval(changeBackground, 3000);
  };