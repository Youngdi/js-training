

var btn = document.querySelector(".btnClass");
var call = document.querySelector('.btnCall');
var el = document.createElement('h3');

function saveName(e){
	var str =document.querySelector(".textClass").value;
	localStorage.setItem('myName',str);
}

btn.addEventListener('click', saveName);

call.addEventListener('click', function(){
	var str = localStorage.getItem('myName');
	el.textContent =str+"你好，很高興認識你";
	document.querySelector('.box-in').appendChild(el);
});