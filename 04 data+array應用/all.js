var country =[
	{
		farmer:'卡斯柏'
	},
	{	
		farmer:'查理'	
	}
]

var list = document.querySelector('.list');
var el = document.createElement('h2');
function updataList(){
	var str ='';
	var len =country.length;
	for(var i=0;len>i;i++){
		str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
	}
	list.innerHTML = str;
}

updataList();

function checkList(e){
	var num = e.target.dataset.num;
	if(e.target.nodeName !== 'LI'){return}
	el.textContent='你選擇的農夫是'+country[num].farmer;
	document.querySelector('.list').appendChild(el);
}
list.addEventListener('click',checkList,false);