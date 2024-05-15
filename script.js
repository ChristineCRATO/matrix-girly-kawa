
// Fonction pour créer une ligne de code avec un mot spécifié
function createCodeLine(word) {
    const codeLine = document.createElement("div");
    codeLine.classList.add("code-rain");
    codeLine.classList.add(getRandomColor()); // Position horizontale aléatoire
    codeLine.style.left = `${Math.random() * 100}%`;
    codeLine.textContent = word; // Mot spécifié
    return codeLine;
  }
  
  // Fonction pour faire tomber les lignes de code
  function animateCodeLines() {
    const matrixWallpaper = document.getElementById("matrix-wallpaper");
    const windowHeight = window.innerHeight;
    const phrase =
      "Hello ! Moi, c'est Christine et ma marque GitPixel et je recherche un poste comme Développeuse Web ou bien être FreeLanceuSe !";
    const words = phrase.split(" ");
    let index = 0;
  
    setInterval(() => {
      const word = words[index % words.length];
      const codeLine = createCodeLine(word);
      matrixWallpaper.appendChild(codeLine);
  
      // Supprimer les lignes de code qui sortent de l'écran
      const codeLines = document.querySelectorAll(".code-rain");
      codeLines.forEach((line) => {
        const top = parseInt(line.style.top, 10);
        if (top > windowHeight) {
          matrixWallpaper.removeChild(line);
        }
      });
  
      index++;
    }, 130); // Vitesse de création des lignes (en millisecondes)
  }
  
  function getRandomColor() {
    const colors = ["red", "violet", "purple", "pink", "white", "yellow"]; // Ajoutez autant de couleurs que vous le souhaitez
    return colors[Math.floor(Math.random() * colors.length)];
}

  // Démarrer l'animation
  animateCodeLines();
  