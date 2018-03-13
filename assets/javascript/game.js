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
 let loses = 0;


 function setNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

 $(".randNumber").text(randNumber);

 //reset
function reset() {
     setNumber();
     score = 0;
 }


// //assign values to crystals
$(".orange").val(crystalOne);
$(".green").val(crystalTwo);
 $(".purple").val(crystalThree);
 $(".white").val(crystalFour);

//  //parse int
//  crystalOne = parseInt(crystalOne, 10);
//  crystalTwo= parseInt(crystalTwo, 10);
//  crystalThree= parseInt(crystalThree, 10);
//  crystalFour= parseInt(crystalFour, 10);

//add value of crystals to score
$(".crystals-button").click(function(){
    if(score = 0 ){
       let first = $(".crystals-button").val();
        result = first;
        result = score;
    }else if (randNumber = score){
        wins ++;
        reset();
    } else if(randNumber < score ){
        loses ++;
        reset();
    }
    else{ 
        while(score < randNumber){
        score = $(".crystals-button").val() + result;
        }
    };
$(".score").text(score);
});

if()



});