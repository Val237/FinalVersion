# Projekt: Kind RockStars 🎸

Eine interaktive Webseite für Kinder zum Thema Rockmusik, Instrumente und Musikgeschichte.

## 📝 Inhaltsverzeichnis

- [Übersicht](#übersicht)
- [Projektstruktur](#projektstruktur) 
- [Architektur](#architektur)
- [Technologien](#technologien)
- [Features](#features)
- [Installation](#installation)
- [Nutzung](#nutzung)
- [Tests](#tests)
- [Autoren](#autoren)
- [Lizenz](#lizenz)

## 🎯 Übersicht

Kind RockStars ist eine responsive Webseite, die Kindern die Geschichte der Rockmusik, Musikinstrumente und berühmte Rockstars auf spielerische Weise näherbringt. Die Seite bietet interaktive Elemente wie Quiz, Audio-Player und einen Bandnamen-Generator.

## 📂 Projektstruktur

```
root/
├── index.html          # Landing Page
├── instrumente.html    # Instrumente-Sektion
├── rockstar.html      # Rockstar-Sektion
├── quizz.html         # Quiz-Sektion
├── assets/
│   ├── css/
│   │   └── Stylesheet.css
│   ├── js/
│   │   ├── Features.js
│   │   ├── Index.js
│   │   ├── Rockstar.js
│   │   └── quizz.js
│   ├── images/
│   │   ├── Instrumente/
│   │   ├── Rock-Bilder/
│   │   └── startseite-bilder/
│   ├── sounds/
│   └── video/
├── robots.txt
└── Sitemap.xml
```

## 🏗 Architektur

Die Anwendung folgt einer klassischen Frontend-Architektur:

- **Präsentationsschicht**: HTML5 Templates
- **Styling**: CSS3 mit Grid/Flexbox
- **Logik**: Vanilla JavaScript (ES6+)
- **Assets**: Medieninhalte (Audio, Video, Bilder)

### Komponenten

- Navigation System
- Audio Player
- Quiz Engine
- Bildergalerie/Slider
- Bandnamen-Generator
- Event-Booking System

## 💻 Technologien

### Frontend
- HTML5
  - Semantische Struktur
  - Audio/Video Elements
  - Forms
  
- CSS3
  - Grid Layout
  - Flexbox
  - Media Queries 
  - Animationen
  - Custom Properties
  
- JavaScript (ES6+)
  - DOM Manipulation
  - Event Handling
  - Audio Controls
  - Local Storage

### Development Tools
- Git/GitHub
- VS Code
- Chrome DevTools

## ✨ Features

- Responsive Design für mobile und Desktop Nutzung
- Interaktives Musikquiz mit verschiedenen Schwierigkeitsgraden
- Integrierter Audio-Player für Instrumentensamples
- Dynamischer Bandnamen-Generator
- Rock-Geschichte Timeline
- Instrumenten-Lernsektion mit Video-Tutorials
- Event-Buchungssystem für Konzerte
- Social Media Integration

## 🚀 Installation

1. Repository klonen:
```bash
git clone https://github.com/username/kind-rockstars.git
```

2. In Projektverzeichnis wechseln:
```bash
cd kind-rockstars
```

3. Lokalen Server starten (z.B. mit VS Code Live Server)

## 💡 Nutzung

Beschreibe hier wie man:
- Die Webseite navigiert
- Das Quiz spielt
- Instrumente lernt
- Konzerttickets bucht
etc.

## 🧪 Tests

Beschreibe hier die Testmethoden:
- Browser-Kompatibilität
- Responsive Design Tests
- Performance Tests
- Unit Tests (falls vorhanden)

## ✍️ Autoren

- Max Mustermann - *Initialer Code* - [GitHub](https://github.com/maxmustermann)

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert - siehe [LICENSE.md](LICENSE.md)