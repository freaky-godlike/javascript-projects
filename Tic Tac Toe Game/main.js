let btns = document.querySelectorAll('.box');
var flag = 0;     //1->X 0->O
document.querySelector('#res').addEventListener("click", restart);
for(var i=0; i<9; i++){
    btns[i].addEventListener("click", function(){
        if(flag == 0){
            this.innerText = "X";
            document.getElementById('turn').innerHTML = "O's Turn &nbsp; &nbsp; &nbsp;";
            this.setAttribute("style", "pointer-events: none;");
            flag++;
            win_loss();
        }
        else if(flag == 1){
            this.innerText = "O";
            document.getElementById('turn').innerHTML = "X's Turn &nbsp; &nbsp; &nbsp;";
            this.setAttribute("style", "pointer-events: none;");
            flag--;
            win_loss();
        }
    });
}
function win_loss(){
    if((btns[0].innerText == "X" && btns[1].innerText == "X" && btns[2].innerText == "X")
    ||(btns[0].innerText == "X" && btns[4].innerText == "X" && btns[8].innerText == "X")
    ||(btns[0].innerText == "X" && btns[3].innerText == "X" && btns[6].innerText == "X") 
    ||(btns[1].innerText == "X" && btns[4].innerText == "X" && btns[7].innerText == "X") 
    ||(btns[2].innerText == "X" && btns[5].innerText == "X" && btns[8].innerText == "X") 
    ||(btns[2].innerText == "X" && btns[4].innerText == "X" && btns[6].innerText == "X") 
    ||(btns[3].innerText == "X" && btns[4].innerText == "X" && btns[5].innerText == "X")
    ||(btns[6].innerText == "X" && btns[7].innerText == "X" && btns[8].innerText == "X")){
        document.querySelector('.modal-bg').setAttribute("style", "display:flex;");
        document.querySelector('.mod_con').innerHTML = "X Won";
        flag2++;
    }
    else if((btns[0].innerText == "O" && btns[1].innerText == "O" && btns[2].innerText == "O") 
    ||(btns[0].innerText == "O" && btns[4].innerText == "O" && btns[8].innerText == "O") 
    ||(btns[0].innerText == "O" && btns[3].innerText == "O" && btns[6].innerText == "O") 
    ||(btns[1].innerText == "O" && btns[4].innerText == "O" && btns[7].innerText == "O") 
    ||(btns[2].innerText == "O" && btns[5].innerText == "O" && btns[8].innerText == "O") 
    ||(btns[2].innerText == "O" && btns[4].innerText == "O" && btns[6].innerText == "O") 
    ||(btns[3].innerText == "O" && btns[4].innerText == "O" && btns[5].innerText == "O") 
    ||(btns[6].innerText == "O" && btns[7].innerText == "O" && btns[8].innerText == "O")){
        document.querySelector('.modal-bg').setAttribute("style", "display:flex;");
        document.querySelector('.mod_con').innerHTML = "O Won";
        flag2++;
    }
}
function restart(){
    for(var i=0; i<9; i++){
        btns[i].innerText = "";
        btns[i].setAttribute("style", "pointer-events: all;");
    }
}