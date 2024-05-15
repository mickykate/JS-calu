'use strict'

let result = document.getElementById("result");

function number(elem) {
  if (result.value === "0"){
// クリックされた数字だけが表示。
} else {
// 表示されている数字にクリックされた数字を連結。
  result.value = result.value + elem.value;
} console.log(result.value);
}

//演算子の繰り返し入力制御。小数点も同様に対応。
function edit(elem) {
  if (result.value.slice(-1) === '+' ){
   return;
} else if (result.value.slice(-1) === '-' ){
   return;
} else if (result.value.slice(-1) === '*' ){
   return;
} else if (result.value.slice(-1) === '/' ){
   return;
} else if (result.value.slice(-1) === '.'){
  return;
} else {
result.value = result.value + elem.value;
}
}

//数式の計算。
function calc() {
result.value = new Function("return " + result.value)();
}

function update(){
result.value = '';
}

//メモ：'use strict'モードでは、thisの値が設定されていないとundefinedのままになる。
//今度はconsole.logをうまく使ってみる。
//条件分岐はまず紙に言葉で書き出し整理してから、コードを書く。

