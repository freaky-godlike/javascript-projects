let user = document.querySelectorAll('.dat');
var val;
user[0].addEventListener("click", function(){
    val = 0;
    comp = Math.floor(Math.random() * 3);
    if(comp == 0){
        document.getElementById('cc').innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='rock.png'>";
    }
    else if(comp == 1){
        document.getElementById('cc').innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='paper.png'>";
    }
    else if(comp == 2){
        document.getElementById('cc').innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='scissor.png'>";
    }
    if(val == comp){
        document.getElementById('result').innerHTML = "Draw";
    }
    else if((val == 0) && (comp == 1)){
        document.getElementById('result').innerHTML = "Computer Wins, Better Luck Next Time";
    }
    else if((val == 0) && (comp == 2)){
        document.getElementById('result').innerHTML = "Congratulations, You Win";
    }
});
user[1].addEventListener("click", function(){
    val = 1;
    comp = Math.floor(Math.random() * 3);
    if(comp == 0){
        document.getElementById("cc").innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='rock.png'>";
    }
    else if(comp == 1){
        document.getElementById("cc").innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='paper.png'>"
    }
    else if(comp == 2){
        document.getElementById("cc").innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='scissor.png'>";
    }
    if(val == comp){
        document.getElementById("result").innerHTML = "Draw";
    }
    else if((val == 1) && (comp == 0)){
        document.getElementById('result').innerHTML = "Congratulations, You Win";
    }
    else if((val == 1) && (comp == 2)){
        document.getElementById('result').innerHTML = "Computer Wins, Better Luck Next Time";
    }
});
user[2].addEventListener("click", function(){
    val = 2;
    comp = Math.floor(Math.random() * 3);
    if(comp == 0){
        document.getElementById("cc").innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='rock.png'>";
    }
    else if(comp == 1){
        document.getElementById("cc").innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='paper.png'>";
    }
    else if(comp == 2){
        document.getElementById("cc").innerHTML = "Computers's Choice : ";
        document.getElementById('cp').innerHTML = "<img src='scissor.png'>";
    }
    if(val == comp){
        document.getElementById("result").innerHTML = "Draw";
    }
    else if((val == 2) && (comp == 0)){
        document.getElementById('result').innerHTML = "Computer Wins, Better Luck Next Time";
    }
    else if((val == 2) && (comp == 1)){
        document.getElementById('result').innerHTML = "Congratulations, You Win";
    }
});