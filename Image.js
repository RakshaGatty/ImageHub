
       document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const thumbnails = document.querySelectorAll(".thumbnail");
  let currentIndex = 0;

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
          currentIndex = index;
          slideTo(currentIndex);
      });
  });

  function slideTo(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      slideTo(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      slideTo(currentIndex);
  }

  document.querySelector(".arrow-left").addEventListener("click", prevSlide);
  document.querySelector(".arrow-right").addEventListener("click", nextSlide);
});

   