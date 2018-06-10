'use strict';

$(document).ready(function () {

    //variables
    const crystals = {
        orange:
            {
                name: "Orange"
            },
        green:
            {
                name: "Green"
            },
        purple:
            {
                name: "Purple"
            },
        white:
            {
                name: "White"
            }
    };

    let randNumber = 0;
    let score = 0;

    let wins = 0;
    let losses = 0;

    ////set random values

    function setNumber(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $(".wins").text(wins);
    $(".losses").text(losses);



    //reset
    function reset() {
        score = 0;
        crystals.orange.value = setNumber(1, 12);
        crystals.green.value = setNumber(1, 12);
        crystals.purple.value = setNumber(1, 12);
        crystals.white.value = setNumber(1, 12);
        
        randNumber = setNumber(120, 19);

        $(".randNumber").text(randNumber);
        $(".score").text(score);
    }

    // $(".orange").attr("value", crystalOne);
    // $(".green").attr("value", crystalTwo);
    //  $(".purple").attr("value", crystalThree);
    //  $(".white").attr("value", crystalFour);


    //add value of crystals to score
    const winLose = function () {
        if (score > randNumber) {
            console.log("You lost!")
            losses++;
            $(".losses").text(losses);
            reset();            
        } else if (randNumber === score) {
            console.log("You won!")
            wins++;
            $(".wins").text(wins);
            reset();
        };
    }


    const game = function (clickedCrystal){
     score += clickedCrystal.value;
     
     $(".score").text(score);

    winLose(); 
    }
//starts game
reset();

$(".orange").click(function() {
    game(crystals.orange);
});
$(".green").click(function() {
    game(crystals.green);
});
$(".purple").click(function() {
    game(crystals.purple);
});
$(".white").click(function() {
    game(crystals.white);
});
});