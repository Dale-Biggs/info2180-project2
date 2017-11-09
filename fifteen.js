"use strict";
window.onload=function(){
    var puzzleArea= document.getElementById("puzzlearea");
    var child= puzzleArea.children;
    var shuffle=document.getElementById("shufflebutton");

    for (var i=0;i<child.length;i++){
        child[i].classList.add("puzzlepiece");
    }
    //Sets up puzzle area
    child[0].style.left="0px";
    child[0].style.top="0px";
    child[1].style.left="100px";
    child[1].style.top="0px";
    child[2].style.left="200px";
    child[2].style.top="0px";
    child[3].style.left="300px";
    child[3].style.top="0px";
    child[4].style.top="100px";
    child[4].style.left="0px";
    child[5].style.top="100px";
    child[5].style.left="100px";
    child[6].style.top="100px";
    child[6].style.left="200px";
    child[7].style.top="100px";
    child[7].style.left="300px";
    child[8].style.top="200px";
    child[8].style.left="0px";
    child[9].style.top="200px";
    child[9].style.left="100px";
    child[10].style.top="200px";
    child[10].style.left="200px";
    child[11].style.left="300px";
    child[11].style.top="200px";
    child[12].style.top="300px";
    child[12].style.left="0px";
    child[13].style.top="300px";
    child[13].style.left="100px";
    child[14].style.left="200px";
    child[14].style.top="300px";
    //Sets up the background image on the puzzle pieces
    child[0].style.backgroundPosition="0px 0px";
    child[1].style.backgroundPosition="-100px 0px";
    child[2].style.backgroundPosition="-200px 0px";
    child[3].style.backgroundPosition="-300px 0px";
    child[4].style.backgroundPosition="0px -100px";
    child[5].style.backgroundPosition="-100px -100px";
    child[6].style.backgroundPosition="-200px -100px";
    child[7].style.backgroundPosition="-300px -100px";
    child[8].style.backgroundPosition="0px -200px";
    child[9].style.backgroundPosition="-100px -200px";
    child[10].style.backgroundPosition="-200px -200px";
    child[11].style.backgroundPosition="-300px -200px";
    child[12].style.backgroundPosition="0px -300px";
    child[13].style.backgroundPosition="-100px -300px";
    child[14].style.backgroundPosition="-200px -300px";

    var positionstop=["0px","100px","200px","300px"];
    var positionsleft=["0px","100px","200px","300px"];
    var original_pos=[];
    for (var c=0; c<child.length; c++){
      original_pos.push(child[c].style.left+" "+child[c].style.top);
    }

    function positions(){
      var list=[];
      for (var i=0; i<positionsleft.length; i++ ){
        for (var l=0; l<positionstop.length; l++){
          list.push(positionsleft[i]+" "+positionstop[l]);
        }
      }
      return list;
    }
    //Keeps track of all piece positions
    function update_piece_positions(){
      var piecePos=[];
      for (var c=0; c<child.length; c++){
        piecePos.push(child[c].style.left+" "+child[c].style.top);
      }
      return piecePos;
    }
    //Finds the missing position from the puzzle
    function findMissing(){
      for( var p=0; p<positions().length;){
        update_piece_positions();
        if(!update_piece_positions().includes(positions()[p])){
          return positions()[p];
        }else{
          p++;
        }
      }
    }

    for (var f=0; f<child.length;f++){
      findMissing();
      child[f].addEventListener("click",function (){
        alert(findMissing())
        for (var u=0; u<positionsleft.length;u++){
          for (var e=0; e<positionstop.length;e++){
            if(positionsleft[u]+" "+positionstop[e]==findMissing()){
              this.style.top=positionstop[e];
              this.style.left= positionsleft[u];
            }
          }
        }
      })
      child[f].onmouseover=function(){

      }

    }

    shuffle.onclick = function(){
      for(var t=0; t<child.length;t++){
        var pos=[];
        child[t].style.left=positionsleft[Math.floor(Math.random() * 4)];
        child[t].style.top=positionstop[Math.floor(Math.random() * 4)];
      }

    }
  }
