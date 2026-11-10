
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");
const finalSection = document.getElementById("finalSection");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const replayBtn = document.getElementById("replayBtn");

// ABRIR CARTA
openBtn.addEventListener("click", () => {

    envelope.classList.add("opening");

    const flap = document.querySelector(".envelope-flap");
    const seal = document.querySelector(".seal");

    flap.style.transform = "rotateX(180deg)";
    seal.style.opacity = "0";

    setTimeout(() => {
        envelopeSection.style.display = "none";
        letterSection.style.display = "block";

        requestAnimationFrame(() => {
            letterSection.classList.add("show");
        });

    }, 700);
});

// CERRAR CARTA Y MOSTRAR SORPRESA
closeBtn.addEventListener("click", () => {

    letterSection.classList.remove("show");
    letterSection.classList.add("hide");

    setTimeout(() => {
        letterSection.style.display = "none";
        letterSection.classList.remove("hide");

        finalSection.style.display = "block";

        requestAnimationFrame(() => {
            finalSection.classList.add("show");
        });

        createHearts();

    }, 650);
});

// VOLVER A LEER
replayBtn.addEventListener("click", () => {

    finalSection.style.display = "none";
    finalSection.classList.remove("show");

    envelopeSection.style.display = "block";

    const flap = document.querySelector(".envelope-flap");
    const seal = document.querySelector(".seal");

    flap.style.transform = "rotateX(0deg)";
    seal.style.opacity = "1";

});

// CORAZONES FLOTANTES
function createHearts() {

    const heartsContainer = document.getElementById("hearts");

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (4 + Math.random() * 5) + "s";
        heart.style.animationDelay = Math.random() * 3 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
}
