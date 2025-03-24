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

  
  
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".custom-tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            // Hide all content sections
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");
            // Show corresponding content
            document.getElementById(this.dataset.target).classList.add("active");
        });
    });
});