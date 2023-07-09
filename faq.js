
function toggleAnswer(questionId) {
    const answer = document.getElementById("answer" + questionId);
     
      if (answer.style.display === "block") {
      answer.style.display = "none";
      
    } else {
      answer.style.display = "block";
  
    }
     const arrow = document.getElementById("a" + questionId);
      arrow.classList.toggle('clicked');
      const ques = document.getElementById("q" + questionId);
      ques.classList.toggle('clicked');
  }
  
