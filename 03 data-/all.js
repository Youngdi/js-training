var list =document.querySelector('.listbtn');
// 宣告變數選擇.listbtn
var el = document.createElement('h3');
// 創建num用的h3
var ex = document.createElement('h3');
// 創建dog用的h3
function checkList(e){
	var num = e.target.dataset.num;
	// 找出num的資料,使用dataset.num
	var dog = e.target.dataset.dog;
	// 找出dog的資料,使用dataset.dog
	el.textContent ="卡斯柏的編號是"+num;
	// 輸入內容
	ex.textContent ="他有"+dog+"隻狗";
	// 輸入內容
	document.querySelector('.list').appendChild(el);
	//決定要把他放在哪裡
	document.querySelector('.list').appendChild(ex);
	//決定要把他放在哪裡
}
//創建function
list.addEventListener('click',checkList,false)
//監聽click事件