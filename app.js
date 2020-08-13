'use strict';
/**
 * Example store structure
 */
/**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material, consult your instructor, and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/*
on first render, load start page
on click start, load question 1,
initialize for loop to keep track of page number and return to display at question-index
on click submit, take input 
put input value in array
increase i by 1
go to page with index = i
when i = 4
on click submit, take input
put input value in array
take arr, parse into other arrays based on values (for loop?)
see which array.length is longest
load result page based on which array.length was longest
on click start over, goes to start page

  */

function countIndex() {
  let count = STORE[5].length;
  return count;
}

function generateStart() {
  $('main').html(`<div class='page'>
     <button id="start" class='start'>Start Quiz</button>
   </div>`);
};

function handlePageTurn() {
  $('main').on('click', '.start', function (event) {
    generateNextQuestion();
  });
}

$('main').on('click', '.reset-btn', function (event) {
  STORE[5] = ['a'];
  generateStart();
});





$('main').on('click', '#submit', function (e) {
  e.preventDefault();
  STORE[5].push($('input[name=answer]:checked').val());
  generateNextQuestion();

});

let final = {
  erinFinal: 0,
  misakaFinal: 0,
  leviFinal: 0,
  titanFinal: 0,
}

//
function getResult(resultArr) {
  let erin = [];
  let misaka = [];
  let titan = [];
  let levi = [];
  for (let i = 1; i < resultArr.length; i++) {
    if (resultArr[i] === 'e') {
      erin.push(resultArr[i]);
    } else if (resultArr[i] === 'm') {
      misaka.push(resultArr[i]);
    } else if (resultArr[i] === 't') {
      titan.push(resultArr[i]);
    } else if (resultArr[i] === 'l') {
      levi.push(resultArr[i]);
    }
  }
  final.erinFinal = erin.length;
  final.misakaFinal = misaka.length;
  final.titanFinal = titan.length;
  final.leviFinal = levi.length;
  let person;
  let endGoal;
  for (person in final) {
    if (final[person] >= final.erinFinal && final[person] >= final.misakaFinal && final[person] >= final.titanFinal && final[person] >= final.leviFinal) {
      endGoal = person;
    }
  }
  console.log(endGoal);
  return endGoal;
};

function getFinalResult() {
  let finalResult = (getResult(STORE[5]));
  return finalResult;
}

function generateNextQuestion() {
  if (countIndex() <= 5) {
    $('main').html(`<div class='page-instance'>
   <div class='question-index'>${countIndex()}/5</div>
   <div class="question-text">${STORE[countIndex() - 1].question}</div>
   <div class="answers">
     <form id='answers-form' class='form'> 
       <input type='radio' id='erin' name='answer' value='e' required>
       <label for="erin">${STORE[countIndex() - 1].answerE}</label><br>
       <input type="radio" id="misaka" name="answer" value="m">
       <label for="misaka">${STORE[countIndex() - 1].answerM}</label><br>
       <input type="radio" id="titan" name="answer" value="t">
       <label for="titan">${STORE[countIndex() - 1].answerT}</label><br>
       <input type="radio" id="levi" name="answer" value="l">
       <label for="levi">${STORE[countIndex() - 1].answerL}</label><br>
       <button type="submit" id="submit" class='submit-btn btn'>Submit</button>
     </form>
   </div>
 </div>`);
  } else {
    console.log(STORE[5])
    console.log(getFinalResult())
    if (getFinalResult() === 'erinFinal') {
      $('main').html(`<div class='page-instance'>
    <div class='results'>
      <h2>Congrats! You're most similar to Eren!</h2>
      <div class="character">
        <p>You're ready to rush into battle at any moment, but your courage could be your downfall</p>
      </div>
      <div class="reset-state">
        <button id="reset-btn" class="reset-btn btn">Start over!</button>
      </div>

    </div>
  
</div>`);
    } else if (getFinalResult() === 'misakaFinal') {
      $('main').html(`<div class='page-instance'>
      <div class='results'>
        <h2>Hey! You're most similar to Mikasa!!</h2>
        <div class="character">
          <p>You're a lot like Mikasa, you're passionate about your friends, but to others you might seem a little cold. But hey, you're also a badass.</p>
        </div>
        <div class="reset-state">
          <button id="reset-btn" class="reset-btn btn">Start over!</button>
        </div>

      </div>
    
  </div>`);
    } else if (getFinalResult() === 'titanFinal') {
      $('main').html(`<div class='page-instance'>
    <div class='results'>
      <h2>Well, it looks like you're most similar to a Titan...</h2>
      <div class="character">
        <p>We advise you seek medical attention immediately!!!!</p>
      </div>
      <div class="reset-state">
        <button id="reset-btn" class="reset-btn btn">Start over!</button>
      </div>

    </div>
  
</div>`);
    }
    else {
      $('main').html(`<div class='page-instance'>
  <div class='results'>
    <h2>Congrats! You're most similar to Levi</h2>
    <div class="character">
      <p>Okay Mr. Badass, you're a better leader than anything else but your harshe edge can be offputting</p>
    </div>
    <div class="reset-state">
      <button id="reset-btn" class="reset-btn btn">Start over!</button>
    </div>

  </div>

</div>`);
    }
  }
}

function main() {
  generateStart();
  handlePageTurn();

}

$(main);


