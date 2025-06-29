const Nav = document.getElementById("appear");
const Anzeige = document.querySelector("#menu");

Nav.addEventListener("click", () => {
  Anzeige.classList.toggle("hidden");
});

const menuItems = document.querySelectorAll('.Lernen');

menuItems.forEach(items => {
    items.addEventListener('mouseover', () => {
        items.style.transform = 'scale(1.1)';
    })
    items.addEventListener('mouseout', ()=> {
        items.style.transform='';
        items.style.transition = 'transform 0.6s ease';
    })
});

// Page element for courses //
const Singen = document.getElementById('DieKurseSingen');
const Sclagzeug = document.getElementById('DieKurseSclagzeug');
const Klavier = document.getElementById('DieKurseKlavier');
const Guitarre = document.getElementById('DieKurseGuitarre');

//  Page Elements //
const MainPage = document.getElementById('One-Section');
const GuitarePage = document.getElementById('Guitare');
const SchlagZeugPage = document.getElementById('Schlagzeug');
const KlavierPage = document.getElementById('Klavier');
const SingenPage = document.getElementById('Singen');
const ReturnPage = document.querySelectorAll('.return');

function showPageSingen(){
    Singen.style.display = 'flex';
}
function showPageGuitarre(){
    Guitarre.style.display = 'flex';
}
function showPageSchlagzeug(){
    Sclagzeug.style.display = 'flex';
}
function showPageKlavier(){
    Klavier.style.display = 'flex';
}

SingenPage.addEventListener('click', ()=> {
    MainPage.style.display = 'none';
    showPageSingen();
})

ReturnPage.forEach(page=> {
    page.addEventListener('click', ()=>{
    MainPage.style.display='';
    
    const pages = [Singen, Klavier, Sclagzeug, Guitarre];
    pages.forEach(page => {
        page.style.display = 'none';
})})});

KlavierPage.addEventListener('click', ()=>{
    MainPage.style.display = 'none';
    showPageKlavier();
})
SchlagZeugPage.addEventListener('click', ()=>{
    MainPage.style.display ='none';
    showPageSchlagzeug();
})
GuitarePage.addEventListener('click',()=>{
    MainPage.style.display = 'none';
    showPageGuitarre();
})

function stopVideos() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.src = '';      // Leert das src
        iframe.src = src;     // Setzt es wieder zurück -> Video wird gestoppt
    });
}

ReturnPage.forEach(page => {
    page.addEventListener('click', () => {
        MainPage.style.display = '';
        
        const pages = [Singen, Klavier, Sclagzeug, Guitarre];
        pages.forEach(p => {
            p.style.display = 'none';
        });

        stopVideos(); // Videos stoppen
    });
});

const Schließen = document.getElementById('close');
const popFenster = document.getElementById('pop-up')
const OpenBtn = document.querySelectorAll(".OpenPop");

OpenBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popFenster.classList.add('open');
  });
});

Schließen.addEventListener('click', () => {
    popFenster.classList.remove('open');
});