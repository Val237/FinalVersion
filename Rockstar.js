document.addEventListener("DOMContentLoaded", () => {  //Wartet, bis der gesamte HTML-Inhalt geladen ist, bevor der JavaScript-Code ausgeführt wird.
  const slider = document.getElementById("slider");  //Holt das Karussell-Element (slider) und alle Slides darin.
  const slides = slider.querySelectorAll(".slide"); 
  const totalSlides = slides.length;    //totalSlides: Gesamtanzahl der Slides.
  let currentIndex = 0;    //currentIndex: Index der aktuell angezeigten Slide (beginnt bei 0).

  function updateSlidePosition() {   //Funktion, die das Karussell horizontal verschiebt, um die aktuelle Slide anzuzeigen.
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;  //Verwendet transform: translateX(...), um die Slides jeweils um 100vw (Fensterbreite) zu verschieben.
  }

  document.getElementById("next").addEventListener("click", () => {  //Beim Klick auf den "next"-Button: Erhöht den Slide-Index.
    currentIndex = (currentIndex + 1) % totalSlides;  //Wenn das Ende erreicht ist, springt es zurück zum ersten Slide (% totalSlides).
    updateSlidePosition();  //Aktualisiert die Position des Karussells.
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; //Wenn man beim ersten Slide zurückgeht, springt es zum letzten (durch Modulo-Berechnung).
    updateSlidePosition();
  });
});

const audio = document.getElementById('audio');     //Holt das Audio-Element.
const video = document.getElementById('rock-video'); //Holt das Video-Element.

video.addEventListener('play', () => {  //Wenn das Video abgespielt wird,
  if (!audio.paused) { // Falls das Audio bereits läuft, wird es pausiert, damit sich die beiden Sounds nicht überlagern.
    audio.pause();
  }
});
