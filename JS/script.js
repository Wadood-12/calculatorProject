const answerDisplay = document.getElementById('answer-input');

function calculate (number){
  answerDisplay.value += number;
}

function answer(){
  try{
    answerDisplay.value = eval(answerDisplay.value)
  }
  catch(error){
    alert('Enter a valid calculation');
  }
}

function clearCalc(){
  answerDisplay.value = '';
}

function deleteCalc(){
  answerDisplay.value = answerDisplay.value.slice(0, -1);
}

