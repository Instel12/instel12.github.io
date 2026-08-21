// idk about Message.js but this does NOT deserve its own file 😭

document.addEventListener("DOMContentLoaded", () => {
    GetRandom();
});

async function GetRandom() {
    const button = document.getElementById("RandomButton3000");

    const res = await fetch("/Assets/Data/RandomButton3000.json");
    const json = await res.json();

    const entries = Object.entries(json);
    const randomInt = Math.floor(Math.random() * entries.length);

    button.innerText = entries[randomInt][0];
    button.onclick = () => {
        window.open(entries[randomInt][1], "_blank");
    };
}

function MakeTheSiteTweakOutPleaseWorking2026NoVirusLegit() {
    document.querySelectorAll("*").forEach(element => {
        element.style.transform = `rotate(${Math.random() * 45-22.5}deg)`;
    });
}