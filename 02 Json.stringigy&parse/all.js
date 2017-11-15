var country=[
{farmer:"卡斯柏"}
];
// 創造陣列
var countryString =JSON.stringify(country);
// 轉成字串
localStorage.setItem('countryItem',countryString);
// 設定localStorage的值
var getData = localStorage.getItem('countryItem');
// 取出localStorage的值
var getDataAry = JSON.parse(getData);
// 轉成物件(objet)
console.log(getDataAry[0].farmer);
// 使用需要物件