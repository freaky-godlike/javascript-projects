let user = document.getElementById('date');
user.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');
function Calculate(){
    let birthDate = new Date(user.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    let date, month, year;
    year = y2 - y1;
    if(m2 >= m1){
        month = m2 - m1;
    }else{
        year--;
        month = 12 + m2 - m1;
    }
    if(d2 >= d1){
        date = d2 - d1;
    }else{
        month--;
        date = GetDaysInMonth(y1, m1) + d2 - d1;
    }
    if(month < 0){
        month = 11;
        year--;
    }
    result.innerHTML = `You are <span>${year}</span> years <span>${month}</span> months <span>${date}</span> days old`;
}
function GetDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}