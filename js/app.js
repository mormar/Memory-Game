// Add id to cards
const cardLenght = document.querySelectorAll('.card').length;

let picture = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf',
'fa fa-bicycle', 'fa fa-bomb','fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube',
'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];
//console.log(picture);
let randomSort = picture.sort(() => 0.5 - Math.random());
//console.log(picture);
//console.log(randomSort);

if( cardLenght != 0) {
  for(let idCounter = 0; idCounter < cardLenght; idCounter++) {
    $(".card.cursor-point"+idCounter).attr("id", idCounter);
    $(".card.cursor-point"+idCounter).next().addClass("cursor-point"+(idCounter+1));
    $(".card.cursor-point"+idCounter).removeClass("cursor-point"+idCounter);
    // console.log(document.getElementById(idCounter));
  }
}
let pictureCounter;
for(pictureCounter = 0; pictureCounter < cardLenght; pictureCounter++){
  $(".addCard"+pictureCounter).addClass(picture[pictureCounter]);
  $(".addCard"+pictureCounter).next().addClass("addCard"+(pictureCounter+1));
  $(".addCard"+pictureCounter).removeClass("addCard"+pictureCounter);
  //console.log(picture[pictureCounter]);
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
  if(moveCounter < 12) {
    console.log("less than 12 moves");
  }
  else if(moveCounter < 18) {
    console.log("less than 18 moves");
    $("#star3").removeClass();
    $("#star3").addClass("fa fa-star-o");
  }
  else if(moveCounter < 24) {
    console.log("less than 24 moves");
    $("#star2").removeClass();
    $("#star2").addClass("fa fa-star-o");
  }
  else {
    console.log("More then 24!");
    $("#star1").removeClass();
    $("#star1").addClass("fa fa-star-o");
  }
  //console.log("number = " + number);
  if (number < 2) {
    number++;

    if(number === 1) {
      firstCard = event.target.childNodes[1];
      //console.log("firstCard " + firstCard);
      firstId = document.getElementById(event.target.id);
      //console.log("firstId " + firstId);
      $(firstId).addClass("open show");
      //console.log("addClass open show to firstId");
    }
    else {
      secondCard = event.target.childNodes[1];
      //console.log("secondCard " + secondCard);
      secondId = document.getElementById(event.target.id);
      //console.log("secondId " + secondId);
      $(secondId).addClass("open show");
      //console.log("addClass open show to secondId");
    }

    if(number === 2) {
      if(firstCard.isEqualNode(secondCard)) {
        //console.log("firstCard and secondCard are equal");
        //console.log( "document.getElementById(event.target.id) " + document.getElementById(event.target.id));
        $(firstId).addClass("match");
        $(secondId).addClass("match");
        $(firstId).removeClass("open show");
        $(secondId).removeClass("open show");
        //console.log($("#proba").addClass("match"));
        number = 0;
        firstCard = "";
        secondCard = "";
        //console.log("number = " + number);
        moveCounter++;
        //console.log(moveCounter);
        $(".moves").html(moveCounter);
      }
      else {
        //console.log("firstCard and secondCard are different");
        if(!(firstCard.isEqualNode(secondCard))) {
        $(firstId).addClass("wrong");
        $(secondId).addClass("wrong");
        setTimeout(turn , 500);
        number = 0;
        firstCard = "";
        secondCard = "";
        moveCounter++;
        //console.log(moveCounter);
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
    //console.log("restart moveCounter = " + moveCounter);
    //console.log("restart number = " + number);
    //console.log("restart firstCard = " + firstCard);
    //console.log("restart secondCard = " + secondCard);
    $(".moves").html(moveCounter);
    $(".card").removeClass("open show");
    $(".card").removeClass("match");
    randomSort = picture.sort(() => 0.5 - Math.random());
    //console.log(picture);
    //console.log(randomSort);
    for(let deletId = 0; deletId < cardLenght; deletId++) {
    $("#"+deletId).children().removeClass();
    $("#"+deletId).children().addClass("addCard"+deletId);
    }

    for(pictureCounter = 0; pictureCounter < cardLenght; pictureCounter++){
      $(".addCard"+pictureCounter).addClass(picture[pictureCounter]);
      $(".addCard"+pictureCounter).next().addClass("addCard"+(pictureCounter+1));
      $(".addCard"+pictureCounter).removeClass("addCard"+pictureCounter);
      //console.log(picture[pictureCounter]);
    }
    $("#star1").removeClass();
    $("#star2").removeClass();
    $("#star3").removeClass();
    $("#star1").addClass("fa fa-star");
    $("#star2").addClass("fa fa-star");
    $("#star3").addClass("fa fa-star");
});
