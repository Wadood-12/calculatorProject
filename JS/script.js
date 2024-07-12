const answerDisplay = document.getElementById('answer-input');

// let havDot = false;




function calculate (number){
  answerDisplay.value += number;
}

function answer(){
  try{
    answerDisplay.value = eval(answerDisplay.value)
  }
  catch(error){
    answerDisplay.value = 'error.';
  }
}

function clearCalc(){
  answerDisplay.value = '';
}

function deleteCalc(){
  answerDisplay.value = answerDisplay.value.slice(0, -1);
}

