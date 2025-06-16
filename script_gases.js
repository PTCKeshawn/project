function checkAnswer(button) {
    const isCorrect = button.getAttribute("data-correct") === "true";
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");
  
    // Disable all buttons after selection
    const allButtons = document.querySelectorAll(".options button");
    allButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = 0.6;
      if (btn.getAttribute("data-correct") === "true") {
        btn.style.backgroundColor = "#a6e6a6"; // green for correct
      } else {
        btn.style.backgroundColor = "#f8baba"; // red for incorrect
      }
    });
  
    if (isCorrect) {
      feedback.textContent = "✅ Correct!";
      feedback.style.color = "green";
      nextBtn.style.display = "inline-block";
    } else {
      feedback.textContent = "❌ Incorrect. The correct answer was Carbon dioxide (CO₂).";
      feedback.style.color = "red";
      nextBtn.style.display = "inline-block";
    }
  }
  