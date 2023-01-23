'use strict'

function quesDisp(){
    if(document.getElementById("dislike01").checked === true || document.getElementById("dislike02").checked === true || document.getElementById("dislike03").checked === true){
        document.getElementById("addQues").style.display = "block";
    } else {
        document.getElementById("addQues").style.display = "none";
    }
}