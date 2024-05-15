function createCodeElement() {
    const phrase =
      "Hello! MoiC'estChristine VoiciMaMarque GitPixel JeRecherche unPoste DéveloppeuseWeb ouFreeLanceuSe";
    const words = phrase.split(" ");
    const randomElement = Math.random() < 0.5 ? createTextElement(words) : createImageElement();
    return randomElement;
}

function createTextElement(words) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const textElement = document.createElement("div");
    textElement.classList.add("code-rain");
    textElement.textContent = randomWord;
    textElement.style.left = `${Math.random() * 100}%`;
    textElement.classList.add(getRandomColor()); // Ajout de la classe pour la couleur aléatoire
    return textElement;
}

function createImageElement() {
    const images = ["baleine.png", "chaton.png", "dolly.png", "helloKitty.png", "panda.png"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = "/img/";
    const imageElement = document.createElement("img");
    imageElement.classList.add("code-rain");
    imageElement.src = imagePath + randomImage;
    imageElement.style.left = `${Math.random() * 100}%`;
    return imageElement;
}

function getRandomColor() {
    const colors = ["red", "violet", "purple", "pink", "white", "yellow"]; // Ajoutez autant de couleurs que vous le souhaitez
    return colors[Math.floor(Math.random() * colors.length)];
}

const maxElements = 20; // Nombre maximum d'éléments à afficher

function animateCodeLines() {
    const matrixWallpaper = document.getElementById("matrix-wallpaper");
    const windowHeight = window.innerHeight;
    let topPosition = 60; // position verticale

    setInterval(() => {
        const codeElement = createCodeElement();
        codeElement.style.top = `${topPosition}px`; // Positionner l'élément en fonction de la position verticale actuelle
        matrixWallpaper.appendChild(codeElement);

        const codeElements = document.querySelectorAll(".code-rain");
        if (codeElements.length > maxElements) {
            matrixWallpaper.removeChild(codeElements[0]); // Supprime le premier élément (le plus ancien)
        } 
        codeElements.forEach((element) => {
            const top = parseInt(element.style.top, 10);
            if (top > windowHeight) {
                matrixWallpaper.removeChild(element);
            }
        });
    }, 180);
}

animateCodeLines();
