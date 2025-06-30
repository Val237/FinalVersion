// Drei Level, pro Level 5 Fragen, verschiedene Typen
const fragen = [
  // Level 1: Anfänger
  [
    {
      typ: "audio",
      frage: "Welches Instrument hörst du hier?",
      audio: "sounds/guitar.mp3",
      antworten: ["E-Gitarre", "Klavier", "Schlagzeug"],
      korrekt: 0
    },
    {
      typ: "mc",
      frage: "Welche Band sang „We Will Rock You“?",
      antworten: ["Queen", "AC/DC", "Beatles"],
      korrekt: 0
    },
    {
      typ: "text",
      frage: "Wie nennt man eine elektrische Gitarre mit 6 Saiten?",
      korrektText: "E-Gitarre"
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du hier?",
      audio: "sounds/drums.mp3",
      antworten: ["Bass", "Schlagzeug", "Saxofon"],
      korrekt: 1
    },
    {
      typ: "mc",
      frage: "Was braucht man, um ein Rockstar zu sein?",
      antworten: ["Spaß an Musik", "Nur Noten lesen können", "Eine Geige"],
      korrekt: 0
    },
    {
      typ: "mc",
      frage: "Welche Band war Freddie Mercury der Sänger?",
      antworten: ["Nirvana", "Queen", "Metallica"],
      korrekt: 1 
    },
    {
      typ: "mc",
      frage: "Was trägt ein typischer Rockstar oft auf der Bühne?",
      antworten: ["Anzug und Krawatte", "Lederjacke", "Jogginganzug"],
      korrekt: 1 
    }
    
  ],
  // Level 2: Fortgeschrittene
  [
    {
      typ: "audio",
      frage: "Welches Instrument hörst du hier?",
      audio: "sounds/bass.mp3",
      antworten: ["Bass", "Schlagzeug", "Keyboard"],
      korrekt: 0 
    },
    {
      typ: "mc",
      frage: "Welche dieser Bands kommt aus Deutschland?",
      antworten: ["The Rolling Stones", "Queen", "Scorpions"],
      korrekt: 2 
    },
    {
      typ: "text",
      frage: "Vervollständige: Der Sänger von Nirvana heißt Kurt _______.",
      korrektText: "Cobain"
    },
    {
      typ: "mc",
      frage: "Wer spielt meistens im Stehen?",
      antworten: ["Pianist", "Schlagzeuger", "E-Gitarrist"],
      korrekt: 2 
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du?",
      audio: "sounds/piano.mp3",
      antworten: ["E-Gitarre", "Klavier", "Schlagzeug"],
      korrekt: 1 
    },
    {
      typ: "audio",
      frage: "Welche Rocklegende hörst du hier singen?",
      audio: "sounds/freddie.mp3",
      antworten: ["Freddie Mercury", "Kurt Cobain", "Elvis Presley"],
      korrekt: 0 
    },
    {
      typ: "mc",
      frage: "Was ist ein typisches Accessoire für Rockstars?",
      antworten: ["Krawatte", "Sonnenbrille", "Hosenträger"],
      korrekt: 1 
    }
  ],
  // Level 3: Profis  
  [
    {
      typ: "mc",
      frage: "Welches Festival gilt als das größte Rockfestival der Welt?",
      antworten: ["Lollapalooza", "Woodstock", "Tomorrowland"],
      korrekt: 1
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du?",
      audio: "sounds/saxophone.mp3",
      antworten: ["Saxofon", "Trompete", "Keyboard"],
      korrekt: 0 
    },
    {
      typ: "text",
      frage: "Wie nennt man das Kopfschütteln im Takt beim Rocken? (Englisch)",
      korrektText: "Headbanging"
    },
    {
      typ: "mc",
      frage: "Wie heißt Bono (Sänger von U2) mit echtem Vornamen?",
      antworten: ["Paul", "Brian", "David"],
      korrekt: 0 
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du?",
      audio: "sounds/drums-advanced.mp3",
      antworten: ["Schlagzeug", "Bass", "Synthesizer"],
      korrekt: 0 
    },
    {
      typ: "text",
      frage: "Welche Sängerin ist bekannt als die ‚Queen of Percussion‘ und spielte mit Prince?",
      korrektText: "Sheila E."
    },
    {
      typ: "text",
      frage: "Wie heißt der Frontmann von Nirvana?",
      korrektText: "Kurt Cobain"
    }
  ],

];
// 1. Fortschritt speichern
let aktuellesLevel = 0;
let aktuelleFrage  = 0;
let richtige       = 0;

// 2. Aktuell abgespielter Audio‑Player
let currentAudio = null;

// 3. Start: Erste Frage anzeigen
window.addEventListener('DOMContentLoaded', function () {
  zeigeFrage();
});

// 4. Frage anzeigen
function zeigeFrage () {
  const quizArea = document.getElementById('quiz-area');
  quizArea.innerHTML = '';

  // Level vorbei?
  if (aktuelleFrage >= fragen[aktuellesLevel].length) {
    zeigeLevelEnde();
    return;
  }

  const frage = fragen[aktuellesLevel][aktuelleFrage];

  // Fortschrittsinfo
  const fortschritt = document.createElement('div');
  fortschritt.textContent = 'Level ' + (aktuellesLevel + 1) + ', Frage ' + (aktuelleFrage + 1) + ' von ' + fragen[aktuellesLevel].length;
  quizArea.appendChild(fortschritt);

  // Container
  const frageDiv  = document.createElement('div');
  frageDiv.className = 'frage';

  // Fragentext
  const frageText = document.createElement('h2');
  frageText.textContent = frage.frage;
  frageDiv.appendChild(frageText);

  // === Audio‑Frage ===
  if (frage.typ === 'audio') {
    const audio = document.createElement('audio');
    audio.src = frage.audio;

    const btn = document.createElement('button');
    btn.textContent = '🎵 Sound abspielen';
    btn.className   = 'quiz-audio-btn';

    btn.addEventListener('click', function (event) {
      event.preventDefault();
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio      = audio;
      currentAudio.currentTime = 0;
      currentAudio.play();
    });

    frageDiv.appendChild(btn);
    frageDiv.appendChild(audio);

    const form = document.createElement('form');
    for (let index in frage.antworten) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type  = 'radio';
      input.name  = 'antwort';
      input.value = index;
      label.appendChild(input);
      label.appendChild(document.createTextNode(frage.antworten[index]));
      form.appendChild(label);
      form.appendChild(document.createElement('br'));
    }
    frageDiv.appendChild(form);

  // === Multiple‑Choice ===
  } else if (frage.typ === 'mc') {
    const form = document.createElement('form');
    for (let index in frage.antworten) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type  = 'radio';
      input.name  = 'antwort';
      input.value = index;
      label.appendChild(input);
      label.appendChild(document.createTextNode(frage.antworten[index]));
      form.appendChild(label);
      form.appendChild(document.createElement('br'));
    }
    frageDiv.appendChild(form);

  // === Freitext ===
  } else if (frage.typ === 'text') {
    const form  = document.createElement('form');
    const input = document.createElement('input');
    input.type        = 'text';
    input.name        = 'antwort';
    input.placeholder = 'Deine Antwort';
    form.appendChild(input);
    frageDiv.appendChild(form);
  }

  // 5. Button: Antwort prüfen
  const checkBtn = document.createElement('button');
  checkBtn.textContent = 'Antwort überprüfen';
  checkBtn.className   = 'quiz-btn';
  frageDiv.appendChild(checkBtn);

  // Feedback
  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback';
  frageDiv.appendChild(feedback);

  quizArea.appendChild(frageDiv);

  // === 6. Auswertung ===
  checkBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let istRichtig = false;

    // Radio‑Fragen
    if (frage.typ === 'audio' || frage.typ === 'mc') {
      let antwort = null;
      const inputs = frageDiv.querySelectorAll('input[name="antwort"]');
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          antwort = Number(inputs[i].value);
        }
      }
      if (antwort === frage.korrekt) {
        istRichtig = true;
      }

    // Text‑Fragen
    } else if (frage.typ === 'text') {
      const eingabe = frageDiv.querySelector('input[name="antwort"]');
      if (eingabe.value.trim().toLowerCase() === frage.korrektText.toLowerCase()) {
        istRichtig = true;
      }
    }

    // Feedback & Nächste Frage oder Wiederholung
    if (istRichtig) {
      feedback.textContent = '✅ Richtig!';
      feedback.className   = 'quiz-feedback richtig';
      richtige++;
      spieleSound('sounds/yeah.mp3');
      checkBtn.disabled = true;
      setTimeout(function () {
        aktuelleFrage++;
        zeigeFrage();
      }, 1100);
    } else {
      feedback.textContent = '❌ Falsch, versuch’s noch mal!';
      feedback.className   = 'quiz-feedback falsch';
      spieleSound('sounds/try-again.mp3');
    }
  });
}

// 7. Feedback‑Sounds abspielen
function spieleSound (url) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(url);
  currentAudio.play();
}

// 8. Level‑Ende anzeigen
function zeigeLevelEnde () {
  const quizArea = document.getElementById('quiz-area');
  let html  = '<h2>Level ' + (aktuellesLevel + 1) + ' geschafft!</h2>';
  html     += '<p>Du hast ' + richtige + ' von ' + fragen[aktuellesLevel].length + ' richtig beantwortet.</p>';
  if (richtige >= 3) {
    html += '<p>Super! Weiter zum nächsten Level.</p>';
  } else {
    html += '<p>Noch einmal versuchen!</p>';
  }
  if (aktuellesLevel < fragen.length - 1) {
    html += '<button class="quiz-btn" id="naechstesLevel">Nächstes Level</button>';
  } else {
    html += '<h2>Bravo, du bist ein echter Kinder-Rockstar! 🏆🎸</h2>';
  }
  quizArea.innerHTML = html;

  const nextBtn = document.getElementById('naechstesLevel');
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      aktuellesLevel++;
      aktuelleFrage = 0;
      richtige      = 0;
      zeigeFrage();
    });
  }
}
