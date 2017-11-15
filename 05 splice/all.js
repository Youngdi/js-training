var country =[
	{
		farmer:'卡斯柏'
	},
	{	
		farmer:'查理'	
	},
	{	
		farmer:'喬治'	
	}
]

var list = document.querySelector('.list');

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
	if(e.target.nodeName !== 'LI'){return};
	country.splice(num,1);
	updataList();
	}	

list.addEventListener('click',checkList,false);