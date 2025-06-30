// Gruppename generieren

const generateBtn = document.getElementById('generate-bandname');
const bandOutput = document.getElementById('bandname-output');

const adjectives = ['Donnernde', 'Feurige', 'Wilde', 'Krachende', 'Glühende', 'Rebellische', 'Düstere', 'Elektrische'];
const nouns = ['Gitarren', 'Stürme', 'Blitze', 'Vibes', 'Rebellen', 'Melodien', 'Riffs', 'Legenden'];

generateBtn.addEventListener('click', function () {
  const adjIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);
  const adj = adjectives[adjIndex];
  const noun = nouns[nounIndex];
  bandOutput.textContent = adj + ' ' + noun;
});

//  Rock‑Facts durchklicken

const facts = [
  'Wusstest du, dass die E‑Gitarre 1931 erfunden wurde?',
  'Rockmusik entstand in den 1950er Jahren in den USA.',
  'Kurt Cobain war der Frontmann von Nirvana.',
  'Freddie Mercury hatte eine vier‑Oktaven‑Stimme.',
  'Das längste Gitarrensolo dauerte über 24 Stunden!'
];
let factIndex = 0;
const factTextEl = document.getElementById('fact-text');
const nextFactBtn = document.getElementById('next-fact');

nextFactBtn.addEventListener('click', function () {
  factIndex = (factIndex + 1) % facts.length;
  factTextEl.textContent = facts[factIndex];
});


// Sounds spielen per Klick auf Bild – stoppt vorherigen Sound

const instruments = document.querySelectorAll('.instrument');
let currentAudio = null;

for (const inst of instruments) {
  inst.addEventListener('click', function () {
    // Läuft bereits ein Sound? Dann stoppen.
    if (currentAudio !== null) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const soundPath = inst.dataset.sound;
    currentAudio = new Audio(soundPath);
    currentAudio.play();
  });
}

// Slider‑Fabrikfunktion, übernimmt Prev/Next‑Logik, blendet Buttons aus, wenn am Rand

function initSlider(options) {
  const container = document.querySelector(options.containerSelector);
  const slides = container.querySelectorAll(options.slideSelector);
  const prevBtn = document.querySelector(options.prevBtnSelector);
  const nextBtn = document.querySelector(options.nextBtnSelector);
  let index = 0;

  function update() {
    // verschieben
    container.style.transform = 'translateX(-' + (index * 100) + '%)';
    // Prev‑Button ein/ausblenden
    prevBtn.style.display = index === 0 ? 'none' : '';
    // Next‑Button ein/ausblenden
    nextBtn.style.display = index === slides.length - 1 ? 'none' : '';
  }

  update();

  prevBtn.addEventListener('click', function () {
    if (index > 0) {
      index--;
      update();
    }
  });
  nextBtn.addEventListener('click', function () {
    if (index < slides.length - 1) {
      index++;
      update();
    }
  });
}

// Rockgeschichte‑Slider initialisieren
initSlider({
  containerSelector: '.rock-history-slider .slides',
  slideSelector: '.rock-history-slider .sliderock',
  prevBtnSelector: '.rock-history-slider .slider-nav.prev',
  nextBtnSelector: '.rock-history-slider .slider-nav.next'
});

// Teaser‑Slider initialisieren
initSlider({
  containerSelector: '.teaser-slides',
  slideSelector: '.teaser-slider .sliderock',
  prevBtnSelector: '.teaser-slider .slider-nav.prev',
  nextBtnSelector: '.teaser-slider .slider-nav.next'
});


// Modal für Rockgeschichte‑Details, öffnet bei Klick auf Slide

const modal = document.getElementById('history-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.modal-close');

// Klick auf Slide öffnet Modal mit Titel & Text
const slideContents = document.querySelectorAll('.rock-history-slider .slide-content');
for (let i = 0; i < slideContents.length; i++) {
  const slide = slideContents[i];
  slide.addEventListener('click', function () {
    const title = slide.querySelector('.overlay h3').textContent;
    const text = slide.querySelector('.overlay p').textContent;
    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.classList.add('active');
  });
}

// Modal schließen (Button und Klick hinter Content)
closeBtn.addEventListener('click', function () {
  modal.classList.remove('active');
});
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
