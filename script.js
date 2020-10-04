'use strict';


//やりたいこと
// (1)縮小画像をcanvasで張り付ける
// (2)javascriptで画像の色を取得する
// (3)取得したrgbaをランダムに選んでHTMLに表示させる



//------- canvas idのcolorの要素をcanvasに代入
let canvas = document.getElementById('color');

//------- 描画機能が利用できるように2Dコンテキストを取得
let ctx = canvas.getContext('2d');

let imageColor  = new Image();
imageColor.src = 'test.png';



//------- 画像が読み込まれたらデータを取得する（できた！）
imageColor.addEventListener('load', function () {
  ctx.drawImage(imageColor, 0, 0, 10, 7);
  let imageData = ctx.getImageData(0, 0, 10, 7);
  let data = imageData.data;
    console.log(data);
    console.log(imageData);



//------- 数字を4つずつに分割した配列にする（できた！）
      const sliceByNumber = function (array, number) {
      const length = Math.ceil(array.length / number);
      return new Array(length).fill().map((_, i) =>
         array.slice(i * number, (i + 1) * number))
      }
       console.log(sliceByNumber(data, 4));
       let colors = sliceByNumber(data, 4);

       console.log(colors);//4分割にした配列を格納！





//------- 配列からランダムで10色選択をする（できた！）
        const selected = randomSelect(colors.slice(), 10);
     

          function randomSelect(array, num)
          {
            let newArray = [];
            
            while(newArray.length < num && colors.length > 0)
            {
              // 配列からランダムな要素を選ぶ
              const rand = Math.floor(Math.random() * colors.length);
              // 選んだ要素を別の配列に登録する
              newArray.push(colors[rand]);
              // もとの配列からは削除する
              colors.splice(rand, 1);
            }
            
            return newArray;
          }


      //呼び出し
      let answer = randomSelect(colors,10);//選ばれた10色の配列を格納
          console.log(answer);




//------- 10色のデータをrgbaデータに成形する（）

/*
        answer.forEach(function(item,index){
            let ary =  answer;
            let str = (`[rgba(${ary.join(',')})`);
            // str += ',';
            console.log(str);

        });
*/

// 'rgba(255,255,0)'に成形したい
// [ 117, 72, 52, 255 ]いまこれ

document.getElementById('c1').style.backgroundcolor = `'rgba(${answer[0]})'`;
console.log(`'rgba(${answer[0]})'`);
//成功！
// let ary =  [ 117, 72, 52, 255 ];
// let str = (`rgba(${ary.join(',')})`);
// console.log(str);
//rgba(255,255,255,255)







  });//imageColor.addEventListenerの閉じ


// 色を変える(完成！)
// document.getElementById('c1').style.color = answer[0];
// document.getElementById('c2').style.color = answer[1];
// document.getElementById('c3').style.color = answer[2];
// document.getElementById('c4').style.color = answer[3];
// document.getElementById('c5').style.color = answer[4];
// document.getElementById('c6').style.color = answer[5];
// document.getElementById('c7').style.color = answer[6];
// document.getElementById('c8').style.color = answer[7];
// document.getElementById('c9').style.color = answer[8];
// document.getElementById('c10').style.color = answer[9];








//------- 読み込まれたら画像を表示させる
// imageColor.onload = function () {
//   ctx.drawImage(imageColor, 0, 0, 30, 20);
//   let imageData = ctx.getImageData(0, 0, 30, 20);
//   let data = imageData.data;
//     console.log(data);
//     console.log(imageData);


// //数字を4つずつに分割した配列にする
//   const sliceByNumber = function (array, number) {
//   const length = Math.ceil(array.length / number);
//   return new Array(length).fill().map((_, i) =>
//      array.slice(i * number, (i + 1) * number))
//  }
//   console.log(sliceByNumber(data, 4));

  
//   };

//数字を4つずつに分割した配列にする
 
//console.log(sliceByNumber(data, 4));
  


    // console.log(data);
    // console.log(imageData);

// //------- 読み込まれたら画像を表示させる（onloadを短くしたもの・getImageDateが読み取れていない）
// imageColor.onload = function () {
//     ctx.drawImage(imageColor, 0, 0, 30, 20);
//   };


// let imageData = ctx.getImageData(0, 0, 30, 20);
// let data = imageData.data;
//     console.log(data);
//     console.log(imageData);




  //onloadイベントは「ローディング工程の終了時に発生」なので、onloadしないといけないもの「のみ」functionに入れる
  //変数を設定したり値を取得しても、スコープの問題で取り出せない（無名関数だから余計にむり）
  // しかも最後に発動するので、値をコンソールの表示しようとしても、読み込みがコンソールが先になるので「unidifined」になる
  //htmlを読み込んで表示して、そのあと。
  //drawImageは読み込み失敗防止のため、onloadを使用する
  //drawImage(描画するイメージ, sx, sy, sw, sh, dx, dy, dw, dh)メソッド
 // 単位はピクセル





//表示位置
//変数dataに取得したRGBAの配列が格納されている
//imageDataの中にはcanvas画像の縦横サイズ、RGBAデータがはいっている

// let data2 = function(){}

//数字を4つずつに分割した配列にする
// const sliceByNumber = function (array, number) {
//   const length = Math.ceil(array.length / number);
//   return new Array(length).fill().map((_, i) =>
//     array.slice(i * number, (i + 1) * number)
//   )
// }

//console.log(sliceByNumber(data, 4));
//numberは４（分割数）を引数にしている






//描画済みのコンテキストからデータをもらう
//rgbaデータは配列の形でdataに格納される
// let imageData = ctx.getImageData(0, 0, 150, 100);
// console.log(imageData);

// let data = imageData.data;

	// for(let item of data){
	// 	console.log(data);
	// }

//0930 取得した文字列を4つずつの数字の配列に分割する
//引数に分割対象の配列と、いくつずつに分割するか指定
//const sliceByNumber = function(array, number){
  //console.log('array', array);
  //console.log('number', number);
  //return array;
//}

//ファンクション呼び出し
//console.log(sliceByNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
//arrayに==>　[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//number==>　3
//出力結果
//Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//number:4（ナンバーは区切る数）


//作成する配列のサイズを計算
//const sliceByNumber = function(array, number) {
  //const length = Math.ceil(array.length / number);//切り上げ
  //console.log('length', length);
  //return array;
//}
//ファンクション呼び出し
//console.log(sliceByNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
//出力結果
//length 3
//Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//const sliceByNumber = function(array, number) {
  //const length = Math.ceil(array.length / number)
  //return new Array(length).fill().map((_, i) => {
    //console.log(`i=${i}, i*number=${i*number}, (i+1)*number=${(i+1)*number}`);
    //return i;
  //})
//}

//console.log(sliceByNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
//arrayオブジェクトのmap() メソッドとfill()メソッド
//map() メソッド与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成
//[キー, 値] の配列を返します。(_, i)
//fill() メソッド　配列中の開始位置から終了位置までの要素を固定値で設定（終了位置は含まず）
//配列の項目数を分割数（4）で割る
//i=0；i*i=0, i*number=0, (i+1)*number=3
// 出力
//i=1, i*number=3, (i+1)*number=6
// i=2, i*number=6, (i+1)*number=9
// i=3, i*number=9, (i+1)*number=12

// const sliceByNumber = (array, number) => {
//   const length = Math.ceil(array.length / number);
//   return new Array(length).fill().map((_, i) =>
//     array.slice(i * number, (i + 1) * number)
//   )
// }

// console.log(sliceByNumber(data, 4));