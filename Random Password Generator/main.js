const passwordBox = document.getElementById('password');
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "@#$%^&*()_+~|{}[]<>=-";
const Char = upperCase + lowerCase + Numbers + Symbols;
function CreatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += Numbers[Math.floor(Math.random() * Numbers.length)];
    password += Symbols[Math.floor(Math.random() * Symbols.length)];
    while(password.length < 16){
        password += Char[Math.floor(Math.random() * Char.length)];
    }
    passwordBox.value = password;
}
function CopyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}