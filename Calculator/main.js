document.getElementById('disp').setAttribute("onfocus", "this.blur();");

var a = document.querySelectorAll(".btn");
for(var i=0; i<a.length; i++){
    a[i].addEventListener("click", function(){
        document.getElementById('disp').value += this.value;
    });
}

var b = document.getElementsByClassName("op");
for(var i=0; i<b.length; i++){
    b[i].addEventListener("click", function(){
        document.getElementById('disp').value += this.value;
    });
}
document.getElementById('eq').addEventListener("click", function(){
    var screenVal = document.getElementById('disp').value;
    var res = eval(screenVal);
    document.getElementById('disp').value = res;
});

document.getElementById('clear').addEventListener("click", function(){
    document.getElementById('disp').value = "";
});