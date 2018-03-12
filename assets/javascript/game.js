'use strict';

$(document).ready(function() {

 //variables
//  let randNumber = "";
//  let crystalOne = "";
//  let crystalTwo = "";
//  let crystalThree = "";
//  let crystalFour = "";
 
//  let score = 0;
 let randNumber = setNumber(120,19);
 let crystalOne = setNumber(1,12);
 let crystalTwo = setNumber(1,12);
 let crystalThree = setNumber(1,12);
 let crystalFour = setNumber(1,12);
 let score = 0; 
 let first = "";
 let second = "";
 let third = "";
 let guessCount = 0
 let result = 0


 function setNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

 $(".randNumber").text(randNumber);
//reset

function reset() {
     setNumber()
 }
 console.log(randNumber)

//assign values to crystals
 $(".orange").data("value") === crystalOne;
 $(".green").data("value") === crystalTwo;
 $(".purple").data("value") === crystalThree;
 $(".white").data("value") === crystalFour;

//add value of crystals to score
$('.crystal').click(function(){
    if(score === 0){
        first += $(this).val();
        guessCount = +1;
       return first
    } else if (guessCount === 1){
        second += $(this).val()
        guessCount = +1;
        result = first + second;
        return result
    } else if(guessCount === 2){
     third += $(this).val()
     guessCount = +1;
     result = first + second + third;
      return result;
    }
});
$('.score').text(result);




});