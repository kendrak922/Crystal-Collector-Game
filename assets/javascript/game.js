'use strict';

$(document).ready(function() {

 //variables
 let randNumber = setNumber(120,19);
 let crystalOne = setNumber(1,12);
 let crystalTwo = setNumber(1,12);
 let crystalThree = setNumber(1,12);
 let crystalFour = setNumber(1,12);
 let first = "";
 let result = "";
 let score = 0;
 let wins = 0;
 let losses = 0;

 function setNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

 $(".randNumber").text(randNumber);
 $(".wins").text(wins);
 $(".losses").text(losses);
 
 
//reset
function reset() {
     setNumber();
     score = 0;
 }

// //assign values to crystals

$(".orange").attr("value", crystalOne);
$(".green").attr("value", crystalTwo);
 $(".purple").attr("value", crystalThree);
 $(".white").attr("value", crystalFour);

 console.log(crystalOne);

//add value of crystals to score
$(".crystals").click(function (){
    if(score < randNumber){
       let crystalValue = ($(this).val(".crystals"));
       let newCrystalValue = parseInt(crystalValue) 
       score += newCrystalValue
       $(".score").text(score);
    }else if (randNumber === score){
        wins ++;
        return losses
        reset();
    } else if(randNumber > score ){
        losses ++;
        return losses
        reset();
    };

});


});