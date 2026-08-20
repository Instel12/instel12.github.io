// idk about Message.js but this does NOT deserve its own file 😭

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("RandomButton3000");
    const links = [
        "https://github.com/Instel12/EP/raw/refs/heads/main/Experimental%20Penguins.swf",
        "https://instel12.github.io/newenglish/",
        "https://google.com/",
        "https://genius.com/Genius-english-translations-psy-gangnam-style-english-translation-lyrics"
    ];
    const titles = [
        "Download an archive of Experimental Penguins",
        "Go to my first website",
        "Go to Google",
        "Check out Gangnam Style's lyrics in English"
    ];

    const randomInt = Math.floor(Math.random() * links.length);

    button.innerText = titles[randomInt];
    button.onclick = () => {
        window.open(links[randomInt], "_blank");
    };
});

function MakeTheSiteTweakOutPleaseWorking2026NoVirusLegit() {
    document.querySelectorAll("*").forEach(element => {
        element.style.transform = `rotate(${Math.random() * 45-22.5}deg)`;
    });
}