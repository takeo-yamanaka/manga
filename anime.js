/**
* 「次へ」ボタンを押した際に、画面上の文章を書き換える機能
*
**/

function nextPage(){

  let story_area = document.getElementById("story_area");
  story_area.innerText = "ボタンを押した後の文章";

  let img_area = document.getElementById("img_area");
  img_area.src = "b.jpg";

}

function nextPage2(){

  let story_area = document.getElementById("story_area");
  story_area.innerText = "2回目ボタンを押した後の文章";

  let img_area = document.getElementById("img_area");
  img_area.src = "c.jpg";

}