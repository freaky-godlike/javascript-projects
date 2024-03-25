var imgbox = document.getElementById('imgBox');
var qrimg = document.getElementById('qrImg');
var qrtext = document.getElementById('qrText').value;
function GenerateQR(){
    if(qrtext.length > 0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext;
        imgbox.classList.add("show-img");
    }
    else{
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}