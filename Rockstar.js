document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });
});

const audio = document.getElementById('audio');
const video = document.getElementById('rock-video');

video.addEventListener('play', () => {
  if (!audio.paused) {
    audio.pause();
  }
});
