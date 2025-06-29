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
    }
  ],
  // Level 2: Fortgeschrittene
  [
    {
      typ: "audio",
      frage: "Welches Instrument hörst du hier?",
      audio: "sounds/bass.mp3",
      antworten: ["Bass", "Schlagzeug", "Keyboard"],
      korrekt: 0 // Index für "Bass"
    },
    {
      typ: "mc",
      frage: "Welche dieser Bands kommt aus Deutschland?",
      antworten: ["The Rolling Stones", "Queen", "Scorpions"],
      korrekt: 2 // Index für "Scorpions" (Index 2)
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
      korrekt: 2 // Index für "E-Gitarrist"
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du?",
      audio: "sounds/piano.mp3",
      antworten: ["E-Gitarre", "Klavier", "Schlagzeug"],
      korrekt: 1 // Index für "Klavier"
    }
  ],
  // Level 3: Profis  
  [
    {
      typ: "mc",
      frage: "Welches Festival gilt als das größte Rockfestival der Welt?",
      antworten: ["Lollapalooza", "Woodstock", "Tomorrowland"],
      korrekt: 1 // "Woodstock"
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du?",
      audio: "sounds/saxophone.mp3",
      antworten: ["Saxofon", "Trompete", "Keyboard"],
      korrekt: 0 // "Saxofon"
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
      korrekt: 0 // "Paul"
    },
    {
      typ: "audio",
      frage: "Welches Instrument hörst du?",
      audio: "sounds/drums-advanced.mp3",
      antworten: ["Schlagzeug", "Bass", "Synthesizer"],
      korrekt: 0 // "Schlagzeug"
    }
  ],

];

//  2. Fortschritt speichern 
let aktuellesLevel = 0;
let aktuelleFrage = 0;
let richtige = 0;

// === 3. Aktuell abgespielter Audio-Player ===
let currentAudio = null;

// === 4. Start: Erste Frage anzeigen ===
window.addEventListener("DOMContentLoaded", () => {
  zeigeFrage();
});

// === 5. Frage anzeigen ===
function zeigeFrage() {
  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML = ""; // Bereich leeren

  // Wenn Level vorbei, Ergebnis anzeigen
  if (aktuelleFrage >= fragen[aktuellesLevel].length) {
    zeigeLevelEnde();
    return;
  }

  const frage = fragen[aktuellesLevel][aktuelleFrage];

  // Fortschrittsanzeige
  const fortschritt = document.createElement("div");
  fortschritt.textContent = `Level ${aktuellesLevel + 1}, Frage ${aktuelleFrage + 1} von ${fragen[aktuellesLevel].length}`;
  quizArea.appendChild(fortschritt);

  // Container für Frage
  const frageDiv = document.createElement("div");
  frageDiv.className = "frage";

  // Fragentext
  const frageText = document.createElement("h2");
  frageText.textContent = frage.frage;
  frageDiv.appendChild(frageText);

  // --- Audio-Frage ---
  if (frage.typ === "audio") {
    // Erzeuge Audio-Element
    const audio = document.createElement("audio");
    audio.src = frage.audio;
    // Button zum Abspielen
    const btn = document.createElement("button");
    btn.textContent = "🎵 Sound abspielen";
    btn.className = "quiz-audio-btn";
    btn.addEventListener("click", event => {
      event.preventDefault();
      // Vorherigen Sound stoppen
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      // Neuen Sound starten
      currentAudio = audio;
      audio.currentTime = 0;
      audio.play();
    });
    frageDiv.appendChild(btn);
    frageDiv.appendChild(audio);

    // Antwortmöglichkeiten (Radio)
    const form = document.createElement("form");
    for (let index in frage.antworten) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "antwort";
      input.value = index;
      label.appendChild(input);
      label.appendChild(document.createTextNode(frage.antworten[index]));
      form.appendChild(label);
      form.appendChild(document.createElement("br"));
    }
    frageDiv.appendChild(form);

    // --- Multiple-Choice ---
  } else if (frage.typ === "mc") {
    const form = document.createElement("form");
    for (let index in frage.antworten) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "antwort";
      input.value = index;
      label.appendChild(input);
      label.appendChild(document.createTextNode(frage.antworten[index]));
      form.appendChild(label);
      form.appendChild(document.createElement("br"));
    }
    frageDiv.appendChild(form);

    // --- Freitext ---
  } else if (frage.typ === "text") {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "antwort";
    input.placeholder = "Deine Antwort";
    form.appendChild(input);
    frageDiv.appendChild(form);
  }

  // Button: Antwort überprüfen
  const checkBtn = document.createElement("button");
  checkBtn.textContent = "Antwort überprüfen";
  checkBtn.className = "quiz-btn";
  frageDiv.appendChild(checkBtn);

  // Feedback-Bereich
  const feedback = document.createElement("div");
  feedback.className = "quiz-feedback";
  frageDiv.appendChild(feedback);

  quizArea.appendChild(frageDiv);

  // === 6. Antwort auswerten ===
  checkBtn.addEventListener("click", event => {
    event.preventDefault();
    let istRichtig = false;

    // Radio-Fragen (Audio & MC)
    if (frage.typ === "audio" || frage.typ === "mc") {
      let antwort = null;
      const inputs = frageDiv.querySelectorAll('input[name="antwort"]');
      for (let input of inputs) {
        if (input.checked) {
          antwort = Number(input.value);
        }
      }
      if (antwort === frage.korrekt) istRichtig = true;

      // Text-Fragen
    } else if (frage.typ === "text") {
      const eingabe = frageDiv.querySelector('input[name="antwort"]');
      if (eingabe.value.trim().toLowerCase() === frage.korrektText.toLowerCase()) {
        istRichtig = true;
      }
    }

    // Feedback & Fortschritt
    if (istRichtig) {
      feedback.textContent = "✅ Richtig!";
      feedback.className = "quiz-feedback richtig";
      richtige++;
      spieleSound("sounds/yeah.mp3");
      checkBtn.disabled = true;
      setTimeout(() => {
        aktuelleFrage++;
        zeigeFrage();
      }, 1100);
    } else {
      feedback.textContent = "❌ Falsch, versuch’s noch mal!";
      feedback.className = "quiz-feedback falsch";
      spieleSound("sounds/try-again.mp3");
    }
  });
}

// === 7. Feedback-Sounds abspielen (stoppt vorherigen) ===
function spieleSound(url) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(url);
  currentAudio.play();
}

// === 8. Level-Ende anzeigen und Nächstes Level-Button ===
function zeigeLevelEnde() {
  const quizArea = document.getElementById("quiz-area");
  let html = `<h2>Level ${aktuellesLevel + 1} geschafft!</h2>`;
  html += `<p>Du hast ${richtige} von ${fragen[aktuellesLevel].length} richtig beantwortet.</p>`;
  if (richtige >= 3) {
    html += "<p>Super! Weiter zum nächsten Level.</p>";
  } else {
    html += "<p>Noch einmal versuchen!</p>";
  }
  if (aktuellesLevel < fragen.length - 1) {
    html += `<button class="quiz-btn" id="naechstesLevel">Nächstes Level</button>`;
  } else {
    html += "<h2>Bravo, du bist ein echter Kinder-Rockstar! 🏆🎸</h2>";
  }
  quizArea.innerHTML = html;

  // Event für Nächstes Level
  const nextBtn = document.getElementById("naechstesLevel");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      aktuellesLevel++;
      aktuelleFrage = 0;
      richtige = 0;
      zeigeFrage();
    });
  }
}