// Add id to cards
const cardLenght = document.querySelectorAll('.card').length;

if( cardLenght != 0) {
  for(let idCounter = 0; idCounter < cardLenght; idCounter++) {
    $(".card.cursor-point"+idCounter).attr("id", idCounter);
    $(".card.cursor-point"+idCounter).next().addClass("cursor-point"+(idCounter+1));
    $(".card.cursor-point"+idCounter).removeClass("cursor-point"+idCounter);
  }
}

// Correct Guess
let number = 0;
let firstCard = "";
let secondCard = "";
let moveCounter = 0;

function turn(){
  $(firstId).removeClass("open show");
  $(secondId).removeClass("open show");
  $(firstId).removeClass("wrong");
  $(secondId).removeClass("wrong");
}

$(".card").click(function() {
  console.log("number = " + number);
  if (number < 2) {
    number++;
    if(number === 1) {
      firstCard = event.target.childNodes[1];
      console.log("firstCard " + firstCard);
      firstId = document.getElementById(event.target.id);
      console.log("firstId " + firstId);
      $(firstId).addClass("open show");
      console.log("addClass open show to firstId");
    }
    else {
      secondCard = event.target.childNodes[1];
      console.log("secondCard " + secondCard);
      secondId = document.getElementById(event.target.id);
      console.log("secondId " + secondId);
      $(secondId).addClass("open show");
      console.log("addClass open show to secondId");
    }
    if(firstCard !== "" && secondCard !== "") {
      console.log("firstCard and secondCard are different");
        if(!(firstCard.isEqualNode(secondCard))) {
          $(firstId).addClass("wrong");
          $(secondId).addClass("wrong");
          setTimeout(turn , 500);
          number = 0;
          firstCard = "";
          secondCard = "";
          moveCounter++;
          console.log(moveCounter);
          $(".moves").html(moveCounter);
      }
      if(firstCard.isEqualNode(secondCard)) {
        console.log("firstCard and secondCard are equal");
        console.log( "document.getElementById(event.target.id) " + document.getElementById(event.target.id));
        $(firstId).addClass("match");
        $(secondId).addClass("match");
        $(firstId).removeClass("open show");
        $(secondId).removeClass("open show");
        console.log($("#proba").addClass("match"));
        number = 0;
        firstCard = "";
        secondCard = "";
        console.log("number = " + number);
        moveCounter++;
        console.log(moveCounter);
        $(".moves").html(moveCounter);
      }
    }
  }
});

$(".restart").click(function() {
    moveCounter = 0;
    number = 0;
    firstCard = "";
    secondCard = "";
    console.log("restart moveCounter = " + moveCounter);
    console.log("restart number = " + number);
    console.log("restart firstCard = " + firstCard);
    console.log("restart secondCard = " + secondCard);
    $(".moves").html(moveCounter);
    $(".card").removeClass("open show");
    $(".card").removeClass("match");
});

console.log(document.getElementById("0").childNodes[1]);
console.log(document.getElementById("1").childNodes[1]);
console.log(document.getElementById("2").childNodes[1]);
console.log(document.getElementById("3").childNodes[1]);
console.log(document.getElementById("4").childNodes[1]);
console.log(document.getElementById("5").childNodes[1]);
console.log(document.getElementById("6").childNodes[1]);
console.log(document.getElementById("7").childNodes[1]);
console.log(document.getElementById("8").childNodes[1]);
console.log(document.getElementById("9").childNodes[1]);
console.log(document.getElementById("10").childNodes[1]);
console.log(document.getElementById("11").childNodes[1]);
console.log(document.getElementById("12").childNodes[1]);
console.log(document.getElementById("13").childNodes[1]);
console.log(document.getElementById("14").childNodes[1]);
console.log(document.getElementById("15").childNodes[1]);

/*
 * Create a list that holds all of your cards
 */
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
