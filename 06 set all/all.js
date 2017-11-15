var list = document.querySelector('.list')
var sendData = document.querySelector('.memo-btn');
var data = JSON.parse(localStorage.getItem('memoContent')) || [];

sendData.addEventListener('click',addData);
list.addEventListener('click',toggleDone);
updateList(data);

  function addData(e) {
    e.preventDefault();
    var txt = document.querySelector('.memo-content').value;
    var todo = {
      content: txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('memoContent', JSON.stringify(data));
  }
  function updateList(items){
  	str ='';
  	var len = items.length;
  	for (var i=0;len>i;i++){
  		str += '<li><a href="#" data-index=' + i +  '/>刪除</a><span>' + items[i].content + '</span></li>';
  	}
  	list.innerHTML = str;
  }

  function toggleDone(e){
  	e.preventDefault();
  	if(e.target.nodeName !== 'A'){return};
  	var index = e.target.dataset.index;
  	data.splice(index,1);
  	localStorage.setItem('memoContent',JSON.stringify(data));
  	updateList(data);
  }