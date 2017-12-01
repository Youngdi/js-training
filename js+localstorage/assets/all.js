
var Result = document.querySelector('.result');
var Circleop = document.querySelector('.circleOP');
var CircleS = document.querySelector('.circle');
var litleCircle = document.querySelector('.litlecircle');
var Numbers = document.querySelector('.numbers');
var Report = document.querySelector('.report');
var newData = document.querySelector('.newdata');
var recordStyle =document.querySelector('.record');
var data = JSON.parse(localStorage.getItem('listData')) || [];
//時間變量
var dt = new Date();
var month = dt.getMonth()+1;
var day = dt.getDate();
var year = dt.getFullYear();
//監聽按結果
Result.addEventListener('click', count, false);
//監聽按重來
litleCircle.addEventListener('click',refresh,false);
//監聽按刪除
newData.addEventListener('click', toggleDone,false);
updateList(data);

//重來的事件
function refresh(e) {
    Result.style.display = "block";
    Circleop.style.display = "none";
}
//結果的事件
function count(e) {
    if (BMIresult == true){
    e.preventDefault();
    var Height = document.querySelector('.height').value;
    var Kg = document.querySelector('.kg').value;
    var BMI = Kg / ((Height / 100) * (Height / 100));
    var BMIresult = BMI.toFixed(2);
    var Time = month + '-' + day + '-' + year;
    Result.style.display = "none";
    Circleop.style.display = "flex";
    Numbers.textContent = BMIresult;

    if (BMIresult < 18.50) {
        CircleS.style.border = "6px solid #fffaaf";
        Circleop.style.color = "#fffaaf";
        litleCircle.style.backgroundColor = "#fffaaf";
        Report.textContent = "過輕";
    } else if (18.50 <= BMIresult && BMIresult < 24.00) {
        CircleS.style.border = "6px solid #78d406";
        Circleop.style.color = "#78d406";
        litleCircle.style.backgroundColor = "#78d406";
        Report.textContent = "理想";
    } else if (24.00 <= BMIresult && BMIresult < 27.00) {
        CircleS.style.border = "6px solid #f59f16";
        Circleop.style.color = "#f59f16";
        litleCircle.style.backgroundColor = "#f59f16";
        Report.textContent = "過重";
    } else if (27.00 <= BMIresult && BMIresult < 30.00) {
        CircleS.style.border = "6px solid #f56816";
        Circleop.style.color = "#f56816";
        litleCircle.style.backgroundColor = "#f56816";
        Report.textContent = "輕度肥胖";
    } else if (30.00 <= BMIresult && BMIresult < 35.00) {
        CircleS.style.border = "6px solid #f52d1b";
        Circleop.style.color = "#f52d1b";
        litleCircle.style.backgroundColor = "#f52d1b";
        Report.textContent = "中度肥胖";
    } else{
        CircleS.style.border = "6px solid #b11004";
        Circleop.style.color = "#b11004";
        litleCircle.style.backgroundColor = "#b11004";
        Report.textContent = "重度肥胖";        
    };
    } else {
        alert('請輸入數字');
    } ;

var record = {
    BMIstatus: Report.textContent,
    BMInumber: BMIresult,
    HeightValue: Height,
    KgValue: Kg,
    TimeValue: Time
};
data.push(record);
updateList(data);
localStorage.setItem('listData', JSON.stringify(data));
};
//寫下事件
function updateList(items) {
    if (BMIresult == true){
    str = '';
    var len = items.length;
    for (var i = 0; len > i; i++) {
        str += '<div class="col-12 mt-3 record" data-index='+ i +'><div class="col-md-2 py-2 "><h3 class="my-0">' + items[i].BMIstatus+'</h3></div>'+
            '<div class="col-md-2 recorditems "><p class="my-0 h6">BMI</p><p class="my-0 h4 ml-2">' + items[i].BMInumber +'</p></div>'+
            '<div class="col-md-2 recorditems "><p class="my-0 h6">weight</p><p class="my-0 h4 ml-2">' + items[i].KgValue + '</p></div>'+
            '<div class="col-md-2 recorditems "><p class="my-0 h6">height</p><p class="my-0 h4 ml-2">' + items[i].HeightValue + '</p></div>' +
            '<div class="col-md-2 recorditems"><p class="my-0 h6">' + items[i].TimeValue + '</p></div>' +
            '<div class="col-md-2 recorditems"><a href="#" class="my-0 h6 btn btn-dark toggle">刪除記錄</a></div></div>' 
        ;
    }
    newData.innerHTML = str;}
    else{
        str = '';
    }
}
function toggleDone(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') { return };
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}