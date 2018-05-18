// Add id to cards
const cardLenght = document.querySelectorAll('.card').length;

let picture = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb",
"fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
console.log(picture);
picture.sort(() => 0.5 - Math.random());
console.log(picture);



if( cardLenght != 0) {
  for(let idCounter = 0; idCounter < cardLenght; idCounter++) {
    $(".card.cursor-point"+idCounter).attr("id", idCounter);
    $(".card.cursor-point"+idCounter).next().addClass("cursor-point"+(idCounter+1));
    $(".card.cursor-point"+idCounter).removeClass("cursor-point"+idCounter);
     ////let addElement = document.getElementById(idCounter);
     console.log(document.getElementById(idCounter));
     //let coscos = addElement.childNodes[1];
     //console.log(addElement.childNodes[1]);
     ////$(addElement).addClass(picture[idCounter]);
    //console.log(coscos);
    //$(".addCard"+idCounter).next().addClass(picture[idCounter+1]);
    //$(".addCard"+idCounter).removeClass(picture[idCounter]);

  }
}
let pictureCounter;
for(pictureCounter = 0; pictureCounter < cardLenght; pictureCounter++){
  ////$(".addCard"+pictureCounter).attr("id",picture[pictureCounter]);
  $(".addCard"+pictureCounter).addClass(picture[pictureCounter]);
  $(".addCard"+pictureCounter).next().addClass("addCard"+(pictureCounter+1));
  ////$(".addCard"+pictureCounter).text(picture[pictureCounter]);
  $(".addCard"+pictureCounter).removeClass("addCard"+pictureCounter);
  //$(".addCard"+pictureCounter).removeClass(".addCard"+pictureCounter);
  console.log(picture[pictureCounter]);
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

$(".card").click(function(event)
{
  console.log("number = " + number);
  if (number < 2) {
    number++;
    if(number === 1) {
      firstCard = event.target.childNodes[1];
      //firstCard = document.getElementById('fa fa-diamond');//document.querySelectorAll(".addCard[pictureCounter]").textContent;// event.target.childNodes[1];//document.querySelectorAll('.card');//event.target;//document.getElementById(event.target.id);
      console.log("firstCard " + firstCard);
      firstId = document.getElementById(event.target.id);
      console.log("firstId " + firstId);
      $(firstId).addClass("open show");
      console.log("addClass open show to firstId");
    }
    else {
      secondCard = event.target.childNodes[1];
      //secondCard = document.getElementById('fa fa-diamond');//.textContent;//document.getElementsByTagName("i");//event.target;//document.getElementById(event.target.id);//document.getElementsByClassName(".addCard");
      console.log("secondCard " + secondCard);
      secondId = document.getElementById(event.target.id);
      console.log("secondId " + secondId);
      $(secondId).addClass("open show");
      console.log("addClass open show to secondId");
    }

    if(number === 2) {
      //if(firstCard.isEqualNode(secondCard)) {
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
      else {
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
