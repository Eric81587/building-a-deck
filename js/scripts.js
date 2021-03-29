let suitInput;
let suitColors = ["Red", "Black"]
let suits = ["hearts", "spades", "diamonds", "clubs"]
let cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
let allCards = []
$(document).ready(function() {
  suits.forEach(function(suit) {
    console.log(suit);
    cards.forEach(function(card) {
      $(".output ul").append("<li>" + card + " of " + suit + "</li>" );
      allCards.push(card + " of " + suit );
    });
  });


  $("form").submit(function (event) {
/*    suitInput = $("input#suit").val();
    suitInput = suitInput.toLowerCase();
    if (suitInput === suits[0]){
      
    } else if (suitInput === suits[1]){
      
    } else if (suitInput === suits[2]){
      
    } else if (suitInput === suits[3]){
      
    } else { 
      console.log("A real suit was not submited")
    }*/


event.preventDefault();

  });
});