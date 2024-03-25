'use strict';
document.getElementById('btn').addEventListener("click", () => {
    let user = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    let conpass = document.getElementById('con-pass').value;
    if(pass != conpass){
        alert("Check Password Again");
    }else{
        alert("registration Successful");
    }
    localStorage.setItem('key2', email);
    localStorage.setItem('key3', conpass);
});