document.getElementById('btn').addEventListener("click", function(){
    user = Math.floor(Math.random() * 6 + 1);
    comp = Math.floor(Math.random() * 6 + 1);
    document.getElementById('user').innerText = "Your Choice : "+user;
    document.getElementById('comp').innerText = "Computer Choice : "+comp;
    
    if((user == 6) && (comp == 6)){
        document.getElementById('result').innerHTML = "Draw";
    }
    else if((user < 6) && (comp < 6)){
        document.getElementById('result').innerHTML = "No one is Winner";
    }
    else if(user == 6){
        document.getElementById('result').innerHTML = "Congratulations, You Win";
    }
    else{
        document.getElementById('result').innerHTML = "Computer Wins";
    }
});