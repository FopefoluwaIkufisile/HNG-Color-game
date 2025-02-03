
document.addEventListener("DOMContentLoaded", function () {
    let score = 0;
    let highScore = localStorage.getItem("colorGameHighScore") || 0;
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"]; 
    const colourBox = document.querySelector(".colour-box"); 
    const message = document.querySelector(".message"); 
    const scoreDisplay = document.querySelector(".score"); 
    const highScoreDisplay = document.querySelector(".highscore");
  const resetBtn = document.querySelector(".reset-btn");
    const colorOption = document.querySelectorAll(".options"); 

    highScoreDisplay.textContent = `High Score: ${highScore}`;
  
    // Function to reset the game
    function resetGame() {
      colourBox.style.backgroundColor = "aliceblue"; 
      resetBtn.style.display = "none";
      score = 0;
      message.textContent = ""; 
    }

    function setRandomColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
      colourBox.style.backgroundColor = randomColor; 
      return randomColor; 
    }
  
    resetBtn.addEventListener("click", resetGame);

    colorOption.forEach(function (box) {
      box.addEventListener("click", function () {
        const userChosenColor = this.id; 
        const targetColor = setRandomColor(); 

        colourBox.classList.remove("success-animation", "error-animation");
  message.classList.remove("show");

  void colourBox.offsetWidth;
  void message.offsetWidth;
  
        if (userChosenColor === targetColor) {
          score++;
          colourBox.classList.add("success-animation");
    message.classList.add("show");
          message.textContent = "Success! Colors match."; 
          message.style.color = "green"; 
          if (score > highScore) {
            highScore = score;
            localStorage.setItem("colorGameHighScore", highScore);
            highScoreDisplay.textContent = `High Score: ${highScore}`;
          }
          setTimeout(() => {
            colourBox.style.backgroundColor = "grey";
            message.classList.remove("show");
          }, 2000);
        } else {
            colourBox.classList.add("error-animation");
            message.classList.add("show");
          score = 0; 
          message.textContent = "Error! Colors do not match. Try again";
          message.style.color = "red"; 
          resetBtn.style.display = "block";
        }
  
        scoreDisplay.textContent = `Score: ${score}`; 

      });
    });
  });
