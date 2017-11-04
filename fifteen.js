"use strict";
window.onload=function(){
    var puzzleArea=document.getElementById("puzzlearea");

    for (var i=0;i<puzzleArea.children.length;i++){
        puzzleArea.children[i].className="puzzlepiece";
    }

    puzzleArea.children[1].style.left="100px";
    puzzleArea.children[2].style.left="200px";
    puzzleArea.children[3].style.left="300px";
    puzzleArea.children[4].style.top="100px";
    puzzleArea.children[5].style.top="100px";
    puzzleArea.children[5].style.left="100px";
    puzzleArea.children[6].style.top="100px";
    puzzleArea.children[7].style.top="100px";
    puzzleArea.children[6].style.left="200px";
    puzzleArea.children[7].style.left="300px";
    puzzleArea.children[8].style.top="200px";
    puzzleArea.children[9].style.top="200px";
    puzzleArea.children[10].style.top="200px";
    puzzleArea.children[11].style.top="200px";
    puzzleArea.children[9].style.left="100px";
    puzzleArea.children[10].style.left="200px";
    puzzleArea.children[11].style.left="300px";
    puzzleArea.children[12].style.top="300px";
    puzzleArea.children[13].style.top="300px";
    puzzleArea.children[14].style.top="300px";
    puzzleArea.children[13].style.left="100px";
    puzzleArea.children[14].style.left="200px";

    puzzleArea.children[1].style.backgroundPosition="-100px 0px";
    puzzleArea.children[2].style.backgroundPosition="-200px 0px";
    puzzleArea.children[3].style.backgroundPosition="-300px 0px";
    puzzleArea.children[4].style.backgroundPosition="0px -100px";
    puzzleArea.children[5].style.backgroundPosition="-100px -100px";
    puzzleArea.children[6].style.backgroundPosition="-200px -100px";
    puzzleArea.children[7].style.backgroundPosition="-300px -100px";
    puzzleArea.children[8].style.backgroundPosition="0px -200px";
    puzzleArea.children[9].style.backgroundPosition="-100px -200px";
    puzzleArea.children[10].style.backgroundPosition="-200px -200px";
    puzzleArea.children[11].style.backgroundPosition="-300px -200px";
    puzzleArea.children[12].style.backgroundPosition="0px -300px";
    puzzleArea.children[13].style.backgroundPosition="-100px -300px";
    puzzleArea.children[14].style.backgroundPosition="-200px -300px";

};
