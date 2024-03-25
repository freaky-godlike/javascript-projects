'use strict';
document.getElementById('btn').addEventListener("click", () => {
    let email = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    let mail = localStorage.getItem('key2');
    let conpass = localStorage.getItem('key3');
    if((email == mail) && (pass == conpass)){
        alert("Login Successful");
    }
    else{
        alert("Invalid Credentials");
    }
});