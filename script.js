/* script.js */
$(document).ready(function(){
    // Track correct answers for each question
    var correctAnswers = { q1: false, q2: false, q3: false };
  
    // Array of funny responses for wrong answers (we use alert() for simplicity)
    var wrongResponses = [
      "Hmm, not quite. Try again!",
      "Looks like that option needs a recheck!",
      "Not the right diagnosis. Give it another go!",
      "This symptom doesn't match. Think again!"
    ];
  
    $('.btn-option').click(function(){
      var question = $(this).data('question');
      var answer = $(this).data('answer');
  
      if(answer === "correct") {
        correctAnswers[question] = true;
        // Mark the chosen button as correct
        $('[data-question="'+question+'"]').removeClass('btn-success').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('btn-success');
      } else {
        // Show a random wrong response
        var randomMsg = wrongResponses[Math.floor(Math.random() * wrongResponses.length)];
        $('#wrongMessage').text(randomMsg);
        $('#wrongAnswerPopup').removeClass('d-none');
        $('#closeWrongPopup').click(function(){
            $('#wrongAnswerPopup').addClass('d-none');
          });          
      }
  
      // Enable the Diagnose button only if all three answers are correct
      if(correctAnswers.q1 && correctAnswers.q2 && correctAnswers.q3) {
        $('#diagnoseBtn').prop('disabled', false);
      }
    });
  
    // On Diagnose button click, navigate to the result page
    $('#diagnoseBtn').click(function(){
      window.location.href = "result.html";
    });
  });
  